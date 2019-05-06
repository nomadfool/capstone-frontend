import React, { Component } from 'react';

import { View, StyleSheet, Text } from 'react-native';

import { ThinGrayLine, ThickGrayLine } from './Lines';

const styles = StyleSheet.create({
	container : {
		flex              : 1,
		paddingTop        : 10,
		paddingHorizontal : 16,
		flexDirection     : 'row',
		borderTopWidth    : StyleSheet.hairlineWidth,
		borderTopColor    : '#BDC2C9'
	}
});

export default class ProfileDetailCard extends Component {
	render() {
		const onPress = this.props.onPress;
		const table = this.props.table;

		return (
			<View style={styles.container}>
				<View style={{ flex: 1 }}>
					<Text>Players</Text>
					<Text>
						{table.activePlayers} / {table.player_number}
					</Text>
				</View>

				<View style={{ flex: 1 }}>
					<Text>Hosted by</Text>
					<Text>
						{table.host.first_name} {table.host.last_name}
					</Text>
				</View>
			</View>
		);
	}
}
