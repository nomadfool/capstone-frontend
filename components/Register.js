import React, { Component } from 'react';
import { observer } from 'mobx-react';

// NativeBase Components
import { Form, Item, Input, Button, Text, Container, Content, Label } from 'native-base';

// Store
import authStore from '../stores/authStore';

class Register extends Component {
	state = {
		username   : '',
		password   : '',
		first_name : '',
		last_name  : '',
		email      : ''
	};

	handleRegister = () => {
		authStore.signupUser(this.state, this.props.navigation);
	};

	render() {
		return (
			<Container
				ontentContainerStyle={{
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
						<Item floatingLabel>
							<Label style={{ color: '#fff' }}>Password</Label>
							<Input
								style={{ color: '#fff' }}
								autoCapitalize="none"
								secureTextEntry
								onChangeText={(password) => this.setState({ password })}
							/>
						</Item>

						<Item floatingLabel>
							<Label style={{ color: '#fff' }}>First Name</Label>
							<Input
								style={{ color: '#fff' }}
								autoCapitalize="none"
								onChangeText={(first_name) => this.setState({ first_name })}
							/>
						</Item>
						<Item floatingLabel>
							<Label style={{ color: '#fff' }}>Last Name</Label>
							<Input
								style={{ color: '#fff' }}
								autoCapitalize="none"
								onChangeText={(last_name) => this.setState({ last_name })}
							/>
						</Item>
						<Item floatingLabel last>
							<Label style={{ color: '#fff' }}>Email</Label>
							<Input
								style={{ color: '#fff' }}
								autoCapitalize="none"
								onChangeText={(email) => this.setState({ email })}
							/>
						</Item>

						<Button
							block
							onPress={this.handleRegister}
							style={{ marginTop: 25, backgroundColor: '#7B8DA0' }}
						>
							<Text>Register</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}
export default observer(Register);
