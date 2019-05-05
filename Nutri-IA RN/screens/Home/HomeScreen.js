import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import HomeScreenForm from './HomeScreenForm'

export default class HomeScreen extends React.Component{
    render (){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('./../../src/images/logo-n.png')}/>
                    <Text style={styles.title}>¡Bienvenido!</Text>
                </View>
                <View style={styles.formContainer}>
                    <HomeScreenForm {...this.props}/>
                </View>
                <View style={styles.logoContainer}>
                  <Text style={styles.textfoot}>Powered by</Text>
                  <Image 
                  style={styles.logofoot}
                  source={require('./../../src/images/senPyJS.png')}/>
                </View>
            </KeyboardAvoidingView>
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
      marginTop: 15,
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
      marginTop: 10,
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