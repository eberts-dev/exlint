import { mockDocs } from '@/data/mockDocs'
import Btn from '@ui/Btn/Btn'
import { useEffect, useState } from 'react'

import styles from './DocModal.module.scss'

const DocModal = ({ isOpen, onClose }) => {

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setIsVisible(true)
		} else {
			const timer = setTimeout(() => setIsVisible(false), 300);
			return () => clearTimeout(timer);
		}
	}, [isOpen])

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape') onClose();
		}

		if (isOpen) document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);

	}, [isOpen, onClose]);

	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	}

	if (!isVisible) return null;

	return (
		<div className={`${styles.overlay} ${isOpen ? styles.visible : ''}`}
				 onClick={handleOverlayClick}
		>
			<div className={styles.content}>
				<div className={styles.row}>
					<h2>Documentation</h2>
					<Btn className={styles.modalBtn} onClick={onClose}>Close</Btn>
				</div>

				<div className={styles.scrollableContent}>
					{mockDocs.map((doc, index) => 
						<div key={index} className={styles.text}
							>
							<h3>{doc.title}</h3>
							<p>{doc.content}</p>
						</div> 
					)}
				</div>
			</div>
		</div>
	);
}

export default DocModal;
