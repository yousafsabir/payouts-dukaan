import React from 'react'

import { cn } from '@/lib/utils'
import { Search } from '@/components/svg'

type InputProps = {
	iconFill?: string
	inputProps?: React.HTMLProps<HTMLInputElement>
	classNames?: {
		wrapper?: string
		icon?: string
		input?: string
	}
}

export function Input(props: InputProps) {
	return (
		<div
			className={cn(
				'flex min-w-max max-w-[400px] flex-1 items-center gap-[6px] h-10 rounded-md bg-app-gray-50 px-3 py-[6px] sm:px-4 sm:py-[9px]',
				props.classNames?.wrapper,
			)}>
			<Search fill={props.iconFill} className={props.classNames?.icon} />
			<input
				type='text'
				className={cn(
					'w-[100px] flex-1 bg-transparent text-app-gray-500 outline-none placeholder:text-app-gray-500 sm:w-auto',
					props.classNames?.input,
				)}
				{...props.inputProps}
			/>
		</div>
	)
}
