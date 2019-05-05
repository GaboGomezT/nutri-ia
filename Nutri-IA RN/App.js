import React, { Component} from 'react';
import { createAppContainer, StackActions, NavigationActions} from 'react-navigation'
import AppNavigator from './navigation/AppNavigator'

export default class App extends React.Component {
  render() {
    return <AppNavigator/>
  }
}
