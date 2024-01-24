import Link from 'next/link'

export default function NotImplemented() {
	return (
		<main className='flex min-h-full items-center justify-center'>
			<p className='text-center'>
				This page isn&apos;t included in the implementation.
				<br />
				Checkout the{' '}
				<Link className='text-app-blue-500 underline' href={'/dashboard/payments'}>
					payments
				</Link>{' '}
				page
			</p>
		</main>
	)
}
