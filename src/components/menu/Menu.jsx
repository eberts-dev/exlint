import { MENU_ITEMS } from '@/config/menuConfig'
import { useAuth } from '@/hooks/useAuth'
import { useModal } from '@/hooks/useModal'
import DocModal from '@components/modal/DocModal'
import Btn from '@ui/Btn/Btn'
import AuthPopup from './auth/AuthPopup'

import logo from '@assets/img/exlint-logo.svg'
import styles from './Menu.module.scss'

const Menu = ({ onScrollToConsole }) => {
	const heroContent = ['Get Started']

	const {
		isAuthenticated,
		currentUser,
		isPopupOpen,
		handleLogout,
		setPopupOpen,
	} = useAuth()
	const {
		isModalOpen: isDocModalOpen,
		openModal: openDocModal,
		closeModal: closeDocModal,
	} = useModal()

	const getMenuItemProps = item => {
		if (item.modal) {
			return {
				onClick: openDocModal,
				className: styles[item.className],
			}
		}

		return {
			href: item.href,
			target: item.target,
			rel: item.rel,
			className: styles[item.className],
		}
	}

	const handleStartClick = () => {
		if (onScrollToConsole) {
			onScrollToConsole()
		}
	}

	return (
		<div className={styles.exlint}>
			<img className={styles.logo} src={logo} alt='exlint' />

			<ul className={styles.list}>
				{Object.values(MENU_ITEMS).map(item => (
					<li key={item.id}>
						{item.href ? (
							<a {...getMenuItemProps(item)}>{item.label}</a>
						) : (
							<button type='button' {...getMenuItemProps(item)}>
								{item.label}
							</button>
						)}
					</li>
				))}
			</ul>

			<div className={styles.buttons}>
				{isAuthenticated ? (
					<div className={styles.userSection}>
						<span className={styles.username}>{currentUser.name}</span>
						<button className={styles.logout} onClick={handleLogout}>
							Logout
						</button>
					</div>
				) : (
					<button className={styles.login} onClick={() => setPopupOpen(true)}>
						Log in
					</button>
				)}

				{isPopupOpen && <AuthPopup onClose={() => setPopupOpen(false)} />}

				<Btn className={styles.startBtn} onClick={handleStartClick}>
					{heroContent}
				</Btn>
			</div>
			<DocModal isOpen={isDocModalOpen} onClose={closeDocModal} />
		</div>
	)
}

export default Menu
