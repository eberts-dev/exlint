import styles from './CodeOutput.module.scss'

const StylelintBlock = ({ lines }) => {
	return (
		<div className={styles.stylelint}>
			{lines.map((line, index) => {
				if (line.isLineBreak) {
					return <br key={index} />
				}

				if (line.isSpecial) {
					return (
						// Для строк с особой разметкой (например, с раздельными span)
						<p key={index}>
							{line.parts.map((part, i) => (
								<span
									key={i}
									className={
										part.cls
											? part.cls
													.split(' ')
													.map((c) => styles[c] || '')
													.join(' ')
											: ''
									}
								>
									{part.txt ?? ''}
								</span>
							))}
						</p>
					)
				}

				return (
					<p key={index} className={line.cls ? styles[line.cls] : ''}>
						{line.txt ?? ''}
					</p>
				)
			})}
		</div>
	)
}

export default StylelintBlock
