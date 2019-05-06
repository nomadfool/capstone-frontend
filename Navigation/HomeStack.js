import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

// Screens
import homeScreen from '../components/Home';
import loginScreen from '../components/Login';
import registrationScreen from '../components/Register';
import profileScreen from '../components/Profile';
import dashboardScreen from '../components/Profile/Dashboard';
import createTable from '../components/Home/createTable';
import hostedTableDetailsScreen from '../components/Profile/HostedTableDetails';

const HomeStack = createStackNavigator(
	{
		Home               : homeScreen,
		Login              : { screen: loginScreen },
		Register           : { screen: registrationScreen },
		Dashboard          : { screen: dashboardScreen },
		Create             : { screen: createTable },
		Profile            : { screen: profileScreen },
		HostedTableDetails : { screen: hostedTableDetailsScreen }
	},
	{
		defaultNavigationOptions : ({ navigation }) => ({
			title            : 'TableTop',
			headerTintColor  : '#000000',
			headerTitleStyle : { fontWeight: 'bold' },
			headerStyle      : { backgroundColor: 'ffffff' },
			headerLeft       : (
				<Icon
					name="menu"
					style={{ color: '#000000', paddingLeft: 8 }}
					type="MaterialCommunityIcons"
					onPress={() => navigation.openDrawer()}
				/>
			)
		})
	}
);

export default HomeStack;
