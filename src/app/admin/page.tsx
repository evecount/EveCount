'use client';

import React, { useMemo } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { useAuth, useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Loader2, ShieldAlert, BadgeCheck } from 'lucide-react';

// Simplified UserProfile type based on backend.json
interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  role: 'admin' | 'user';
}

function AdminDashboard() {
  const { user } = useUser();
  return (
    <div className="space-y-8">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold">Command Center</h1>
                <p className="text-muted-foreground">Welcome back, {user?.displayName || 'Admin'}.</p>
            </div>
            <BadgeCheck className="h-10 w-10 text-green-500" />
        </div>
        
        <Card className="bg-secondary/20">
          <CardHeader>
            <CardTitle>Agentic Pipeline Overview</CardTitle>
            <CardDescription>Real-time status of incoming venture submissions.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">This dashboard is under construction. It will soon provide a real-time overview of incoming venture pitches, the AI Co-Founder's analysis, and routing recommendations. Human partners will be able to review, approve, and override agentic decisions from this command center.</p>
          </CardContent>
        </Card>
    </div>
  );
}

function AccessDenied() {
  const auth = useAuth();
  return (
    <div className="space-y-8">
        <Card className="border-destructive bg-destructive/10">
          <CardHeader>
             <div className="flex items-center gap-4">
                <ShieldAlert className="h-8 w-8 text-destructive" />
                <div>
                    <CardTitle>Access Denied</CardTitle>
                    <CardDescription>Your account does not have administrative privileges.</CardDescription>
                </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This area is restricted. If you are a team member, please contact an existing administrator to have your role elevated.
            </p>
            <Button variant="destructive" className="mt-4" onClick={() => auth.signOut()}>Sign Out</Button>
          </CardContent>
        </Card>
        
        <Card className="bg-secondary/20">
            <CardHeader>
                <CardTitle>First-Time Admin Setup</CardTitle>
                <CardDescription>Is this your first time setting up an admin?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-muted-foreground">For security, the first admin account must be assigned manually. This is a one-time process.</p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Make sure you have signed in here at least once with your Google account.</li>
                    <li>Go to your project's <span className="font-semibold text-foreground">Firebase Console</span>.</li>
                    <li>Navigate to <span className="font-semibold text-foreground">Firestore Database</span>.</li>
                    <li>In the `users` collection, find the document with your email.</li>
                    <li>Edit that document and change the `role` field from `"user"` to `"admin"`.</li>
                </ol>
                <p className="text-sm text-muted-foreground">After completing these steps, refresh this page. This manual step ensures that only the project owner can create the first administrator.</p>
            </CardContent>
        </Card>
    </div>
  );
}

function AdminSignIn() {
    const auth = useAuth();
    const firestore = useFirestore();

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            
            // Create or merge user profile in Firestore
            const userRef = doc(firestore, 'users', user.uid);
            await setDoc(userRef, {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                role: 'user' // Default role
            }, { merge: true }); // Merge to avoid overwriting the role if already set

        } catch (error) {
            console.error("Error during Google sign-in:", error);
        }
    };

    return (
        <Card className="max-w-md mx-auto bg-card text-card-foreground">
            <CardHeader className="text-center">
                <CardTitle>Admin Access</CardTitle>
                <CardDescription>Sign in to access the Command Center.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button className="w-full" onClick={handleGoogleSignIn}>
                    Sign in with Google
                </Button>
            </CardContent>
        </Card>
    );
}

export default function AdminPage() {
    const { user, isUserLoading } = useUser();
    const firestore = useFirestore();

    // Memoize the document reference
    const userProfileRef = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return doc(firestore, 'users', user.uid);
    }, [firestore, user]);

    const { data: userProfile, isLoading: isProfileLoading } = useDoc<UserProfile>(userProfileRef);

    const renderContent = () => {
        if (isUserLoading || (user && isProfileLoading)) {
            return <div className="flex justify-center items-center h-40"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
        }

        if (!user) {
            return <AdminSignIn />;
        }
        
        // At this point, user is logged in. Check their profile from the DB.
        if (userProfile && userProfile.role === 'admin') {
            return <AdminDashboard />;
        } else {
            // This covers cases where profile exists but isn't admin, or profile doesn't exist yet (should be rare)
            return <AccessDenied />;
        }
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-16 md:py-24">
                <div className="container">
                    {renderContent()}
                </div>
            </main>
            <Footer />
        </div>
    );
}
