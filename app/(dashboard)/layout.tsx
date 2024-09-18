'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Home, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@/lib/auth';
import { signOut } from '@/app/(login)/actions';
import { useRouter } from 'next/navigation';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useUser();
  const router = useRouter();

  async function handleSignOut() {
    setUser(null);
    await signOut();
    router.push('/');
  }

  return (
    <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="https://ucarecdn.com/801d46ca-f6d7-4661-9160-e14022ae0937/barklogolight.svg" 
            alt="BARK Logo" 
            width={100} 
            height={40} 
            className="mr-2" 
          />
          <div className="flex items-center">
            <span className="ml-2 text-xs font-semibold bg-sand-400 text-gray-200 py-1 px-2 rounded-full dark:bg-sand-600">
              
            </span>
          </div>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            href="/#"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Collection
          </Link>
          <Link
            href="/collection"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          {user ? (
            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage 
                    alt={user.name || ''} 
                    src={user.profilePicture || '/path/to/default-avatar.png'} 
                  />
                  <AvatarFallback>
                    {user.email
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
                <DropdownMenuItem className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Link href="/dashboard" className="flex w-full items-center">
                    <Home className="h-4 w-4 text-gray-700 dark:text-gray-400" />
                    <span className="ml-2">Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <form action={handleSignOut} className="p-2">
                  <button type="submit" className="flex w-full">
                    <DropdownMenuItem className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <LogOut className="h-4 w-4 text-gray-700 dark:text-gray-400" />
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </button>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              asChild
              className="bg-black hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-sm"
            >
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
    </section>
  );
}
