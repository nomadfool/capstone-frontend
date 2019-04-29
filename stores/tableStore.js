import axios from 'axios';
import { decorate, observable, computed } from 'mobx';

const instance = axios.create({
	baseURL : 'http://127.0.0.1:8000/'
});

class TableStore {
	tables = null;
	loading = true;

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
}

decorate(TableStore, {
	tables  : observable,
	loading : observable
});

const tableStore = new TableStore();
tableStore.fetchAllTables();
export default tableStore;
