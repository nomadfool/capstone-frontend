import React, { Component } from 'react';
import { View } from 'react-native';
import {
	Body,
	Button,
	Icon,
	Left,
	ListItem,
	Right,
	SwipeRow,
	Text,
	Container,
	Content,
	Card,
	CardItem
} from 'native-base';

export default class GameDetail extends Component {
	render() {
		const table = this.props.navigation.getParam('table');
		console.log(table);

		return (
			<Container>
				<Content>
					<Card>
						<CardItem>
							<Body>
								<Text>Game: {table.table.game.name}</Text>
								<Text>Date: {table.table.game_date}</Text>
								<Text>Time: {table.table.start_time}</Text>
								<Text>Open Slots: {table.table.player_number - table.table.activePlayers}</Text>
								<Text>Registered players: </Text>
							</Body>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}
