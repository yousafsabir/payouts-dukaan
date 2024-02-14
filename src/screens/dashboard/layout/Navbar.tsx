'use client'
import { usePathname } from 'next/navigation'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { Info, SpeakerFill, ChevronDownFill } from '@/components/svg'
import { Input } from '@/components'

export default function DashboardNavbar() {
	const rawPath = usePathname()
	const path = rawPath.split('/').slice(-1)[0]

	return (
		<header className='fixed left-0 z-10 right-0 top-0 flex items-center justify-between gap-4 border-b border-app-gray-150 bg-app-white px-5 py-2 pl-8 sm:px-8 sm:py-3 lg:left-[224px]'>
			{/* Left */}
			<div className='flex items-center gap-2'>
				<p className='text-[15px] font-medium capitalize leading-[22px] text-app-gray-800 lg:w-[80px] '>
					{path}
				</p>
				<HowItWorks />
			</div>
			{/* Middle Search */}
			<Input inputProps={{ placeholder: 'Search features, tutorials, etc.' }} />
			{/* Right Icons */}
			<div className='flex gap-3'>
				<SpeakerFill className='h-8 w-8 sm:h-10 sm:w-10 ' />
				<ChevronDownFill className='h-8 w-8 sm:h-10 sm:w-10 ' />
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
						className='flex items-center gap-[6px] p-0 hover:no-underline'>
						<Info />
						<span className='hidden text-xs text-app-gray-700 md:block'>
							How it works
						</span>
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Hey!! how are you?? 🎗️</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
