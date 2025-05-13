import { useAuth } from '@/hooks/useAuth'
import { useModal } from '@/hooks/useModal'
import { useScroll } from '@/hooks/useScroll'
import { consoleRef } from '@/utils/scrollRefs'

import { MENU_ITEMS } from '@/config/menuConfig'
import AuthPopup from '@components/menu/auth/AuthPopup'
import DocModal from '@components/modal/DocModal'

import Btn from '@components/ui/Btn'

import logo from '@assets/img/exlint-logo.svg'
import stylesBtn from '@components/menu/Menu.module.scss'
import styles from './Footer.module.scss'

const Footer = () => {
	const handleStartClick = useScroll(consoleRef)

	const links = [
		{ text: '© 2022 Exlint', href: '#' },
		{ text: 'Terms of Service', href: '#' },
		{ text: 'Privacy Policy', href: '#' },
	]

	const {
		isAuthenticated,
		currentUser,
		isPopupOpen,
		handleLogout,
		setPopupOpen,
	} = useAuth()
	const { isModalOpen, openModal, closeModal } = useModal()

	return (
		<footer className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.info}>
					<img src={logo} className={styles.logo} alt='exlint' />
					<div className={styles.pad}>
						<div className={styles.social}>
							<svg className={styles.git}>
								<use href='#git'></use>
							</svg>
							<svg className={styles.discord}>
								<use href='#discord'></use>
							</svg>
						</div>

						<Btn onClick={handleStartClick}>Get Started - It’s Free!</Btn>

						<div className={styles.list}>
							<button
								onClick={openModal}
								className={styles[MENU_ITEMS.documentation.className]}
							>
								{MENU_ITEMS.documentation.label}
							</button>

							{isAuthenticated ? (
								<div className={styles.userSection}>
									<span className={styles.username}>{currentUser.name}</span>
									<button className={styles.logout} onClick={handleLogout}>
										Logout
									</button>
								</div>
							) : (
								<button
									className={stylesBtn.login}
									onClick={() => setPopupOpen(true)}
								>
									Log in
								</button>
							)}
							{isPopupOpen && <AuthPopup onClose={() => setPopupOpen(false)} />}
						</div>
					</div>
				</div>

				<div className={styles.links}>
					<ul className={styles.list}>
						{links.map((link, index) => (
							<li key={index} className={styles['links-item']}>
								<a href={link.href}>{link.text}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<DocModal isOpen={isModalOpen} onClose={closeModal} />
		</footer>
	)
}

export default Footer
