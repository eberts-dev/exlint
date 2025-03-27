import Ide from '@components/ide/Ide'
import Stylelint from '@components/ide/Stylelint'

import styles from './Conventions.module.scss'

import repoImage from '@assets/img/repo.png'


const Conventions = () => {

	const titles = [
		"Say goodbye to messy multi-repo coding conventions."
	]

	const ruleAddedContent = [
		{
			type: 'added',
			text: 'Rule Added:'
		},
		{
			type: 'named',
			text: "'color-named': [",
			highlight: "'never'",
			afterHighlight: ']'
		},
		{
			type: 'run',
			text: '$ exlint run',
		}
	]

	return (
		<div className={styles.blur}>
			<div className={styles.wrapper}>

				<h2 className={styles.title}>{titles}</h2>

				<div className={styles.background}>
					<div className={styles.dashedLine}>
						<img src={repoImage} alt="multi-repo"/>
					</div>
					
					<div className={styles.code}>
						{ruleAddedContent.map((item, index) => (
							<p key={index} className={styles.added}>
								{item.text}
								{item.highlight && (
									<span className={styles.highlighted}>{item.highlight}</span>
								)}
								{item.afterHighlight}
							</p>
						))}
					</div>
				</div>

				<div className={styles.runCommand}>
					{ruleAddedContent.find(item => item.type === 'run')?.text}
				</div>

				<div className={styles.ideContent}>
					<Ide/>
					<Stylelint/>
				</div>
	
			</div>
		</div>
	 );
}
 
export default Conventions;