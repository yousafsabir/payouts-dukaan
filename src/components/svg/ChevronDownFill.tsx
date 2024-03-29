import { memo } from 'react'

import { cn } from '@/lib/utils'

export const ChevronDownFill = memo(
	(props: { fill?: string; background?: string; className?: string }) => {
		const { fill = '#4D4D4D', background = '#E6E6E6' } = props
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 40 40'
				className={cn('h-10 w-10', props.className)}
				fill='none'>
				<g clipPath='url(#clip0_24_2537)'>
					<circle cx={20} cy={20} r={20} fill={background} />
					<path
						d='M21.1109 25.5026C20.5156 26.1587 19.4844 26.1587 18.8891 25.5026L13.6151 19.6895C12.7406 18.7256 13.4245 17.1816 14.726 17.1816L25.274 17.1816C26.5755 17.1816 27.2594 18.7256 26.3849 19.6895L21.1109 25.5026Z'
						fill={fill}
					/>
				</g>
			</svg>
		)
	},
)

ChevronDownFill.displayName = 'ChevronDownFill Icon'
