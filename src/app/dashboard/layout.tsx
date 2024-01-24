import RootDashboardLayout from '@/screens/dashboard/layout'

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <RootDashboardLayout>{children}</RootDashboardLayout>
}
