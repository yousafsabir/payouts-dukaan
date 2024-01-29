import DashboardNavbar from './Navbar'
import DashboardSidebar from './Sidebar'

export default function RootDashboardLayout({ children }: { children?: React.ReactNode }) {
	return (
		<main className='relative flex min-h-screen'>
			<DashboardSidebar />
			<main className='flex-1'>
				<DashboardNavbar />
				<main className='bg-app-gray-30 h-full p-8'>{children}</main>
			</main>
		</main>
	)
}
