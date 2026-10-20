import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Pelumi Oke | AWS Cloud Engineer', description: 'AWS cloud architecture, DevOps, migration and cost optimization portfolio of Pelumi Oke.' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
