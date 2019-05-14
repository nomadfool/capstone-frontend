import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import { Container, Content, Form, Item, Label, Input, Picker, DatePicker, View, Textarea, Button } from 'native-base';
import TimePicker from 'react-native-24h-timepicker';
import tableStore from '../../stores/tableStore';
import authStore from '../../stores/authStore';

class CreateTable extends Component {
	state = {
		game          : null,
		name          : null,
		player_number : null,
		description   : null,
		game_date     : new Date(),
		start_time    : null
	};

	onValueChange = (value) => {
		this.setState({
			game : value
		});
	};

	dateChangedHandler = (date) => {
		console.log(date);
		newDate = date.toString().substr(0, 9);
		this.setState({ game_date: newDate });

		console.log(newDate);
	};

	onCancel = () => {
		this.TimePicker.close();
	};

	onConfirm = (hour, minute) => {
		this.setState({ start_time: `${hour}:${minute}:00` });
		this.TimePicker.close();
	};

	formSubmit = () => {
		tableStore.createTable(this.state);
	};

	render() {
		let items;
		if (!tableStore.loadingGames) {
			tableStore.games.map((item) => {
				return <Picker.Item label={item.name} value={item.id} key={item.id} />;
			});
		}
		// console.log('items', items);
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
					<Text style={{ color: '#fff', fontSize: 24 }}>Host a Game</Text>
					<Form style={{ width: '75%' }}>
						<Item floatingLabel>
							<Label style={{ color: '#fff' }}>Name</Label>
							<Input
								style={{ color: '#fff' }}
								autoCapitalize="none"
								onChangeText={(name) => this.setState({ name })}
							/>
						</Item>
						<Item>
							<Textarea
								placeholder="Description"
								placeholderTextColor="white"
								rowSpan={4}
								style={{ color: '#fff', width: '100%', paddingLeft: -5 }}
								autoCapitalize="none"
								onChangeText={(description) => this.setState({ description })}
							/>
						</Item>
						<Item>
							<Picker
								note
								placeholder="Chose a Game"
								mode="dropdown"
								style={{ width: 120 }}
								selectedValue={this.state.game}
								onValueChange={this.onValueChange.bind(this)}
							>
								<Picker.Item label="settlers of Catan" value={1} />
								<Picker.Item label="Coup" value={8} />
								<Picker.Item label="A Game of Thrones" value={9} />
								<Picker.Item label="Pandemic Legacy" value={10} />
								<Picker.Item label="Star Wars: Rebellion" value={11} />
								<Picker.Item label="Ticket to Ride" value={12} />
								<Picker.Item label="Lords of Waterdeep" value={13} />
							</Picker>
							{/* <Text>{}</Text> */}
						</Item>
						<Item inlineLabel>
							<Label style={{ color: '#fff' }}>Number of Players Needed</Label>
							<Input
								style={{ color: '#fff' }}
								autoCapitalize="none"
								onChangeText={(player_number) => this.setState({ player_number })}
							/>
						</Item>
						<Item floatingLabel>
							<Label style={{ color: '#fff' }}>Date</Label>
							<Input
								style={{ color: '#fff' }}
								autoCapitalize="none"
								onChangeText={(game_date) => this.setState({ game_date })}
							/>
						</Item>
						{/* <Item style={{ flexDirection: 'row' }}>
							<Button
								style={{
									height          : 50,
									width           : 110,
									marginTop       : 15,
									marginBottom    : 10,
									backgroundColor : '#7B8DA0'
								}}
							>
								<DatePicker
									style={{ width: '100%', height: 300 }}
									itemStyle={{ height: 300 }}
									date={this.state.game_date}
									mode="date"
									placeholder="select date"
									format="YYYY-MM-DD"
									minDate="2019-01-01"
									maxDate="2019-12-01"
									confirmBtnText="Confirm"
									cancelBtnText="Cancel"
									onDateChange={(date) => this.dateChangedHandler(date)}
								/>
							</Button>
							<Text style={{ marginHorizontal: 25, color: '#fff' }}>
								Date: {this.state.game_date.toString().substr(4, 12)}
							</Text>
						</Item> */}

						<Item last style={{ marginTop: 10 }}>
							<Button
								onPress={() => this.TimePicker.open()}
								style={{
									height          : 50,
									width           : 110,
									marginTop       : 10,
									marginBottom    : 10,
									backgroundColor : '#7B8DA0'
								}}
							>
								<Text style={{ fontSize: 17, paddingLeft: 12 }}>Select Time</Text>
							</Button>
							<Text style={{ marginHorizontal: 25, color: '#fff' }}>{this.state.start_time}</Text>
							<TimePicker
								ref={(ref) => {
									this.TimePicker = ref;
								}}
								onCancel={() => this.onCancel()}
								onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
							/>
						</Item>
					</Form>
					<View style={{ alignContent: 'center', justifyContent: 'center', marginTop: 14, width: '65%' }}>
						<Button block onPress={() => this.formSubmit()} style={{ backgroundColor: '#7B8DA0' }}>
							<Text>Submit</Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}
export default observer(CreateTable);
