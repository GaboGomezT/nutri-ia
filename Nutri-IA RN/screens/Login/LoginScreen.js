import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StackNavigator } from 'react-navigation';
import LoginForm from './LoginForm';


export default class LoginScreen extends React.Component{
    render (){
        return(
            <KeyboardAwareScrollView style={styles.container} scrollEnabled={false}>
              <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('./../../src/images/logo-n.png')}/>
                    <Text style={styles.title}>Inicia Sesión</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm {...this.props}/>
                </View>
                <View style={styles.logoFootContainer}>
                  <Text style={styles.textfoot}>Powered by</Text>
                  <Image 
                  style={styles.logofoot}
                  source={require('./../../src/images/senPyJS.png')}/>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
      
  },
  formContainer:{
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
},
  logoContainer:{
    alignItems:'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logoFootContainer:{
    marginTop: 20,
    alignItems:'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo:{
    resizeMode: "contain",
    width: "40%",
    height: "40%",
  },
  title:{
    color: '#2c3e50',
    marginTop: 10,
    width: 200,
    textAlign: 'center',
    opacity: 0.9,
    fontSize: 30,
    fontFamily: 'sans-serif-light'
  },

  textfoot:{
    color: '#2c3e50',
    marginTop: 30,
    width: 200,
    textAlign: 'center',
    opacity: 0.9,
    fontSize: 10,
    fontFamily: 'sans-serif-condensed'
  },
  logofoot:{
    resizeMode: "contain",
    width: "25%",
    height: "25%",
  },
});