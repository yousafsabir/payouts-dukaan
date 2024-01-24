import DashboardNavbar from './Navbar'
import DashboardSidebar from './Sidebar'

export default function RootDashboardLayout({ children }: { children?: React.ReactNode }) {
	return (
		<main className='relative flex min-h-screen'>
			<DashboardSidebar />
			<main className='flex-1'>
				<DashboardNavbar />
				{children}
			</main>
		</main>
	)
}
