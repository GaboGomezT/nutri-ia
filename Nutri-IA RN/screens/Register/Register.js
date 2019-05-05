import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';

export default class Register extends React.Component{
    render (){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('./../../src/images/logo-n.png')}/>
                    <Text style={styles.title}>¡Felicidades!</Text>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.text}>Ha concluido su registro exitosamente, por favor verifique su correo electrónico para su verificación</Text>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() =>
                        this.props.navigation.navigate("Home")}>
                        <Text style={styles.buttonText}>Aceptar</Text>
                    </TouchableOpacity>
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
    text:{
        color: '#2c3e50',
        marginTop: 10,
        width: 200,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 20,
        fontFamily: 'sans-serif-medium'
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
    buttonContainer:{
        backgroundColor: '#3cb9bc',
        paddingVertical: 10,
        borderRadius: 60,
        marginBottom: 10,
        marginTop: 10,
    },
    buttonText:{
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700',
    },
});