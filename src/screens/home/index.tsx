import Link from 'next/link'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center'>
			<h1 className='mb-5 text-4xl font-semibold text-app-blue-500'>Payout - Dukaan</h1>
			<p className='mb-1'>
				Pixel perfect implementation of the payment page in the dashboard of mydukaan.io
			</p>
			<div className='flex justify-center gap-3'>
				<Link
					className='text-app-blue-500 underline'
					href={'/dashboard/payments?duration=last-month'}>
					Page
				</Link>
				<Link
					className='text-app-blue-500 underline'
					href={
						'https://www.figma.com/file/a4cEZxmPCutR42s1lipnZC/Payouts-V2---2023?node-id=0%3A1&mode=dev'
					}
					target='_blank'>
					Figma
				</Link>
			</div>
		</main>
	)
}
