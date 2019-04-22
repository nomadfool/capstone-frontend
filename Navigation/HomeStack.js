import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

// Screens
import homeScreen from '../components/Home';
import loginScreen from '../components/Login';
import registerScreen from '../components/Registration';

const HomeStack = createStackNavigator(
	{
		Home     : homeScreen,
		Login    : loginScreen,
		Register : registerScreen
	},
	{
		defaultNavigationOptions : ({ navigation }) => ({
			title            : 'Home',
			headerTintColor  : '#FF7E5F',
			headerTitleStyle : { fontWeight: 'bold' },
			headerStyle      : { backgroundColor: '#351C4D' },
			headerLeft       : (
				<Icon
					name="menu"
					style={{ color: '#FF7E5F' }}
					type="MaterialCommunityIcons"
					onPress={() => navigation.openDrawer()}
				/>
			)
		})
	}
);

export default HomeStack;
