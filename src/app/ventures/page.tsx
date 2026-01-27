'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Portfolio } from '@/components/sections/portfolio';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lock } from 'lucide-react';

// IMPORTANT: This is a simple client-side password protection for demonstration purposes.
// For a production application, you should use a proper authentication system.
const PASSWORD = 'Eve';

export default function VenturesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {!isAuthenticated ? (
          <section className="bg-background py-16 md:py-24 lg:py-32">
            <div className="container flex h-full min-h-[calc(100vh-250px)] items-center justify-center">
                <div className="w-full max-w-md">
                    <Card className="bg-card text-card-foreground">
                        <CardHeader className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                                <Lock className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <CardTitle className="mt-4 text-3xl font-bold">Protected Area</CardTitle>
                            <CardDescription className="text-muted-foreground">This content is confidential. Please enter the password to proceed.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handlePasswordSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Input
                                    type="text"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    autoFocus
                                    className="text-center"
                                />
                                {error && <p className="text-sm text-destructive">{error}</p>}
                            </div>
                            <Button type="submit" className="w-full">
                                Unlock Ventures
                            </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
          </section>
        ) : (
          <div className="py-16 md:py-24 lg:py-32">
             <Portfolio />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
