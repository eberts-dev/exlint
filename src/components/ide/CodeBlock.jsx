import styles from './CodeBock.module.scss'

const CodeBlock = ({ lines }) => {
	return (
		<div className={styles.output}>
			<ul>
				{lines.map((line) => (
					<li key={line.number}>
						<span className={styles.number}>{line.number} </span>
						{line.parts.map((part, index) => (
							<span key={index} className={part.cls ? styles[part.cls] : ''}>
								{part.txt || part.text}
							</span>
						))}
					</li>
				))}
			</ul>
		</div>
	);
}

export default CodeBlock;
