import screen from '@assets/img/git.jpg'
import Ide from '@components/ide/Ide'
import styles from './Share.module.scss'

const Share = () => {
	return ( 
		<>
			<div className={styles.share}>
				<div className={styles.wrapper}>
					<div className={styles.header}>
						<h2 className={styles.title}>Share conventions in&nbsp;a&nbsp;matter of seconds</h2>
						<p className={styles.description}>Never compromise on custom compliance configurations again</p>
					</div>
			
					<div className={`${styles.blocks} ${styles['mobile-managers']}`}>
						<div className={styles.errors}>
						<Ide/>
							{/* <code>
								<div className={styles.code}>
									<p className={ide.rose}>--- Stylelint output ---</p>
									<p className={ide.white}>format.css</p>
									<p>
										<span className={ide.gray}>2:20 ✖</span> 
									  <span className={ide.white}>Unexpected named color "black"</span>
										<span className={ide.gray}>color-named</span>
									</p>
									<p>
										<span className={ide.gray}>12:9 ✖</span> 
										<span className={ide.white}>Unexpected named color "white"</span>
										<span className={ide.gray}>color-named</span></p>
									<p>
										<span className={ide.gray}>13:9 ✖</span> 
									 	<span className={ide.white}>Unexpected named color "black"</span>
										<span className={ide.gray}>color-named</span></p>
									<p className={ide.white}>4 problems (4 errors, 0 warnings)</p>
									<p className={ide.rose}>--- ESLint output ---</p>
									<p className={ide.white}>/Users/talrofe/Exlint/test-cli/date.js</p>
									<p>
										<span className={ide.gray}>6:1</span> 
										<span className={styles.rose}>error</span> 
										<span className={ide.white}>Expected indentation of 0 tabs but found 1</span>
										<span className={ide.gray}>indent</span>
									</p>
									<p className={ide.rose}>--- Prettier output ---</p>
									<p className={ide.white}>Checking formatting...</p>
								</div>
							</code> */}
						</div>
			
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
			
					<div className={`${styles.blocks} ${styles['mobile-developers']}`}>
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
								<img className={styles.screenshot} src={screen} alt="screenshot"></img>
						</div>
					</div>
				</div>

			</div>
		</>
	 );
}
 
export default Share;