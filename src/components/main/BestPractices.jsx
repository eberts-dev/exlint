import { MENU_ITEMS } from '@/config/menuConfig'
import { useModal } from '@/hooks/useModal'
import DocModal from '@components/modal/DocModal'

import exlint from '@assets/img/exlint.svg'
import CopyBtn from '@ui/CopyBtn/CopyBtn'
import styles from './BestPractices.module.scss'

const BestPractices = () => {

	const { isModalOpen, openModal, closeModal } = useModal();

	const heroContent = {
		title: ["Empower efficient", "conventional best practices"],
		description: 'Run your first complance check in a matter of minutes',
	}

	return ( 
			<section className={styles.empower}>
				<div className={styles.wrapper}>
					<div className={styles.window}>
						<div className={styles.container}>

							<div className={styles.practice}>

							<div className={styles.title}> 
								{heroContent.title[0]}<br />{heroContent.title[1]}
							</div>
							<div className={styles.description}>{heroContent.description}</div>
					
								<ul className={styles.list}>

										<a {...MENU_ITEMS.github} className={styles.git}>GitHub Project</a>
						
										<button {...MENU_ITEMS.documentation}
											 onClick={openModal} 
											 className={styles.docs}
											>
												Docs
										</button>
									
										<a {...MENU_ITEMS.discord} className={styles.server}>Discord Server</a>
								
								</ul>

							</div>

							<img className={styles.img} src={exlint} alt="Логотип Exlint"></img>

						</div>

						<div className={styles.start}>
							<div className={styles.today}>Get started for free today.</div>
	
								<code className={styles['console-wrapper']}>

									<input id="install" type="text" value="npm install --global @exlint.io/cli" placeholder="npm install --global @exlint.io/cli"></input>

									<CopyBtn targetId="install"/>

								</code>

								<button 
									onClick={openModal}
									className={styles[MENU_ITEMS.documentation.className]}
									>
										{MENU_ITEMS.documentation.label} {'>'}
								</button>
						</div>
					</div>
				</div>
					<DocModal isOpen={isModalOpen} onClose={closeModal} />
			</section>
	 );
}
 
export default BestPractices;