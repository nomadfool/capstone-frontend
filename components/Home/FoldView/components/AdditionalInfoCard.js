import React, { Component } from 'react';

import { View, StyleSheet, TouchableHighlight } from 'react-native';

import { ThinGrayLine, ThickDarkGrayLine } from './Lines';
import { Text, Button, Toast } from 'native-base';

import authStore from '../../../../stores/authStore';
import tableStore from '../../../../stores/tableStore';
export default class AdditionalInfoCard extends Component {
	handleJoin = () => {
		table = this.props.table;

		tableStore.joinTable(table.id);
		Toast.show({
			text     : 'Joined!',

			duration : 1500
		});
	};
	render() {
		const onPress = this.props.onPress;
		const table = this.props.table;
		return (
			<View
				style={{
					position          : 'absolute',
					paddingTop        : 10,
					paddingHorizontal : 16,

					backgroundColor   : '#FFFFFF',
					borderTopWidth    : StyleSheet.hairlineWidth,
					borderTopColor    : '#BDC2C9',
					alignItems        : 'center',
					justifyContent    : 'center',
					width             : '100%'
				}}
			>
				<View style={{ position: 'absolute' }}>
					<Button onPress={() => this.handleJoin()} style={{ backgroundColor: '#7B8DA0' }}>
						<Text>Join Table</Text>
					</Button>
				</View>
			</View>
		);
	}
}
