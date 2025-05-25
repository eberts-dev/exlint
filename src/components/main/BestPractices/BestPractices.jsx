import { MENU_ITEMS } from '@/config/menuConfig';
import exlint from '@assets/img/exlint.svg';
import DocModal from '@components/modal/DocModal';
import CopyableInput from '@ui/CopyableInput';
import styles from './BestPractices.module.scss';
import { useBestPractices } from './useBestPractices';

const BestPractices = () => {
	const { heroContent, installCommand, isModalOpen, closeModal, openModal } =
		useBestPractices();

	return (
		<section className={styles.empower}>
			<div className={styles.wrapper}>
				<div className={styles.window}>
					<div className={styles.container}>
						<div className={styles.practice}>
							<div className={styles.title}>
								{heroContent.title[0]}
								<br />
								{heroContent.title[1]}
							</div>
							<div className={styles.description}>
								{heroContent.description}
							</div>
							<ul className={styles.list}>
								<a {...MENU_ITEMS.github} className={styles.git}>
									GitHub Project
								</a>

								<button
									{...MENU_ITEMS.documentation}
									onClick={openModal}
									className={styles.docs}
								>
									Docs
								</button>

								<a {...MENU_ITEMS.discord} className={styles.discord}>
									Discord Server
								</a>
							</ul>
						</div>
						<img
							className={styles.exlintLogo}
							src={exlint}
							alt='Логотип Exlint'
						/>
					</div>

					<div className={styles.today}>{heroContent.getStarted}</div>

					<CopyableInput
						value={installCommand}
						inputId='exlint-install-command'
						ariaLabel='Exlint installation command'
						className={styles.consoleLine}
					/>

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
};

export default BestPractices;
