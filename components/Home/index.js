import React, { Component } from 'react';
import { Container, Spinner, Content, Text } from 'native-base';
import { observer } from 'mobx-react';

// Stores
import tableStore from '../../stores/tableStore';

// Components
import List from './List';
import FoldList from './FoldView/FoldList';

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
		return <FoldList />;
	}
}

export default observer(Home);

/* <List navigation={this.props.navigation} /> */
