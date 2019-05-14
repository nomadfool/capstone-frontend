import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './Navigation/Drawer';
import { Root } from 'native-base';
import Dashboard from './components/Profile/Dashboard';
import CreateTable from './components/Home/createTable';
export default class App extends Component {
	render() {
		return (
			<Root>
				<AppContainer />
			</Root>
		);
	}
}
