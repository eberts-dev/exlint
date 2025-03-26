import { MENU_ITEMS } from '@/config/menuConfig'
import { useModal } from '@/hooks/useModal'
import DocModal from '@components/modal/DocModal'
import { useRef } from 'react'

import exlint from '@assets/img/exlint.svg'
import CopyBtn from '@ui/CopyBtn/CopyBtn'
import styles from './BestPractices.module.scss'

const BestPractices = () => {

	const { isModalOpen, openModal, closeModal } = useModal();
	const inputRef = useRef(null);
	const installCommand = "npm install --global @exlint.io/cli"

	 // Выделяем текст при клике на input
	const handleInputClick = () => {
		inputRef.current.select();
	}

	const heroContent = {
		title: ["Empower efficient", "conventional best practices"],
		description: 'Run your first complance check in a matter of minutes',
		getStarted: "Get started for free today."
	}

	const INSTALL_COMMAND_ID = "exlint-install-command"; //чтобы избежать "магических строк"

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
									
										<a {...MENU_ITEMS.discord} className={styles.discord}>Discord Server</a>
								
								</ul>
							</div>

							<img className={styles.exlintLogo} src={exlint} alt="Логотип Exlint"/>
						</div>

					
						<div className={styles.today}>{heroContent.getStarted}</div>
`						<div className={styles.consoleLine}>
							<input 
								ref={inputRef}
								id={INSTALL_COMMAND_ID } // Уникальный ID для CopyBtn
								aria-label="Installation command"
								type="text"
								value={installCommand}
								readOnly
								className={styles.installInput}
								onClick={handleInputClick}
								/>

							<CopyBtn targetId={INSTALL_COMMAND_ID} />
				
						</div>`

						<button 
							onClick={openModal}
							className={styles[MENU_ITEMS.documentation.className]}
							>
								{MENU_ITEMS.documentation.label} {'>'}
						</button>
					</div>
				</div>
					<DocModal isOpen={isModalOpen} onClose={closeModal} />
			</section>
	 );
}
 
export default BestPractices;