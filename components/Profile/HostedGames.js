import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Body, Button, Icon, Left, ListItem, Right, SwipeRow, Text } from 'native-base';
import playerStore from '../../stores/playerStore';

class HostedGames extends Component {
	handleDelete = () => {
		this.props.deleteTable(this.props.table.table.id);
		playerStore.deleteHosted(this.props.table.table.id);
	};
	handlePress = () => {
		this.props.navigation.navigate('HostedTableDetails', { table: this.props.table });
	};
	render() {
		let table = this.props.table;
		return (
			<SwipeRow
				style={{
					height          : 60,
					backgroundColor : '#7B8DA0'
				}}
				leftOpenValue={75}
				rightOpenValue={-75}
				closeOnRowBeginSwipe={true}
				left={
					<Button style={{ backgroundColor: '#A47B88' }}>
						<Icon active name="edit" type="FontAwesome" />
					</Button>
				}
				body={
					<Body style={{ margin: 10 }}>
						<TouchableOpacity onPress={this.handlePress}>
							<Text>
								{table.table.name} - {table.table.game_date}
							</Text>
							<Text>
								{table.table.activePlayers}/{table.table.player_number} Players.
							</Text>
						</TouchableOpacity>
					</Body>
				}
				right={
					<Button
						style={{ backgroundColor: '#982649' }}
						onPress={() => {
							this.handleDelete();
						}}
					>
						<Icon active name="trash" />
					</Button>
				}
			/>
		);
	}
}
export default HostedGames;
