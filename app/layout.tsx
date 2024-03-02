import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';
import { ruRU, enUS } from '@clerk/localizations';

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
		<ClerkProvider
			localization={enUS}
			appearance={{ variables: { colorPrimary: '#624cf5' } }}
		>
			<html lang="en">
				<body className={cn('font-IBMPlex antialiased', IBMPLEX.variable)}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
