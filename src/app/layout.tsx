import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Regsure | Know your business by heart', description: 'Stock, sales, and customer records for the businesses that keep communities moving.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
