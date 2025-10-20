import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import ControllerProvider from '@/components/controllerComponent';
export const metadata: Metadata = {
  title: 'My Next.js Blog',
  description: 'A blog built with Next.js 14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation */}
        {/* <nav className="bg-gray-800 text-white p-4">
          <div className="max-w-6xl mx-auto flex gap-6">
            <Link href="/" className="hover:text-blue-300">Home</Link>
            <Link href="/about" className="hover:text-blue-300">About</Link>
            <Link href="/board" className="hover:text-blue-300">Board</Link>
          </div>
        </nav> */}

        {/* Main Content */}
        <main className="max-w-6xl mx-auto">
          <ControllerProvider>
            {children}
          </ControllerProvider>
        </main>

        {/* Footer */}
        {/* <footer className="bg-gray-100 text-center p-6 mt-12">
          <p className="text-gray-600">© 2024 My Blog. Built with Next.js</p>
        </footer> */}
      </body>
    </html>
  );
}