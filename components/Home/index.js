import React, { Component } from 'react';
import { Container, Spinner, Content, Text } from 'native-base';

// Stores
import tableStore from '../../stores/tableStore';

// Components
import List from './List';
import { observer } from 'mobx-react';

class Home extends Component {
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
		return <List navigation={this.props.navigation} />;
	}
}

export default observer(Home);
