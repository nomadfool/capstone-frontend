import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

// Components
import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../components/Profile";

const StackNav = createStackNavigator(
  {
    Login: Login,
    Signup: Register,
    Profile: Profile
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(8,80,129)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "rgb(8,80,129)"
    }
  }
);

const AppContainer = createAppContainer(StackNav);
export default AppContainer;
