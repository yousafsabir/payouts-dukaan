import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { ChevronDown } from '@/components/svg'

export default function Header() {
	return (
		<header>
			{/* Top */}
			<div className='mb-6 flex items-center justify-between'>
				<h3 className='text-xl font-medium text-app-gray-800'>Overview</h3>
				<DurationSelect />
			</div>
			{/* Bottom Cards */}
		</header>
	)
}

const DurationSelect = () => {
	return (
		<Select defaultValue={'last-month'}>
			<SelectTrigger className='flex h-auto max-w-[137px] items-center gap-2 border-app-gray-150 px-[14px] py-[7px] focus:ring-0'>
				<SelectValue
					placeholder='Select Duration'
					className='text-base text-app-gray-700'
				/>
				<ChevronDown className='h-4 w-4' fill='#4D4D4D' />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Duration</SelectLabel>
					<SelectItem value='today'>Today</SelectItem>
					<SelectItem value='last-week'>Last Week</SelectItem>
					<SelectItem value='last-month'>Last Month</SelectItem>
					<SelectItem value='last-year'>Last Year</SelectItem>
					<SelectItem value='all-time'>All Time</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
