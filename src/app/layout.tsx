import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { FirebaseClientProvider } from '@/firebase/client-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Eve Count Quantum Systems | Enterprise Quantum & AI',
    template: '%s | Eve Count Quantum Systems',
  },
  description: 'Eve Count Quantum Systems translates quantum complexity into actionable enterprise strategy, code, and computational architecture.',
  metadataBase: new URL('https://www.evecount.com'),
  icons: {
    icon: '/images/evecount-logo.png',
    shortcut: '/images/evecount-logo.png',
    apple: '/images/evecount-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/images/evecount-logo.png" />
        <link rel="apple-touch-icon" href="/images/evecount-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        <FirebaseClientProvider>
          {children}
        </FirebaseClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
