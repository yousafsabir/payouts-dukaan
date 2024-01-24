'use client'
import { useState } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { clientData } from '@/lib/db'
import { ChevronLeft, ChevronDown } from '@/components/svg'

export default function DashboardSidebar() {
	const [sidebarOpen, setSidebarOpen] = useState(false)
	return (
		<>
			<aside
				className={cn(
					'transition-sidebar bg-app-blue-800 text-app-white absolute bottom-0 top-0 z-20 min-h-full w-[224px] px-[10px] py-4 duration-300 lg:static lg:max-w-[224px] lg:flex-1',
					{
						'-left-[224px]': !sidebarOpen,
						'left-0': sidebarOpen,
					},
				)}>
				<nav className='w-full'>
					{/* Open Sidebar */}
					<div
						className={cn(
							'bg-app-blue-800 absolute -right-5 top-2 flex h-6 w-5 cursor-pointer items-center justify-center rounded-l-[-5px] rounded-r-md lg:hidden ',
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
				</nav>
			</aside>
			{/* Overlay */}
			<div
				className={cn(
					'absolute bottom-0 top-0 z-10 w-[100vw] cursor-pointer bg-black/10 transition-opacity duration-300 lg:hidden',
					{
						'-left-full opacity-0': !sidebarOpen,
						'left-0 opacity-100': sidebarOpen,
					},
				)}
				onClick={() => setSidebarOpen(false)}></div>
		</>
	)
}
