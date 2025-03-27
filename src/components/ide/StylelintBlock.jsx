import styles from './CodeBock.module.scss'

const StylelintBlock = ({ lines }) => {

	return ( 
		<div className={styles.stylelint}>

		{lines.map((line, index) => (

			<div key={index}>
				{line.isSpecial ? (
					<p>
						{line.parts.map((part, partIndex) => (
							<span
								key={partIndex}
								className={part.cls ? part.cls.split(' ').map(c => styles[c]).join(' ') : ''}>
									{part.txt} 
							</span>
						))}
					</p>
					) : (
					<p className={line.className ? styles[line.className] : ''}>
						{line.text || line.parts?.map((part) => part.txt).join(' ')}
					</p>
					)}
			</div>
		))}
		</div>
	);
}



			{/* <p className={styles.rose}>--- Stylelint output ---</p>
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
			<p className={styles.white}>4 problems (4 errors, 0 warnings)</p> */}


 
export default StylelintBlock;