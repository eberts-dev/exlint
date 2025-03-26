import { useState } from 'react'

import icon from '@components/layout/Header/Header.module.scss'
import styles from '@ui/CopyBtn/CopyBtn.module.scss'

const CopyBtn = ({targetId}) => {

	const [isCopied, setIsCopied] = useState(false); 

	const handleCopy = async () => {
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			try {
				await navigator.clipboard.writeText(targetElement.value); 
				setIsCopied(true);
				setTimeout(() => setIsCopied(false), 2000); 
			}
			catch (error){
				console.error('Failed to copy text: ', error);
			}
		}
	}

	return ( 
		<div className={styles['btn-wrapper']}>
			<button onClick={handleCopy} className={icon.social}></button>
			{isCopied && <span className={styles.tooltip}>Copied!</span>}
		</div>
	 );
}
 
export default CopyBtn;