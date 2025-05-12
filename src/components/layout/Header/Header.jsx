import Menu from '@components/menu/Menu'
import Btn from '@ui/Btn/Btn'
import CopyableInput from '@ui/CopyableInput'
import { useRef } from 'react'

import styles from './Header.module.scss'

const Header = () => {
	const consoleRef = useRef(null)
	const installCommand = 'npm install --global @exlint.io/cli'

	const heroContent = {
		title: {
			l1: 'Empower Best Practices',
			l2: 'Hassle Free, In No Time',
		},
		description: 'Keep your projects clean with Exlint.',
		btnText: 'Quick Start',
	}

	const terminalContent = {
		lines: [
			{
				prefix: '- ',
				parts: [
					'Lorem ipsum dolor sit amet, consectetu',
					'[v] adipiscing elit, sed do eiusmod tempor',
					'[v] incididunt ut labore et dolore magna aliqua.',
				],
			},
			{
				prefix: '- ',
				parts: [
					'Ut enim ad minim veniam, quis nostrud',
					'exercitation ullamco laboris nisi ut aliquip',
					'ex ea commodo consequat..',
				],
				highlightLast: true, //выделение текста
			},
		],
	}

	return (
		<header className={styles.stars}>
			<div className={styles.wrapper}>
				<Menu
					scrollToConsole={() => {
						if (consoleRef.current) {
							const yOffset = -32
							const y =
								consoleRef.current.getBoundingClientRect().top +
								window.pageYOffset +
								yOffset
							window.scrollTo({
								top: y,
								behavior: 'smooth',
							})
						}
					}}
				/>

				<h1 className={styles.title}>
					{heroContent.title.l1}
					<br />
					<span>{heroContent.title.l2}</span>
				</h1>

				<div className={styles.console} ref={consoleRef}>
					<CopyableInput
						value={installCommand}
						inputId='exlint-install-command'
						ariaLabel='Exlint installation command'
						className={styles.command}
					/>

					<div className={styles.qstart}>
						<Btn className={styles.btn}>{heroContent.btnText}</Btn>
						<p className={styles.text}>{heroContent.description}</p>
					</div>

					<div className={styles.terminal}>
						{terminalContent.lines.map((line, lineIndex) => (
							<p key={lineIndex} className={styles.terminal__text}>
								{line.prefix}
								{line.parts.map((part, partIndex) => {
									const isHighlighted =
										line.highlightLast && partIndex === line.parts.length - 1

									return (
										<span
											key={partIndex}
											className={isHighlighted ? styles.highlighted : ''}
										>
											{part}
											<br />
										</span>
									)
								})}
							</p>
						))}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
