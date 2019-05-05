import React, {Component} from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from './../screens/Home/HomeScreen';
import LoginScreen from './../screens/Login/LoginScreen';
import SiginScreen from './../screens/Sigin/SiginScreen';
import Register from './../screens/Register/Register';
import Welcome from './../screens/Welcome/Welcome';

const AppNavigator = createSwitchNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  Sigin: SiginScreen,
  Register: Register,
  Welcome: Welcome,
});



export default createAppContainer ( AppNavigator );