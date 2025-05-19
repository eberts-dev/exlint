import { forwardRef, useEffect, useRef, useState } from 'react'
import CopyBtn from './CopyBtn'

const CopyableInput = forwardRef(
	(
		{
			value,
			inputId = 'exlint-install-command',
			ariaLabel = 'Copyable text',
			className = 'CopyableInput',
		},
		ref
	) => {
		const [isMobile, setIsMobile] = useState(false)

		useEffect(() => {
			const checkMobile = () => {
				setIsMobile(window.innerWidth <= 375)
			}
			checkMobile()
			window.addEventListener('resize', checkMobile)
			return () => window.removeEventListener('resize', checkMobile)
		}, [])
		const inputRef = useRef(null)

		const handleClick = () => {
			inputRef.current.select()
		}

		const styles = {
			container: {
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				borderRadius: '8px',
				margin: '0 auto',
			},
			input: {
				background: 'none',
				border: 'none',
				fontSize: isMobile ? '14px' : '16px',
				maxWidth: isMobile ? '153px' : '100%',
			},
		}

		return (
			<div style={styles.container} className={`${className}`} ref={ref}>
				<input
					ref={inputRef}
					id={inputId}
					type='text'
					value={value}
					readOnly
					onClick={handleClick}
					aria-label={ariaLabel}
					style={styles.input}
				/>
				<CopyBtn targetId={inputId} />
			</div>
		)
	}
)

CopyableInput.displayName = 'CopyableInput'

export default CopyableInput
