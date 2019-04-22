import React, { Component } from 'react';
import { Container, Spinner, Content, Text } from 'native-base';

class Home extends Component {
	render() {
		return (
			<Container>
				<Content
					contentContainerStyle={{
						flex           : 1,
						alignItems     : 'center',
						justifyContent : 'center'
					}}
				>
					<Text>Under Construction</Text>
					<Spinner />
				</Content>
			</Container>
		);
	}
}

export default Home;
