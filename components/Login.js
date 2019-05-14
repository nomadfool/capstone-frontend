import React, { Component } from 'react';
import { observer } from 'mobx-react';

// NativeBase Components
import { Form, Item, Input, Button, Text, Container, Content, Label } from 'native-base';

// Store
import authStore from '../stores/authStore';

class Login extends Component {
	state = {
		username : '',
		password : ''
	};

	handleLogin = () => {
		if (this.state.username && this.state.password) {
			authStore.loginUser(this.state, this.props.navigation);
		}
	};

	handleRegister = () => {
		this.props.navigation.navigate('Register');
	};

	handleLogout = () => {
		authStore.logout(this.props.navigation);
	};

	handleProfile = () => {
		this.props.navigation.navigate('Profile');
	};
	componentDidMount() {}

	render() {
		if (authStore.user) {
			return this.props.navigation.replace('Dashboard');
		} else {
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
						<Form style={{ width: '85%' }}>
							<Item floatingLabel>
								<Label style={{ color: '#fff' }}>Username</Label>
								<Input
									style={{ color: '#fff' }}
									autoCapitalize="none"
									onChangeText={(username) => this.setState({ username })}
								/>
							</Item>
							<Item floatingLabel last>
								<Label style={{ color: '#fff' }}>Password</Label>
								<Input
									style={{ color: '#fff' }}
									autoCapitalize="none"
									secureTextEntry
									onChangeText={(password) => this.setState({ password })}
								/>
							</Item>
							<Button
								style={{ marginTop: 15, backgroundColor: '#7B8DA0' }}
								block
								onPress={this.handleLogin}
							>
								<Text>Login</Text>
							</Button>
							<Button
								block
								onPress={this.handleRegister}
								style={{ marginTop: 5, backgroundColor: '#7B8DA0' }}
							>
								<Text>SingnUp</Text>
							</Button>
						</Form>
					</Content>
				</Container>
			);
		}
	}
}

export default observer(Login);
