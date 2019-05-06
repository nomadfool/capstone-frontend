import React, { Component } from 'react';
import { Container, Spinner, Content, Text, View, Fab, Icon, Button } from 'native-base';
import { observer } from 'mobx-react';

// Stores
import tableStore from '../../stores/tableStore';

// Components
import List from './List';
import FoldList from './FoldView/FoldList';

class Home extends Component {
	createTable = () => {
		this.props.navigation.navigate('Create');
	};

	render() {
		if (!tableStore.tables) {
			return (
				<Container>
					<Content
						contentContainerStyle={{
							flex           : 1,
							alignItems     : 'center',
							justifyContent : 'center'
						}}
					>
						<Spinner color="blue" />
					</Content>
				</Container>
			);
		}
		return (
			<View style={{ flex: 1 }}>
				<FoldList />
				<Fab
					Button
					direction="right"
					position="bottomRight"
					style={{ backgroundColor: '#351C4D' }}
					onPress={this.createTable}
				>
					<Icon name="plus" type="Feather" />
					<Button style={{ backgroundColor: '#o2c39a' }} />
				</Fab>
			</View>
		);
	}
}

export default observer(Home);

/* <List navigation={this.props.navigation} /> */
