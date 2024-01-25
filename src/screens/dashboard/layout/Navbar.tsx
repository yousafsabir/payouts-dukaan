'use client'
import { usePathname } from 'next/navigation'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { Info, Search, SpeakerFill, ChevronDownFill } from '@/components/svg'

export default function DashboardNavbar() {
	const rawPath = usePathname()
	const path = rawPath.split('/').slice(-1)[0]

	return (
		<header className='flex items-center justify-between border-b border-app-gray-150 bg-app-white px-8 py-3'>
			{/* Left */}
			<div className='flex items-center gap-2'>
				<p className='w-[80px] text-[15px] capitalize leading-[22px] text-app-gray-800 '>
					{path}
				</p>
				<HowItWorks />
			</div>

			{/* Middle Search */}
			<div className='flex max-w-[400px] flex-1 items-center gap-1 rounded-md bg-app-gray-50 px-4 py-[9px]'>
				<Search />
				<input
					type='text'
					className='bg-transparent outline-none placeholder:text-app-gray-500'
					placeholder='Search features, tutorials, etc.'
				/>
			</div>

			{/* Right Icons */}
			<div className='flex gap-3'>
				<SpeakerFill />
				<ChevronDownFill />
			</div>
		</header>
	)
}

const HowItWorks = () => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						variant={'link'}
						className='flex items-center gap-[6px] hover:no-underline'>
						<Info />
						<span className='text-xs text-app-gray-700'>How it works</span>
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Hey!! how are you?? 🎗️</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
