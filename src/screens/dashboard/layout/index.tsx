import DashboardNavbar from './Navbar'
import DashboardSidebar from './Sidebar'

export default function RootDashboardLayout({ children }: { children?: React.ReactNode }) {
	return (
		<main className='relative flex min-h-screen'>
			<DashboardSidebar />
			<DashboardNavbar />
			<main className='m-0 h-full flex-1 bg-app-gray-30 px-4 py-6 pt-[calc(32px+57px)] sm:p-8 sm:pt-[calc(32px+65px)] lg:ml-[224px]'>
				{children}
			</main>
		</main>
	)
}
