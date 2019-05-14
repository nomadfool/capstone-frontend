import axios from 'axios';
import { decorate, observable, computed } from 'mobx';
import authStore from './authStore';

const instance = axios.create({
	baseURL : 'http://127.0.0.1:8000/'
});

class TableStore {
	tables = null;
	loading = true;
	loadingGames = true;
	games = null;

	fetchAllTables = async () => {
		try {
			const res = await instance.get('table/list/');
			this.tables = res.data;
			this.loading = false;
			// console.log('fetchAllTables data:', this.tables);
		} catch (err) {
			console.error('Something went wrong fetching the tables', err.data);
		}
	};

	joinTable = async (tableId) => {
		try {
			console.log('JoinTable', tableId);
			const res = await instance.post('player/add/', { table: tableId });
		} catch (err) {
			console.error('Something adding player to table', err.data);
		}
	};

	deleteTable = async (tableID) => {
		try {
			const res = await instance.delete(`table/delete/${tableID}`);
			console.log('\x1b[33m\x1b[41m', 'delete response');
			console.log('\x1b[0m', res.data);
		} catch (err) {
			console.error('Something went wrong trying to delete the table', err.data);
		}
	};
	fetchAllGames = async () => {
		try {
			const res = await instance.get('game/list/');
			this.games = res.data;
			this.loadingGames = false;

			console.log('fetchAllgames data:', this.games);
		} catch (err) {
			console.error('Something went wrong fetching games', err.data);
		}
	};

	createTable = async (data) => {
		try {
			const res = await instance.post('table/add/', data);
			console.log('\x1b[33m\x1b[41m', 'delete create response');
			console.log('\x1b[0m', res.data);
		} catch (err) {
			console.error('Something went wrong trying to creating the table', err.data);
		}
	};
}

decorate(TableStore, {
	tables       : observable,
	loading      : observable,
	games        : observable,
	loadingGames : observable
});

const tableStore = new TableStore();
tableStore.fetchAllTables();
tableStore.fetchAllGames();
export default tableStore;
