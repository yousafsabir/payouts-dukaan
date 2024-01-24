import Link from 'next/link'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center'>
			<h1 className='text-app-blue-500 mb-5 text-4xl font-semibold'>Payout - Dukaan</h1>
			<p className='mb-1'>
				Pixel perfect implementation of the payment page in the dashboard of mydukaan.io
			</p>
			<Link className='text-app-blue-500 underline' href={'/dashboard/payments'}>
				Check the page
			</Link>
		</main>
	)
}
