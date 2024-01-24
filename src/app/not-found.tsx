import Link from 'next/link'

export default function NotFound() {
	return (
		<main className='flex min-h-screen items-center justify-center'>
			<p className='text-center'>
				This page isn't included in the implementation.
				<br />
				Checkout the{' '}
				<Link className='text-app-blue-500 underline' href={'/'}>
					Home
				</Link>{' '}
				page to learn more about the project
			</p>
		</main>
	)
}
