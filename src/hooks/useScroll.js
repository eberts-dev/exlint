import { useCallback } from 'react'

export const useScroll = (ref, offset = -32) => {
	return useCallback(() => {
		if (ref?.current && typeof window !== 'undefined') {
			const element = ref.current
			const y =
				element.getBoundingClientRect().top + window.pageYOffset + offset
			window.scrollTo({ top: y, behavior: 'smooth' })
		}
	}, [ref, offset])
}
