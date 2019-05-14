import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
// NativeBase Components
import { Form, Item, Input, Button, Text, Container, Content, Label } from 'native-base';

// Components
import HostedGames from './HostedGames';
import JoinedGames from './JoinedGames';

// Stores

import authStore from '../../stores/authStore';

import playerStore from '../../stores/playerStore';
import tableStore from '../../stores/tableStore';

class Dashboard extends Component {
	static navigationOptions = {
		title            : 'Dashboard',
		headerStyle      : {
			backgroundColor : '#fff'
		},
		headerTintColor  : '#000',
		headerTitleStyle : {
			fontWeight : 'bold'
		}
	};
	handleLogout = () => {
		authStore.logout(this.props.navigation);
	};

	handleProfile = () => {
		this.props.navigation.navigate('Profile');
	};

	deleteTable = (tableID) => {
		tableStore.deleteTable(tableID);
	};
	componentDidMount() {
		playerStore.fetchAllPlayers(authStore.user);
	}
	render() {
		let hosted;
		let joined;
		if (!playerStore.loading) {
			hosted = playerStore.hosting.map((table) => {
				return (
					<HostedGames
						key={table.id}
						table={table}
						navigation={this.props.navigation}
						deleteTable={this.deleteTable}
					/>
				);
			});
			joined = playerStore.playing.map((table) => {
				return (
					<JoinedGames
						key={table.id}
						table={table}
						navigation={this.props.navigation}
						deleteTable={this.deleteTable}
					/>
				);
			});
		}
		return (
			<Container
				contentContainerStyle={{
					flex : 1
				}}
			>
				<Content
					contentContainerStyle={{
						backgroundColor : '#4A637D',
						flex            : 1,
						alignItems      : 'center',
						justifyContent  : 'center'
					}}
				>
					<Text style={{ paddingTop: 80 }}>Hosted Games</Text>
					<ScrollView style={{ height: '30%', borderTopWidth: StyleSheet.hairlineWidth, width: '95%' }}>
						{hosted}
					</ScrollView>
					<Text>Joined Games</Text>
					<ScrollView style={{ height: '30%', borderTopWidth: StyleSheet.hairlineWidth, width: '95%' }}>
						{joined}
					</ScrollView>
					<View
						style={{
							width          : '100%',
							alignItems     : 'center',
							justifyContent : 'center',
							paddingBottom  : 50
						}}
					>
						<Form style={{ width: '85%' }}>
							<Button
								block
								style={{ marginTop: 1, backgroundColor: '#7B8DA0' }}
								onPress={this.handleLogout}
							>
								<Text>Logout</Text>
							</Button>

							<Button
								block
								style={{ marginTop: 5, backgroundColor: '#7B8DA0' }}
								onPress={this.handleProfile}
							>
								<Text>Profile</Text>
							</Button>
						</Form>
					</View>
				</Content>
			</Container>
		);
	}
}

export default observer(Dashboard);
