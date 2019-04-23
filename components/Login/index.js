import React, { Component } from 'react';
import { observer } from 'mobx-react';

// NativeBase Components
import { Form, Item, Input, Button, Text, Container, Content } from 'native-base';

// Store
import authStore from '../../stores/authStore';

// Components
import Registration from '../Registration/index';

class Login extends Component {
	state = {
		username : '',
		password : ''
	};

	handlesubmit = () => {
		authStore.loginUser(this.state, this.props.navigation);
	};

	componentDidMount() {
		// if (authStore.user) this.props.navigation.navigate('Profile');
	}

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
					<Form style={{ width: '80%' }}>
						<Item>
							<Input
								placeholder="Username"
								autoCapitalize="none"
								autoCorrect={false}
								onChangeText={(username) => this.setState({ username })}
							/>
						</Item>
						<Item last>
							<Input
								placeholder="Password"
								autoCapitalize="none"
								autoCorrect={false}
								secureTextEntry={true}
								onChangeText={(password) => this.setState({ password })}
							/>
						</Item>
						<Button full style={{ marginBottom: 10, marginTop: 5 }} onPress={() => this.handlesubmit()}>
							<Text>Login</Text>
						</Button>
						<Button full onPress={() => this.props.navigation.navigate('Register')}>
							<Text>Register</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}
export default observer(Login);
