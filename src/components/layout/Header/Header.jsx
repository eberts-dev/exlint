import Menu from '@components/menu/Menu'
import styles from './Header.module.scss'

import Btn from '@ui/Btn/Btn'
import CopyBtn from '@ui/CopyBtn/CopyBtn'


const Header = () => {

	const titles = [
		"Empower Best Practices",
		"Hassle Free, In No Time"
	]

	return ( 
			<header className={styles.stars}>
				<div className={styles.wrapper}>

					<Menu/>
					<h1 className={styles.title}>
						{titles.map((title, index) => (
							<span key={index}>{title}<br/></span>
						))}
					</h1>

					<div className={styles.console}>

							<div className={styles.command}>
							
								<input type="text" value="npm install --global @exlint.io/cli" id="copyInput" placeholder="npm install --global @exlint.io/cli" readOnly/>
								
								
								<CopyBtn targetId="install"/>
									
							</div>
						
						<div className={styles.qstart}>
							<Btn className={styles.btn}>Quick Start</Btn>
							<p className={styles.text}>Keep your projects clean with Exlint.</p>
						</div>


						<div className={styles.terminal}>
							<p className={styles.terminal__text}>
								<code>- Lorem ipsum dolor sit amet, consectetur <br/>
												[v] adipiscing elit, sed do eiusmod tempor <br/>
												[v] incididunt ut labore et dolore magna aliqua.
								</code>
							</p>
							<p className={styles.terminal__text}>
									<code>- Ut enim ad minim veniam, quis nostrud<br/>
													exercitation ullamco laboris nisi ut aliquip <br/>
													<span>ex ea commodo consequat.</span>
									</code>
							</p>
						</div>

					</div>
				</div>
			</header>
	 );
}
 
export default Header;