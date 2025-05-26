import styles from './CodeOutput.module.scss'

const CodeBlock = ({ lines }) => {
	return (
		<ul className={styles.output}>
			{lines.map((line, lineIdx) => (
				<li key={line.number ?? lineIdx}>
					<span className={styles.number}>{line.number} </span>
					{line.parts.map((part, index) => (
						<span key={index} className={part.cls ? styles[part.cls] : ''}>
							{part.txt ?? part.text ?? ''}
						</span>
					))}
				</li>
			))}
		</ul>
	)
}

export default CodeBlock
