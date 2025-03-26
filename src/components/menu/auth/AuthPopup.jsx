import { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearFields, login, setError, setPassword, setUsername } from '../../../features/auth/authSlice'

import exlint from '@assets/img/exlint.svg'
import styles from './AuthPopup.module.scss'

const AuthPopup = ({onClose}) => {
	const dispatch = useDispatch()
	const { username, password, isAuthenticated, error } = useSelector((state) => state.auth)
	const popupRef = useRef(null)

  const handleClose = useCallback(() => {
    dispatch(clearFields()); // Очищаем поля
    onClose(); // Закрываем popup
  }, [dispatch, onClose]); // Зависимости handleClose

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (popupRef.current && !popupRef.current.contains(event.target)) {
				handleClose();
			}
		};

		document.addEventListener('mousedown', handleClickOutside) //монтирование события
		return () => {
			document.removeEventListener('mousedown', handleClickOutside) //размонтирование события
		}
	}, [handleClose]); //используем handleClose в зависимости

	useEffect(() => {
		if (isAuthenticated) {
			handleClose();
		}
	}, [isAuthenticated, handleClose]);

	const handleLogin = () => {
		if (!username || !password) {
			dispatch(setError('Please enter username and password'));
			return
		}

		dispatch(login()); // Вызываем действие login
	};

	return (
		<div className={styles.popup}>
			<div className={styles.content} ref={popupRef}>

				<div>
					<img className={styles.img} src={exlint} alt="Логотип Exlint"/>
					<h2>Authorisation</h2>
				</div>

				<div className={styles.auth}>
					<p className={styles.info}>Enter user <b>admin</b> and password <b>admin</b>:</p>
					{error && <p className={styles.error}>{error}</p>}

					<input
						type="text"	
						placeholder="user"
						value={username}
						onChange={(e) => {
							dispatch(setUsername(e.target.value))
						}}
					/>
					<input
						type="password"	
						placeholder="password"
						value={password}
						onChange={(e) => {
							dispatch(setPassword(e.target.value))
						}}
					/>

					<div className={styles.row}>
						<button className={styles.login} onClick={handleLogin}>Login</button>
						<button className={styles.close} onClick={handleClose}>Close</button> 
					</div>	
				</div>

			</div>
		</div>
	);
}

export default AuthPopup;
