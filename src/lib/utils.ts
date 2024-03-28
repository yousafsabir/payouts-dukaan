import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export function useQueryParams() {
	const router = useRouter()
	const path = usePathname()
	const params = useSearchParams()

	function updateParam(key: string, value: string) {
		const updatedSearchParams = new URLSearchParams(params.toString())
		updatedSearchParams.set(key, value)
		router.push(path + '?' + updatedSearchParams.toString())
	}

	return {
		params,
		updateParam,
	}
}
