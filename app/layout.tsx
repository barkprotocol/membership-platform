import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { UserProvider } from '@/lib/auth';
import { getUser } from '@/lib/db/queries';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'BARK',
  description: 'Club Memberships and NFT Platform',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch user data
  let userPromise = getUser();

  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <body className="min-h-screen bg-gray-50">
        <Suspense fallback={<div>Loading...</div>}>
          <UserProvider userPromise={userPromise}>{children}</UserProvider>
        </Suspense>
      </body>
    </html>
  );
}
