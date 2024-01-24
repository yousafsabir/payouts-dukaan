import { memo } from 'react'

export const ChevronLeft = memo((props: { fill?: string; width?: number; height?: number }) => {
	const { fill = '#4D4D4D', width = 18, height = 18 } = props
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 18 18'
			fill='none'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z'
				fill={fill}
			/>
		</svg>
	)
})

ChevronLeft.displayName = 'ChevronLeft Icon'
