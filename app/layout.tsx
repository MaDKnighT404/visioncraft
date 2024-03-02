import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const IBMPLEX = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-ibm-plex',
});

export const metadata: Metadata = {
	title: 'Vision Craft',
	description: 'Image generator with AI power',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn('font-IBMPlex antialiased', IBMPLEX.variable)}>{children}</body>
		</html>
	);
}
