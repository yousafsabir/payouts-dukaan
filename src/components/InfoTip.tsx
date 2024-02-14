import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

export type InfoTipProps = {
	heading: React.ReactNode
	content: React.ReactNode
	classNames?: {
		wrapper?: string
		contentWrapper?: string
	}
}

export function InfoTip(props: InfoTipProps) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						variant={'link'}
						className={cn(
							'flex items-center gap-[6px] !h-auto !p-0 hover:no-underline',
							props.classNames?.wrapper,
						)}>
						{props.heading}
					</Button>
				</TooltipTrigger>
				<TooltipContent className={props.classNames?.contentWrapper}>
					{props.content}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
