import React, { Component } from 'react';

import { Platform, ScrollView, StatusBar, StyleSheet, View } from 'react-native';

// Stores
import tableStore from '../../../stores/tableStore';

import Row from './Row';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const styles = StyleSheet.create({
	container  : {
		flex : 1
	},
	scrollView : {
		backgroundColor : '#4A637D',
		flex            : 1,
		padding         : 10,
		paddingTop      : STATUSBAR_HEIGHT
	}
});

class FoldList extends Component {
	render() {
		const tables = tableStore.tables.map((table) => {
			return <Row key={table.id} table={table} navigation={this.props.navigation} />;
		});
		return (
			<View style={styles.container}>
				{/* <StatusBar barStyle="light-content" /> */}
				<ScrollView style={styles.scrollView}>{tables}</ScrollView>
			</View>
		);
	}
}

export default FoldList;
