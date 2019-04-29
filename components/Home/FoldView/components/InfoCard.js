import React, { Component } from 'react';

import { View, StyleSheet, Text, Image } from 'react-native';

import { ThinGrayLine, ThickGrayLine, ThickDarkGrayLine, ThinRedLine } from './Lines';

const styles = StyleSheet.create({
	container       : {
		flex            : 1,
		backgroundColor : '#fff',
		flexDirection   : 'row'
	},
	leftPane        : {
		flex            : 1,
		backgroundColor : '#33373B',
		padding         : 16,
		flexDirection   : 'column',
		justifyContent  : 'space-between'
	},
	rightPane       : {
		flex            : 2,
		padding         : 16,
		backgroundColor : '#fff'
	},
	textDescription : {
		paddingTop : 8
	},
	textTitle       : {
		fontSize   : 16,
		fontWeight : 'bold'
	},
	textLight       : {
		color : '#C8CCBF'
	}
});
export default class InfoCard extends Component {
	render() {
		const onPress = this.props.onPress;
		const table = this.props.table;
		return (
			<View style={styles.container}>
				<View style={styles.leftPane}>
					<Image style={{ width: 100, height: 100 }} source={{ uri: `${table.game.image}` }} />

					<View>
						<Text style={styles.textLight}>
							Players: {table.activePlayers} / {table.player_number}
						</Text>
						<Text style={styles.textLight} onPress={onPress}>
							More info..
						</Text>
					</View>
				</View>

				<View style={styles.rightPane}>
					<View style={{ flex: 1, flexDirection: 'column' }}>
						<Text style={styles.textTitle}>{table.name}</Text>
						<Text numberOfLines={3} style={styles.textDescription}>
							{table.description}
						</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<View style={{ flex: 1 }}>
							<Text>Date</Text>
							<Text>{table.game_date}</Text>
						</View>

						<View style={{ flex: 1 }}>
							<Text>Time</Text>
							<Text>{table.start_time}</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
