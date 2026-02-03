'use client';

import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { useAuth, useUser, useFirestore, useDoc, useMemoFirebase, useCollection } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { collection, doc, updateDoc } from 'firebase/firestore';
import { Loader2, ShieldAlert, BadgeCheck, Check, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  role: 'admin' | 'user';
}

interface OutreachProposal {
  id: string;
  companyName: string;
  triggeringNewsUrl: string;
  status: "draft" | "approved" | "sent" | "rejected";
  proposalTitle: string;
  proposalBody: string;
  createdAt: string; // ISO String
}

function AdminDashboard() {
  const { user } = useUser();
  const firestore = useFirestore();

  const proposalsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'outreachProposals');
  }, [firestore]);

  const { data: proposals, isLoading } = useCollection<OutreachProposal>(proposalsQuery);
  
  const handleUpdateStatus = async (proposalId: string, status: OutreachProposal['status']) => {
    if (!firestore) return;
    const proposalRef = doc(firestore, 'outreachProposals', proposalId);
    await updateDoc(proposalRef, { status });
  };
  
  const getStatusVariant = (status: OutreachProposal['status']) => {
    switch (status) {
      case 'approved':
        return 'default';
      case 'rejected':
        return 'destructive';
      case 'sent':
        return 'secondary';
      default:
        return 'outline';
    }
  }

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
            <CardTitle>Sovereign Engine: Outreach Proposals</CardTitle>
            <CardDescription>Review and approve agent-generated proposals before they are sent.</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="flex justify-center items-center h-40">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}
            {!isLoading && (!proposals || proposals.length === 0) && (
              <p className="text-center text-muted-foreground py-8">No outreach proposals pending review.</p>
            )}
            {!isLoading && proposals && proposals.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {proposals.map(proposal => (
                        <Card key={proposal.id} className="bg-background/50 flex flex-col">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-lg">{proposal.companyName}</CardTitle>
                                        <CardDescription>
                                            Generated on {format(new Date(proposal.createdAt), "PPP")}
                                        </CardDescription>
                                    </div>
                                    <Badge variant={getStatusVariant(proposal.status)}>{proposal.status}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <h3 className="font-semibold text-foreground mb-2">{proposal.proposalTitle}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-4">{proposal.proposalBody}</p>
                                <a href={proposal.triggeringNewsUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline mt-2 block">
                                  Triggering News
                                </a>
                            </CardContent>
                            <CardFooter className="flex justify-end gap-2">
                                <Button variant="outline" size="sm" onClick={() => handleUpdateStatus(proposal.id, 'rejected')} disabled={proposal.status !== 'draft'}>
                                    <X className="h-4 w-4 mr-1" /> Reject
                                </Button>
                                <Button size="sm" onClick={() => handleUpdateStatus(proposal.id, 'approved')} disabled={proposal.status !== 'draft'}>
                                    <Check className="h-4 w-4 mr-1" /> Approve
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
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
            <Button variant="destructive" className="mt-4" onClick={() => auth?.signOut()}>Sign Out</Button>
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
        if (!auth || !firestore) return;
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            
            const userRef = doc(firestore, 'users', user.uid);
            await setDoc(userRef, {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                role: 'user' 
            }, { merge: true });

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
        
        if (userProfile && userProfile.role === 'admin') {
            return <AdminDashboard />;
        } else {
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
