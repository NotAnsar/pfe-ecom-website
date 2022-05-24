import { createSlice } from '@reduxjs/toolkit';

const url = 'http://127.0.0.1:8000/api';
export const Login = (email, password) => {
	return async (dispatch) => {
		async function Login() {
			const res = await fetch(`${url}/login`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ password, email }),
			});

			if (!res.ok) throw Error('Could not fetch Product data');

			const login = await res.json();
			if (login.error) throw new Error(login.error);
			console.log(login);
			return { ...login, error: false, loggedIn: true };
		}

		try {
			dispatch(authSlice.actions.getLogin(await Login()));
		} catch (error) {
			console.log(error);
			return { error, loggedIn: false };
		}
	};
};

export const Register = (email, password, firstName, lastName, role) => {
	return async (dispatch) => {
		async function Register() {
			const res = await fetch(`${url}/register`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					password,
					email,
					firstName,
					lastName,
					role,
				}),
			});
			if (!res.ok) throw Error('Could not fetch Product data');
			const register = await res.json();
			if (register.error) throw new Error(register.error);
			console.log(register);
			return { ...register, error: false, loggedIn: true };
		}
		try {
			dispatch(authSlice.actions.getRegister(await Register()));
		} catch (error) {
			console.log(error);
			return { error, loggedIn: false };
		}
	};
};

const initialState = {
	loggedIn: false,
	id: null,
	role: '',
	firstName: '',
	lastName: '',
	email: '',
	error: false,
};

export const authSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		getLogin: (state, action) => {
			console.log(action.payload);
			state.id = action.payload.id;
			state.role = action.payload.role;
			state.email = action.payload.email;
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.error = action.payload.error;
			state.loggedIn = action.payload.loggedIn;
		},
		getRegister: (state, action) => {
			console.log(action.payload);
			state.id = action.payload.id;
			state.role = action.payload.role;
			state.email = action.payload.email;
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.error = action.payload.error;
			state.loggedIn = action.payload.loggedIn;
		},
		logout: (state) => {
			state.id = null;
			state.role = '';
			state.email = '';
			state.firstName = '';
			state.lastName = '';
			state.loggedIn = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { getLogin, getRegister, logout } = authSlice.actions;

export default authSlice.reducer;
