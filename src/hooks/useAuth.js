import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'

export const useAuth = () => {
	const [isPopupOpen, setPopupOpen ] = useState(false);
	const dispatch = useDispatch();
	const { isAuthenticated, currentUser } = useSelector((state) => state.auth); //получаем данные

	const handleLogout = () => {
		dispatch(logout()); //действие
		setPopupOpen(false); //закрыть popup
	}
  
	return {
		isAuthenticated,
		currentUser,
		isPopupOpen,
		setPopupOpen,
		handleLogout,
	}
};