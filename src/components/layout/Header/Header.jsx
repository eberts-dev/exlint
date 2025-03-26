import Menu from '@components/menu/Menu'
import Btn from '@ui/Btn/Btn'
import CopyableInput from '@ui/CopyableInput'

import styles from './Header.module.scss'

const Header = () => {

	const installCommand = "npm install --global @exlint.io/cli"

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
						<CopyableInput
							value={installCommand}
							inputId="exlint-install-command"
							ariaLabel="Exlint installation command"
							className={styles.command}
						/>

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