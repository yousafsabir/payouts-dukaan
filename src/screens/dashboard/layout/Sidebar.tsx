'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { clientData } from '@/lib/db'
import {
	ChevronLeft,
	ChevronDown,
	Home,
	Clipboard,
	Grid,
	Truck,
	Speaker,
	Bars,
	Money,
	Cursor,
	DiscountGear,
	Persons,
	Pallete,
	ElectricSpark,
	Wallet,
} from '@/components/svg'

const sidebarLinks: Array<{
	name: string
	icon: JSX.Element
	link: string
}> = [
	{
		name: 'Home',
		icon: <Home />,
		link: '/dashboard',
	},
	{
		name: 'Orders',
		icon: <Clipboard />,
		link: '/dashboard/orders',
	},
	{
		name: 'Products',
		icon: <Grid />,
		link: '/dashboard/products',
	},
	{
		name: 'Delivery',
		icon: <Truck />,
		link: '/dashboard/delivery',
	},
	{
		name: 'Marketing',
		icon: <Speaker />,
		link: '/dashboard/marketing',
	},
	{
		name: 'Analytics',
		icon: <Bars />,
		link: '/dashboard/analytics',
	},
	{
		name: 'Payments',
		icon: <Money />,
		link: '/dashboard/payments',
	},
	{
		name: 'Tools',
		icon: <Cursor />,
		link: '/dashboard/tools',
	},
	{
		name: 'Discounts',
		icon: <DiscountGear />,
		link: '/dashboard/discounts',
	},
	{
		name: 'Audience',
		icon: <Persons />,
		link: '/dashboard/audience',
	},
	{
		name: 'Appearance',
		icon: <Pallete />,
		link: '/dashboard/appearance',
	},
	{
		name: 'Plugins',
		icon: <ElectricSpark />,
		link: '/dashboard/plugins',
	},
]

export default function DashboardSidebar() {
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const currentPath = usePathname()
	return (
		<>
			<aside
				className={cn(
					'fixed bottom-0 top-0 z-20 min-h-full w-[224px] bg-app-blue-800 px-2 py-4 text-app-white transition-sidebar duration-300 lg:left-0 lg:max-w-[224px] lg:flex-1',
					{
						'-left-[224px]': !sidebarOpen,
						'left-0': sidebarOpen,
					},
				)}>
				<nav className='flex h-full w-full flex-col'>
					{/* Open Sidebar */}
					<div
						className={cn(
							'absolute -right-5 top-3 flex h-6 w-5 cursor-pointer items-center justify-center rounded-l-[-5px] rounded-r-md bg-app-blue-800 sm:top-5 lg:hidden ',
						)}
						onClick={() => setSidebarOpen((prev) => !prev)}>
						<div
							className={cn('transition-transform duration-300', {
								'rotate-180': sidebarOpen,
							})}>
							<ChevronLeft fill='#fff' />
						</div>
					</div>

					{/* Client Brand Logo/Name */}
					<header className='mb-6 flex h-10 items-center gap-3 px-2'>
						<img
							className='aspect-square w-10 rounded object-cover object-center '
							src={clientData.logo}
							alt={`${clientData.name}'s Logo`}
						/>
						<div className='flex-1'>
							<h3 className='text-ellipsis text-[15px] font-medium leading-[22px]'>
								{clientData.name}
							</h3>
							<Link
								className='text-[13px] font-light leading-4 underline '
								href={clientData.storeLink}
								target='_blank'>
								Visit Store
							</Link>
						</div>
						<div className='cursor-pointer'>
							<ChevronDown />
						</div>
					</header>

					{/* Links to Pages */}
					<ul className='mb-4 flex-1'>
						{sidebarLinks.map((link) => (
							<li key={link.link}>
								<Link
									className={cn('flex items-center gap-3 rounded px-4 py-2', {
										'bg-app-blue-700': currentPath === link.link,
									})}
									href={link.link}
									onClick={() => setSidebarOpen(false)}>
									{link.icon} <span className=''>{link.name}</span>
								</Link>
							</li>
						))}
					</ul>

					{/* Available Credits */}
					<div className='mt-auto flex w-[192px] items-center gap-3 self-center rounded bg-app-blue-700 px-3 py-[6px]'>
						<div className='flex h-9 w-9 items-center justify-center rounded bg-app-blue-600'>
							<Wallet />
						</div>
						<div>
							<p className='text-[13px] font-light leading-4'>Available credits</p>
							<p className='text-base leading-6 '>222.10</p>
						</div>
					</div>
				</nav>
			</aside>
			{/* Overlay */}
			<div
				className={cn(
					'fixed bottom-0 top-0 z-10 w-[100vw] cursor-pointer bg-black/10 transition-opacity duration-300 lg:hidden',
					{
						'-left-full opacity-0': !sidebarOpen,
						'left-0 opacity-100': sidebarOpen,
					},
				)}
				onClick={() => setSidebarOpen(false)}></div>
		</>
	)
}
