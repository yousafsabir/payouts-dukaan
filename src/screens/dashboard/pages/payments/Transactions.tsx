'use client'

import { useSearchParams } from 'next/navigation'

import { Input } from '@/components'
import { Button } from '@/components/ui/button'
import { TwoOppositeArrows, Download as DownloadIcon } from '@/components/svg'
import {
	paymentsDurationSelect,
	defaultKey_paymentsDurationSelect,
	type KeyofPaymentsDurationSelect,
} from '.'

export default function Transactions() {
	const params = useSearchParams()

	return (
		<main>
			<header className='mb-5 text-xl font-medium text-app-gray-800'>
				<h2>
					Transactions |{' '}
					{
						paymentsDurationSelect[
							(params.get('duration') as KeyofPaymentsDurationSelect) ||
								defaultKey_paymentsDurationSelect
						]
					}
				</h2>
			</header>

			{/* Table */}
			<main className='rounded-lg bg-app-white p-3 shadow-info-card'>
				<header className='flex justify-between'>
					<Input
						classNames={{
							wrapper:
								'rounded bg-app-white border border-app-gray-150 max-w-[248px]',
							input: 'text-app-gray-400 placeholder:text-app-gray-400',
						}}
						inputProps={{ placeholder: 'Search by order ID...' }}
						iconFill='#999'
					/>
					<div className='flex items-center space-x-3'>
						<Sort />
						<Download />
					</div>
				</header>
			</main>
		</main>
	)
}

const Sort = () => {
	return (
		<Button
			variant={'outline'}
			className='inline-flex h-10 max-w-[248px] items-center gap-[6px] rounded border-app-gray-150 bg-app-white px-3'>
			<span className='text-base font-light text-app-gray-800'>Sort</span>
			<TwoOppositeArrows />
		</Button>
	)
}

const Download = () => {
	return (
		<Button
			variant={'outline'}
			className='inline-flex h-10 max-w-[248px] items-center gap-[6px] rounded border-app-gray-150 bg-app-white px-3'>
			<DownloadIcon />
		</Button>
	)
}
