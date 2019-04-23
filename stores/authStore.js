import { decorate, observable, action, computed } from 'mobx';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import jwt_decode from 'jwt-decode';

const instance = axios.create({
	baseURL : 'http://127.0.0.1:8000/'
});

class Store {
	user = null;

	setUser = async (token) => {
		if (token) {
			// Apply to every request
			axios.defaults.headers.common.Authorization = `JWT ${token}`;
			const decodedUser = jwt_decode(token);
			this.user = decodedUser;
			await AsyncStorage.setItem('myToken', token);
		} else {
			delete axios.defaults.headers.common.Authorization;
			await AsyncStorage.removeItem('myToken');
			this.user = null;
		}
	};

	checkForToken = async () => {
		const token = await AsyncStorage.getItem('myToken');

		if (token) {
			const currentDate = Date.now() / 1000;
			const user = jwt_decode(token);
			if (user.exp >= currentDate) {
				this.setUser(token);
			} else {
				this.setUser();
			}
		}
	};

	logoutUser = (navigation) => {
		this.setUser();
		navigation.replace('Login');

		console.log('bye bye ');
	};

	loginUser = async (userData, navigation) => {
		try {
			const res = await instance.post('login/', userData);
			const user = res.data;
			this.setUser(user.token);
			console.log('login successful');
			// navigation.replace('Profile');
		} catch (error) {
			console.log('something went wrong logging in', error.data);
		}
	};

	registerUser = async (userData, navigation) => {
		try {
			//console.log('registration user data', userData);
			await instance.post('register/', userData);
			this.loginUser(userData, navigation);
		} catch (error) {
			console.log('something went wrong with registering', error.Date);
		}
	};
}

decorate(Store, {
	user : observable
});

const authStore = new Store();
authStore.checkForToken();

export default authStore;
