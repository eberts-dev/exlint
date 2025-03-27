import styles from './Btn.module.scss'

const Btn = ({ onClick, children, className = ''}) => {
	return (
		<button 
			className={`${styles.defaultBtn} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Btn;
