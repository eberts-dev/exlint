import { useState } from 'react';

import crossIcon from '@assets/icons/close.svg';
import arrowDownIcon from '@assets/icons/open.svg';

import styles from './AskedQuestions.module.scss';

const AccordionItem = ({ title, content }) => {
	const [isOpen, setOpen] = useState(false);

	const toggleAccordion = () => {
		setOpen(!isOpen);
	};

	return (
		<div className={styles.tab}>
			<button className={styles.tabTitle} onClick={toggleAccordion}>
				{title}
				<span className={styles.icon}>
					<img
						src={isOpen ? crossIcon : arrowDownIcon}
						alt={isOpen ? 'Close' : 'Open'}
					/>
				</span>
			</button>

			<div
				className={styles.panel}
				style={{ display: isOpen ? 'block' : 'none' }}
			>
				<div className={styles.text}>{content}</div>
			</div>
		</div>
	);
};

export default AccordionItem;
