import React from 'react';
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import { SafeAreaView, ScrollView, View, Image } from 'react-native';
//import { Text } from 'native-base';

//navigators
import homeStack from '../Navigation/HomeStack';
import loginScreen from '../components/Login';
import registrationScreen from '../components/Register';
import profileScreen from '../components/Profile';
import dashboardScreen from '../components/Profile/Dashboard';

// stores
import authStore from '../stores/authStore';

const customDrawerComponent = (props) => (
	<SafeAreaView style={{ flex: 1, backgroundColor: '#ACB8C3', opacity: 50 }}>
		{/* <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
			<Image source={getImage()} style={{ height: 120, width: 120, borderRadius: 60 }} />
		</View> */}
		<ScrollView style={{ marginTop: 150 }}>
			<DrawerItems {...props} />
		</ScrollView>
	</SafeAreaView>
);

const Drawer = createDrawerNavigator(
	{
		Home      : { screen: homeStack },
		Dashboard : { screen: dashboardScreen },
		Register  : { screen: registrationScreen },
		Login     : { screen: loginScreen }
	},
	{
		contentComponent         : customDrawerComponent,
		initialRouteName         : 'Home',
		contentOptions           : {
			activeTintColor   : '#000',
			inactiveTintColor : 'white'
		},
		defaultNavigationOptions : {
			headerStyle      : {
				backgroundColor : '#fff'
			},
			headerTintColor  : '#000',
			headerTitleStyle : {
				fontWeight : 'bold'
			}
		}
	}
);

const AppContainer = createAppContainer(Drawer);

export default AppContainer;
