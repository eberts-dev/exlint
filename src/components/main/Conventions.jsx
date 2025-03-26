import Ide from '../ide/Ide'
import IdeOutput from '../ide/IdeOutput'

import styles from './Conventions.module.scss'

import repoImage from '@assets/img/repo.png'


const Conventions = () => {
	return (
		<div className={styles.repo}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Say goodbye to messy multi-repo coding conventions.</h2>

				<div className={styles.pic}>
					<div className={styles.img}>
						<img src={repoImage} alt="multi-repo"></img>
					</div>
					
					<div className={styles.code}>
						<code>
							<p className={styles.added}>Rule Added:</p>
							<p className={styles.named}>'color-named': [<span>'never'</span>]</p>
						</code>
					</div>
				</div>

				<div className={styles.run}>
					<code>$ exlint run</code>
				</div>

				<div className={styles.stylelint}>
					<div className={styles.wrapper}>
						<div className={styles.content}>
							<div className={styles.css}><Ide/></div>
							<div className={styles.output}><IdeOutput/></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	 );
}
 
export default Conventions;