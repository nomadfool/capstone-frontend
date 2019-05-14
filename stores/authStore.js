import jwt_decode from 'jwt-decode';
import { decorate, observable, computed } from 'mobx';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import instance from '../IpConnect';

class AuthStore {
	user = null;
	profile = null;
	loading = true;

	signupUser = async (userData, history) => {
		try {
			const res = await instance.post('register/', userData);
			const user = res.data;
			const loginData = {
				username : userData.username,
				password : userData.password
			};
			this.loginUser(loginData, history);
		} catch (err) {
			console.log(err.message);
		}
	};

	updateProfile = async (userData, history) => {
		try {
			const res = await instance.put('profile/update/', userData);
			this.profile = res.data;
			this.loading = false;
			history.replace('Login');
		} catch (err) {
			console.log(err.message);
		}
	};

	getProfile = async () => {
		try {
			const res = await instance.get('profile/update/');
			this.profile = res.data;
			this.loading = false;
		} catch (err) {
			console.log(err.message);
		}
	};

	loginUser = async (userData, history) => {
		try {
			const res = await instance.post('login/', userData);
			const user = res.data;
			this.setUser(user.token);
			history.replace('Home');
		} catch (err) {
			console.log(err.message);
		}
	};

	checkForToken = async () => {
		const token = await AsyncStorage.getItem('myToken');
		if (token) {
			const currentTime = Date.now() / 1000;
			const user = jwt_decode(token);
			if (user.exp >= currentTime) {
				this.setUser(token);
			} else {
				this.logout();
			}
		}
	};

	logout = (history) => {
		this.setUser();
		history.replace('Home');
	};

	setUser = async (token) => {
		try {
			if (token) {
				axios.defaults.headers.common.Authorization = `JWT ${token}`;
				const decodedUser = jwt_decode(token);
				this.user = decodedUser;
				await AsyncStorage.setItem('myToken', token);
			} else {
				await AsyncStorage.removeItem('myToken');
				delete axios.defaults.headers.common.Authorization;
				this.user = null;
			}
		} catch (error) {
			console.log(error.message);
		}
	};
}

decorate(AuthStore, {
	user    : observable,
	profile : observable
});

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
