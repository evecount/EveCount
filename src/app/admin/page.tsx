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
  return (
    <Card className="bg-secondary/20">
      <CardHeader>
        <div className="flex items-center gap-4">
          <BadgeCheck className="h-8 w-8 text-green-500" />
          <div>
            <CardTitle>Command Center</CardTitle>
            <CardDescription>Welcome, Admin. The Agentic Command Center is under development.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">This dashboard will provide a real-time overview of incoming venture pitches, AI-driven analysis, and routing recommendations. Human partners will be able to review, approve, or override agentic decisions from here.</p>
      </CardContent>
    </Card>
  );
}

function AccessDenied() {
  const auth = useAuth();
  return (
    <Card className="border-destructive bg-destructive/10">
      <CardHeader>
         <div className="flex items-center gap-4">
            <ShieldAlert className="h-8 w-8 text-destructive" />
            <div>
                <CardTitle>Access Denied</CardTitle>
                <CardDescription>You do not have administrative privileges.</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          This area is restricted to authorized personnel. If you believe this is an error, please contact the system administrator to have your role updated.
        </p>
        <Button variant="destructive" className="mt-4" onClick={() => auth.signOut()}>Sign Out</Button>
      </CardContent>
    </Card>
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
