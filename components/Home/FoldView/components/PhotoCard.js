import React, { Component } from 'react';

import { View, StyleSheet, Image, ScrollView } from 'react-native';

import { ThinGrayLine, ThickWhiteLine } from './Lines';
import { Text } from 'native-base';

const styles = StyleSheet.create({
	container : {
		flex            : 1,
		backgroundColor : '#FFF',
		padding         : 10,
		flexDirection   : 'column'
	},
	card      : {
		flex            : 1,
		backgroundColor : '#FFFFFF',
		justifyContent  : 'flex-end'
	}
});

export default class PhotoCard extends Component {
	render() {
		const onPress = this.props.onPress;
		const table = this.props.table;
		return (
			<View style={styles.container}>
				<View
					style={{
						flexDirection   : 'row',
						justifyContent  : 'space-between',
						backgroundColor : '#ACB8C3',
						height          : 40,
						padding         : 10
					}}
				>
					<Text>{table.name}</Text>
				</View>

				<View style={styles.card}>
					<ScrollView
						contentContainerStyle={{
							flexGrow       : 1,
							flexDirection  : 'row',
							justifyContent : 'space-between',
							padding        : 10,
							paddingBottom  : 5
						}}
					>
						<Text>{table.description}</Text>
					</ScrollView>
				</View>
			</View>
		);
	}
}
