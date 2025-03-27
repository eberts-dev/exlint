import CodeBlock from '@components/ide/CodeBlock'

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

	const codeLines = [
		{number: 1, parts: [{cls: 'red', txt: 'body' }, {cls: 'white', txt: ' {' }]},
		{number: 2, parts: [{cls: 'purple', txt: 'background-color' }, {cls: 'white', text: ': black;' }]},
		{number: 3, parts: [{cls: 'white', txt: '}' }]},
		{number: 4, parts: [{cls: '', txt: ' ' }]},
		{number: 5, parts: [{cls: 'red', txt: 'h1' }, {cls: 'white', txt: ' {' }]},
		{number: 6, parts: [{cls: 'purple', txt: 'font-size' }, {cls: 'white', txt: ': ' }, {cls: 'rose', txt: '22px' }, {cls: 'white', txt: ';' }]},
		{number: 7, parts: [{cls: 'purple', txt: 'color' }, {cls: 'white', txt: ': ' }, {cls: 'hot', txt: '#ff0000' }, {cls: 'white', txt: ';' }]},
		{number: 8, parts: [{cls: 'white', txt: '}' }]},
		{number: 9, parts: [{cls: '', txt: ' ' }]},
		{number: 10, parts: [{cls: 'gelb', txt: '.siteHeader' }, {cls: 'white', txt: ' {' }]},
		{number: 11, parts: [{cls: 'purple', txt: 'font-size' }, {cls: 'white', txt: ': ' }, {cls: 'rose', txt: '22px' }, {cls: 'white', txt: ';' }]},
		{number: 12, parts: [{cls: 'purple', txt: 'color' }, {cls: 'white', txt: ': ' }, {cls: 'rose', txt: '22px' }, {cls: 'white', txt: ';' }]},
		{number: 13, parts: [{cls: 'purple', txt: 'color' }, {cls: 'white', txt: ': ' }, {cls: 'rose', txt: 'white' }, {cls: 'white', txt: ';' }]},
		{number: 14, parts: [{cls: 'white', txt: '}' }]},
	]

	const stylelintLines = [

		{txt: '--- Stylelint output ---', cls: 'rose'},
		{txt: 'format.css', cls: 'white'},

		{
			isSpecial: true, 
			parts: [
				{cls: 'gray outline', txt: '2:20 ✖ '}, 
				{cls: 'white', txt: 'Unexpected named color "black"'}]
		},
		
		{txt: 'color-named', cls: 'gray'},
		{txt: '4 problems (4 errors, 0 warnings)', cls: 'white'}
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
					<CodeBlock lines={codeLines} />
					<StylelintBlock lines={stylelintLines}/>
				</div>
	
			</div>
		</div>
	 );
}
 
export default Conventions;