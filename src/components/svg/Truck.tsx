import { memo } from 'react'

export const Truck = memo((props: { fill?: string; width?: number; height?: number }) => {
	const { fill = 'white', width = 20, height = 20 } = props
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={20}
			height={20}
			viewBox='0 0 20 20'
			fill='none'>
			<g opacity='0.8'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M0.833496 3.03682C0.833496 2.65216 1.14397 2.34033 1.52695 2.34033H13.0813C13.4643 2.34033 13.7748 2.65216 13.7748 3.03682V13.0945C13.7748 13.4791 13.4643 13.791 13.0813 13.791H1.52695C1.14397 13.791 0.833496 13.4791 0.833496 13.0945V3.03682ZM2.2204 3.73331V12.398H12.3879V3.73331H2.2204Z'
					fill={fill}
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M12.3879 6.90518C12.3879 6.52052 12.6983 6.20869 13.0813 6.20869H16.1625C16.3464 6.20869 16.5228 6.28207 16.6528 6.41269L18.9637 8.73369C19.0938 8.8643 19.1668 9.04146 19.1668 9.22618V13.0945C19.1668 13.4792 18.8564 13.791 18.4734 13.791L13.0813 13.791C12.6984 13.791 12.3879 13.4792 12.3879 13.0945V6.90518ZM13.7748 7.60167V12.398H17.7799V9.51467L15.8753 7.60167H13.7748Z'
					fill={fill}
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M4.99322 13.791C4.31265 13.791 3.76094 14.3451 3.76094 15.0286C3.76094 15.7122 4.31265 16.2663 4.99322 16.2663C5.67379 16.2663 6.2255 15.7122 6.2255 15.0286C6.2255 14.3451 5.67379 13.791 4.99322 13.791ZM2.37404 15.0286C2.37404 13.5758 3.54668 12.398 4.99322 12.398C6.43975 12.398 7.6124 13.5758 7.6124 15.0286C7.6124 16.4815 6.43975 17.6593 4.99322 17.6593C3.54668 17.6593 2.37404 16.4815 2.37404 15.0286Z'
					fill={fill}
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M15.0071 13.791C14.3265 13.791 13.7748 14.3451 13.7748 15.0286C13.7748 15.7122 14.3265 16.2663 15.0071 16.2663C15.6876 16.2663 16.2393 15.7122 16.2393 15.0286C16.2393 14.3451 15.6876 13.791 15.0071 13.791ZM12.3879 15.0286C12.3879 13.5758 13.5605 12.398 15.0071 12.398C16.4536 12.398 17.6262 13.5758 17.6262 15.0286C17.6262 16.4815 16.4536 17.6593 15.0071 17.6593C13.5605 17.6593 12.3879 16.4815 12.3879 15.0286Z'
					fill={fill}
				/>
			</g>
		</svg>
	)
})
