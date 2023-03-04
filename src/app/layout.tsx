import Header from '@/components/Header/Header';
import { Metadata } from 'next';
import './globals.css';
import FlowbiteContext from '@/context/FlowbiteContext';
import React from 'react';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'My Aimed Movies',
  description: 'The website where you can find your favorite movies and series',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FlowbiteContext>
          <div className="h-screen dark:bg-gray-900">
            <Header />
            <div className="mx-5">{children}</div>
            <Footer />
          </div>
        </FlowbiteContext>
      </body>
    </html>
  );
}
