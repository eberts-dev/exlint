import { mockUsers } from '@/data/mockUsers'
import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		username: '',
		password: '',
		isAuthenticated: false,
		currentUser: null,
		error: '', //поле для ошибки
	},
	reducers: {
		setUsername: (state, action) => {
			state.username = action.payload;
			state.error = ''
		},
		setPassword: (state, action) => {
			state.password = action.payload;
			state.error = ''
		},
		login: (state) => {
			//проверка, есть ли такой пользователь в объекте
			const user = mockUsers.find(
				(u) => u.username === state.username && u.password === state.password
			)
			if (user) {
				state.isAuthenticated = true
				state.currentUser = user // сохраняем данные пользователя в Redux
				state.error = ''
			} else {
				state.error = 'Invalid username or password'
			}
		},
		logout: (state) => {
			state.isAuthenticated = false
			state.username = ''
			state.password = ''
			state.currentUser = null; // сбрасываем данные пользователя
			state.error = ''
		},
		clearFields: (state) => { // чистка полей формы
			state.username = ''
			state.password = ''
			state.error = ''
		},
		setError: (state, action) => {
			state.error = action.payload
		}
	},
});

export const { setUsername, setPassword, login, logout, clearFields, setError } = authSlice.actions;

export default authSlice.reducer