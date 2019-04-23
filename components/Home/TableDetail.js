import React, { Component } from 'react';
import { View } from 'react-native';
import {
	Container,
	Header,
	Content,
	Card,
	CardItem,
	Thumbnail,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Right
} from 'native-base';

class TableDetail extends Component {
	render() {
		const table = this.props.navigation.getParam('table');
		return (
			<Card>
				<CardItem>
					<Body>
						<Text>Host: {table.host.username}</Text>
						<Text>Game: {table.game.name}</Text>
						<Text>Date: {table.game_date}</Text>
						<Text>Time: {table.start_time}</Text>
						<Text>Open Slots: {table.player_number - table.activePlayers}</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}
export default TableDetail;
