import axios from 'axios';
import { decorate, observable, computed } from 'mobx';

const instance = axios.create({
	baseURL : 'http://127.0.0.1:8000/'
});

class PlayerStore {
	playerList = null;
	playerTables = null;
	hosting = null;
	playing = null;
	loading = true;

	fetchAllPlayers = async (player) => {
		try {
			const res = await instance.get('player/list/');
			this.playerList = res.data;
			this.filterPlayerTables(player);
		} catch (err) {
			console.error('Something went wrong fetching the players', err.data);
		}
	};

	filterPlayerTables = async (player) => {
		console.log('filter player');
		this.playerTables = await this.playerList.filter((obj) => {
			// console.log(`Comparing ${obj.player.id} with ${authStore.user.user_id}`);
			return obj.player.id == player.user_id;
		});

		this.filterTablesByType();
	};

	filterTablesByType = () => {
		// console.log('\x1b[33m', '\x1b[41m', 'player store  Tables');
		console.log('filter by type');

		let hosted = this.playerTables.filter((table) => {
			return table.play_as.toLowerCase() === 'host';
		});
		this.hosting = hosted;

		// console.log('\x1b[33m', '\x1b[41m', 'player store Hosted Tables');
		// console.log('\x1b[0m', this.hosting);

		this.playing = this.playerTables.filter((table) => {
			return table.play_as.toLowerCase() === 'player';
		});

		this.loading = false;

		// console.log('\x1b[33m\x1b[41m', 'player store joined tables');
		// console.log('\x1b[0m', this.playing);
	};
	deleteHosted = (playerTable) => {
		hosting = this.hosting.filter((item) => {
			return item.table.id !== playerTable;
		});
		this.hosting = hosting;
	};
	deleteJoined = (playerTable) => {
		playing = this.playing.filter((item) => {
			return item.table.id !== playerTable;
		});
		this.playing = playing;
	};
}

decorate(PlayerStore, {
	playerList   : observable,
	loading      : observable,
	playerTables : observable,
	hosting      : observable,
	playing      : observable
});

const playerStore = new PlayerStore();

export default playerStore;
