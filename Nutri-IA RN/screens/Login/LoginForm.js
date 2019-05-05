import React, {Component} from 'react';
import {StyleSheet, Dimensions, View, Image, TextInput, TouchableOpacity, Text, StatusBar, Animated, Keyboard} from 'react-native';

const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;

export default class LoginForm extends React.Component{
    constructor(props) {
        super(props);
    
        this.keyboardHeight = new Animated.Value(0);
        this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
      }
    
      componentWillMount () {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
      }
    
      componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
      }
    
      keyboardWillShow = (event) => {
        Animated.parallel([
          Animated.timing(this.keyboardHeight, {
            duration: event.duration,
            toValue: event.endCoordinates.height,
          }),
          Animated.timing(this.imageHeight, {
            duration: event.duration,
            toValue: IMAGE_HEIGHT_SMALL,
          }),
        ]).start();
      };
    
      keyboardWillHide = (event) => {
        Animated.parallel([
          Animated.timing(this.keyboardHeight, {
            duration: event.duration,
            toValue: 0,
          }),
          Animated.timing(this.imageHeight, {
            duration: event.duration,
            toValue: IMAGE_HEIGHT,
          }),
        ]).start();
      };
    render(){
        return(
            <Animated.View style={[styles.container, { paddingBottom: this.keyboardHeight }]}>
                <StatusBar
                    barStyle = "light-content"
                />
                <TextInput 
                    placeholder="Email"
                    placeTextColor="rgba(44, 62, 80,0.9)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Contraseña"
                    placeTextColor="rgba(44, 62, 80,0.9)"
                    returnKeyType="go" 
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() =>
                    this.props.navigation.navigate("Sigin")}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        fontFamily: 'monospace',
        //marginTop: 20
    },
    input:{
        height: 30,
        backgroundColor: 'rgba(236, 240, 241,0.6)',
        marginBottom: 10,
        color: 'rgba(44, 62, 80,0.9)',
        paddingHorizontal: 15,
        borderRadius: 60,
        width: window.width - 275,
    },
    buttonContainer:{
        backgroundColor: '#3cb9bc',
        paddingVertical: 10,
        borderRadius: 60,
        marginBottom: 5,
        marginTop: 5
    },
    buttonText:{
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700',
    },
    register:{
        marginBottom:20, 
        width:window.width -100,
        alignItems:'center',
        justifyContent:'center',
        height:50,
        backgroundColor: '#ffae',}
});