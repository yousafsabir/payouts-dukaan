'use client'

import { Suspense } from 'react'
import { useQueryParams } from '@/lib/utils'

import { cn } from '@/lib/utils'
import { Input } from '@/components'
import { Button } from '@/components/ui/button'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination'
import { TwoOppositeArrows, Info, Download as DownloadIcon } from '@/components/svg'
import {
	paymentsDurationSelect,
	defaultKey_paymentsDurationSelect,
	type KeyofPaymentsDurationSelect,
} from '.'
import { InfoTip } from '@/components'

function TransactionsSection() {
	const { params } = useQueryParams()

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
			<main className='flex flex-col rounded-lg bg-app-white p-3 shadow-info-card'>
				<header className='mb-3 flex flex-1 justify-between gap-3'>
					<Input
						classNames={{
							wrapper:
								'rounded bg-app-white border border-app-gray-150 max-w-[248px]',
							input: 'text-app-gray-400 placeholder:text-app-gray-400',
						}}
						inputProps={{ placeholder: 'Search by order ID...' }}
						iconFill='#999'
					/>
					<div className='flex items-center space-x-[6px] sm:space-x-3'>
						<Sort />
						<Download />
					</div>
				</header>

				{/* Table */}
				<TransactionsTable />
			</main>
		</main>
	)
}

export default function Transactions() {
	return (
		<Suspense>
			<TransactionsSection />
		</Suspense>
	)
}

const Sort = () => {
	return (
		<Button
			variant={'outline'}
			className='inline-flex h-8 max-w-[248px] items-center gap-[6px] rounded border-app-gray-150 bg-app-white px-3 sm:h-10'>
			<span className='text-base font-light text-app-gray-800'>Sort</span>
			<TwoOppositeArrows />
		</Button>
	)
}

const Download = () => {
	return (
		<Button
			variant={'outline'}
			className='inline-flex h-8 max-w-[248px] items-center gap-[6px] rounded border-app-gray-150 bg-app-white px-3 sm:h-10'>
			<DownloadIcon />
		</Button>
	)
}

const transaction = {
	id: '#281209',
	date: '7 July, 2023',
	amount: '₹1,278.23',
	fees: '₹22',
}

const transactions = Array.from(Array(5), (_) => transaction)

const TransactionsTable = () => {
	const { params, updateParam } = useQueryParams()
	return (
		<>
			<Table className='mb-6'>
				<TableHeader className='rounded bg-app-gray-50'>
					<TableRow className='rounded-lg border-b-0'>
						<TableHead className='text-app-gray-700'>Order ID</TableHead>
						<TableHead className='text-app-gray-700'>Order Date</TableHead>
						<TableHead className='text-right text-app-gray-700'>Order Amount</TableHead>
						<TableHead className='flex justify-end text-app-gray-700'>
							<InfoTip
								heading={
									<>
										<span className='text-app-gray-800'>Transaction Fees</span>
										<Info />
									</>
								}
								content={
									<p>
										Transaction fees are charged as a percentage of
										<br />
										the order amount according to your plan.
									</p>
								}
							/>
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{transactions.map((trx, idx) => (
						<TableRow key={`${trx.id}-${idx}`}>
							<TableCell className='font-medium text-app-blue-500'>
								{trx.id}
							</TableCell>
							<TableCell className='text-app-gray-800'>{trx.date}</TableCell>
							<TableCell className='text-right text-app-gray-800'>
								{trx.amount}
							</TableCell>
							<TableCell className='text-right text-app-gray-800'>
								{trx.fees}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Pagination className='text-app-gray-700'>
				<PaginationContent className='gap-0 space-x-1'>
					<PaginationItem className='mr-6'>
						<PaginationPrevious
							href='#'
							className='h-8 rounded border border-app-gray-150'
						/>
					</PaginationItem>
					<PaginationItem
						onClick={() => {
							updateParam('page', '1')
						}}>
						<PaginationLink
							className={cn('h-7 w-7 cursor-pointer rounded', {
								'bg-app-blue-500 text-white hover:bg-app-blue-500 hover:text-white':
									1 === parseInt(params.get('page') || '10'),
							})}>
							1
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis className='items-end pb-[6px]' />
					</PaginationItem>
					{[10, 11, 12, 13, 14, 15, 16, 17, 18].map((val) => (
						<PaginationItem
							onClick={() => {
								updateParam('page', val.toString())
							}}
							key={val}>
							<PaginationLink
								className={cn('h-7 w-7 cursor-pointer rounded', {
									'bg-app-blue-500 text-white hover:bg-app-blue-500 hover:text-white':
										val === parseInt(params.get('page') || '10'),
								})}>
								{val}
							</PaginationLink>
						</PaginationItem>
					))}

					<PaginationItem className='ml-6'>
						<PaginationNext
							href='#'
							className='h-8 rounded border border-app-gray-150'
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</>
	)
}
