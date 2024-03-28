'use client'

import { Suspense } from 'react'
import { useQueryParams } from '@/lib/utils'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { ChevronDown } from '@/components/svg'
import { paymentsDurationSelect, defaultKey_paymentsDurationSelect } from '.'

export default function Header() {
	return (
		<header>
			{/* Top */}
			<div className='mb-6 flex items-center justify-between'>
				<h3 className='text-xl font-medium text-app-gray-800'>Overview</h3>
				<Suspense>
					<DurationSelect />
				</Suspense>
			</div>
			{/* Bottom Cards */}
			<div className='mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2'>
				<InfoCard title='Online orders' content='231' />
				<InfoCard title='Amount received' content='₹23,92,312.19' />
			</div>
		</header>
	)
}

const DurationSelect = () => {
	const { params, updateParam } = useQueryParams()
	return (
		<Select
			defaultValue={params.get('duration') || defaultKey_paymentsDurationSelect}
			onValueChange={(v) => updateParam('duration', v)}>
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
					{Object.entries(paymentsDurationSelect).map(([key, val]) => (
						<SelectItem value={key} key={key}>
							{val}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

const InfoCard = (props: { title: string; content: string }) => {
	return (
		<article className='rounded-lg bg-app-white p-5 shadow-info-card'>
			<p className='mb-4 text-base text-app-blue-700'>{props.title}</p>
			<h4 className='text-[32px] font-medium leading-[38px] text-app-gray-800'>
				{props.content}
			</h4>
		</article>
	)
}
