import Link from 'next/link'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center'>
			<h1 className='text-app-blue-500 font-semibold mb-5 text-4xl'>Payout - Dukaan</h1>
			<p className='mb-1'>
				Pixel perfect implementation of one of the dashboard pages of mydukaan.io
			</p>
			<Link className='underline' href={'/dashboard'}>Check the page</Link>
		</main>
	)
}
