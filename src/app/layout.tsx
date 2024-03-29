import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Payments - Dukaan',
	description:
		'A portfolio frontend project aimed to showcase my pixel-perfection skill. link to figma: https://t.co/0oUgtwer25',
}

export const viewport: Viewport = {
	themeColor: '#1E2640',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
