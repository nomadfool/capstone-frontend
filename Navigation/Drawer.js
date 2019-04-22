import React from 'react';
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import { SafeAreaView, ScrollView, View, Image } from 'react-native';
//import { Text } from 'native-base';

//navigators
import homeStack from '../Navigation/HomeStack';

// stores
import authStore from '../stores/authStore';

const customDrawerComponent = (props) => (
	<SafeAreaView style={{ flex: 1, backgroundColor: '#351C4D' }}>
		{/* <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
			<Image source={getImage()} style={{ height: 120, width: 120, borderRadius: 60 }} />
		</View> */}
		<ScrollView>
			<DrawerItems {...props} />
		</ScrollView>
	</SafeAreaView>
);

const Drawer = createDrawerNavigator(
	{
		Home : { screen: homeStack }
	},
	{
		contentComponent : customDrawerComponent,
		initialRouteName : 'Home',
		contentOptions   : {
			activeTintColor   : '#FF7E5F',
			inactiveTintColor : 'white'
		}
	}
);

const AppContainer = createAppContainer(Drawer);

export default AppContainer;
