import { useState } from 'react'

import styles from '@ui/CopyBtn/CopyBtn.module.scss'
import { Icon } from '@ui/svg/Icon'

const CopyBtn = ({ targetId }) => {
	const [isCopied, setIsCopied] = useState(false)

	const handleCopy = async () => {
		const targetElement = document.getElementById(targetId)

		if (targetElement) {
			try {
				await navigator.clipboard.writeText(targetElement.value)
				setIsCopied(true)
				setTimeout(() => setIsCopied(false), 2000)
			} catch (error) {
				console.error('Failed to copy text: ', error)
			}
		}
	}

	return (
		<>
			<Icon id='copy-btn' onClick={handleCopy} className={styles.social} />
			{isCopied && <span className={styles.tooltip}>Copied!</span>}
		</>
	)
}

export default CopyBtn
