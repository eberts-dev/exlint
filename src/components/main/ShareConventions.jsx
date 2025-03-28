import LintOutput from '@components/ide/LintOutput'
import styles from './ShareConventions.module.scss'

import screen from '@assets/img/git.jpg'

const Share = () => {

	const titles = [
		"Share conventions in a matter of seconds",
		"Never compromise on custom compliance configurations again"
	]

	const lintOutputs = [
		{
			header: { className: 'rose', text: '--- Stylelint output ---' },
			file: { className: 'white', path: 'format.css' },
			messages: [
				{
					parts: [
						{ className: 'gray', text: '2:20 ✖ ' },
						{ className: 'white', text: 'Unexpected named color "black" ' },
						{ className: 'gray', text: 'color-named' }
					]
				},
				// ... другие сообщения Stylelint
			],
			summary: { className: 'white', text: '4 problems (4 errors, 0 warnings)' }
		},
		{
			header: { className: 'rose', text: '--- ESLint output ---' },
			file: { className: 'white', path: '/Users/talrofe/Exlint/test-cli/date.js' },
			messages: [
				{
					parts: [
						{ className: 'gray', text: '6:1 ' },
						{ className: 'rose', text: 'error ' },
						{ className: 'white', text: 'Expected indentation of 0 tabs but found 1 ' },
						{ className: 'gray', text: 'indent' }
					]
				}
			]
		},
		{
			header: { className: 'rose', text: '--- Prettier output ---' },
			messages: [
				{ parts: [{ className: 'white', text: 'Checking formatting...' }] }
			]
		}
	];

	return ( 
		<div className={styles.wrapper}>

			<div className={styles.headline}>
				<h2 className={styles.title}>{titles[0]}</h2>
				<p className={styles.description}>{titles[1]}</p>
			</div>

			<div className={styles.conventions}>
			
				<LintOutput outputs={lintOutputs} />
		
				<div className={styles.managers}>
					<p className={styles.gradient}>Tech Leads / Team Managers</p>
					<p className={styles.option}>Enable best practices in teams with easy compliance sharing</p>
		
					<ul className={styles.list}>
						<li className={styles.item}>Simple setup</li>
						<li className={styles.item}>Iterate on conventions easily</li>
						<li className={styles.item}>Quick appliance in multiple repositories</li>
						<li className={styles.item}>Total privacy - code is analyzed locally</li>
						<li className={styles.item}>History, analytics, permissions - Coming soon</li>
					</ul>
				</div>

			</div>
	
			<div className={styles.conventions}>
				<div className={styles.developers}>
					<p className={styles.gradient}>Developers</p>
					<p className={styles.option}>Create coding policies in minutes with 0 manual files</p>
	
					<ul className={styles.list}>
						<li className={styles.item}>Easy configuration within our web app</li>
						<li className={styles.item}>Integrate multiple policies as groups</li>
						<li className={styles.item}>Effortless extension updates</li>
						<li className={styles.item}>Open Source CLI</li>
						<li className={styles.item}>CI Integrations</li>
					</ul>
				</div>
	
				<div className={styles.share}>
					<div className={styles.command}>
						<code>
							$ exlint use 
							<span className={styles.lila}>&lt;</span>group_id
							<span className={styles.lila}>&gt;</span>
						</code>
					</div>
						<img className={styles.screenshot} src={screen} alt="screenshot"/>
				</div>
			</div>

		</div>
	 );
}
 
export default Share;