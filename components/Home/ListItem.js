import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
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

class ListItem extends Component {
	render() {
		const { table } = this.props;
		return (
			<TouchableHighlight
				onPress={() =>
					this.props.navigation.navigate('Detail', {
						table : table
					})}
			>
				<Card>
					<CardItem>
						<Body>
							<Text>Game: {table.game.name}</Text>
							<Text>Date: {table.game_date}</Text>
							<Text>Time: {table.start_time}</Text>
							<Text>Open Slots: {table.player_number - table.activePlayers}</Text>
						</Body>
					</CardItem>
				</Card>
			</TouchableHighlight>
		);
	}
}

export default ListItem;
