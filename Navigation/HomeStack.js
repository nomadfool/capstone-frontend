import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

// Screens
import homeScreen from '../components/Home';
import loginScreen from '../components/Login';
import registerScreen from '../components/Registration';
import TableDetail from '../components/Home/TableDetail';

const HomeStack = createStackNavigator(
	{
		Home     : homeScreen,
		Detail   : TableDetail,
		Login    : loginScreen,
		Register : registerScreen
	},
	{
		defaultNavigationOptions : ({ navigation }) => ({
			title            : 'Home',
			headerTintColor  : '#000000',
			headerTitleStyle : { fontWeight: 'bold' },
			headerStyle      : { backgroundColor: 'ffffff' },
			headerLeft       : (
				<Icon
					name="menu"
					style={{ color: '#000000' }}
					type="MaterialCommunityIcons"
					onPress={() => navigation.openDrawer()}
				/>
			)
		})
	}
);

export default HomeStack;
