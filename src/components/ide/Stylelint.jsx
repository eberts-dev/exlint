import styles from './CodeBock.module.scss'
import code from './Stylelint.module.scss'

const Stylelint = () => {

	return ( 
		<div className={code.stylelint}>
			<p className={styles.rose}>--- Stylelint output ---</p>
			<p className={styles.white}>format.css</p>
			<p>
				<span className={`${styles.gray} ${styles.outline}`}>2:20 ✖</span> 
				<span className={styles.white}>Unexpected named color "black"</span>
			</p>
			<p className={styles.gray}>color-named</p>
			<p>
				<span className={`${styles.gray} ${styles.outline}`}>12:9 ✖</span> 
				<span className={styles.white}>Unexpected named color "white"</span>
			</p>
			<p className={styles.gray}>color-named</p>
			<p>
				<span className={`${styles.gray} ${styles.outline}`}>13:9 ✖</span> 
			<span className={styles.white}>Unexpected named color "black"</span>
			</p>
			<p className={styles.gray}>color-named</p><br/>
			<p className={styles.white}>4 problems (4 errors, 0 warnings)</p>
		</div>
	);
}
 
export default Stylelint;