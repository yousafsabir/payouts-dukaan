import { memo } from 'react'

import { cn } from '@/lib/utils'

export const ChevronDown = memo((props: { fill?: string; className?: string }) => {
	const { fill = 'white' } = props
	return (
		<svg
			className={cn('h-5 w-5', props.className)}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 20 20'
			fill='none'>
			<path
				d='M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z'
				fill={fill}
			/>
		</svg>
	)
})

ChevronDown.displayName = 'ChevronDown Icon'
