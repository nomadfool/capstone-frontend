import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';

// Stores
import tableStore from '../../stores/tableStore';
import { observer } from 'mobx-react';
// Components
import ListItem from './ListItem';

class List extends Component {
	render() {
		const tables = tableStore.tables.map((table) => {
			return <ListItem key={table.id} table={table} navigation={this.props.navigation} />;
		});
		return (
			<Container
				contentContainerStyle={{
					flex           : 1,
					alignItems     : 'center',
					justifyContent : 'center'
				}}
			>
				<Content>{tables}</Content>
			</Container>
		);
	}
}
export default observer(List);
