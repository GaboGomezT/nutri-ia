import React, {Component} from 'react';
import {StyleSheet, Dimensions, View, Image, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';

const window = Dimensions.get('window');

export default class LoginForm extends React.Component{
    state = {
        text: ''
      };
    render(){
        return(
            <View style={[styles.container, { paddingBottom: this.keyboardHeight }]}>
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
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
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
                <TouchableOpacity style={styles.buttonContainer} onPress={() =>
                    this.props.navigation.navigate("Welcome")}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() =>
                    this.props.navigation.navigate("Sigin")}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
            </View>
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
        width: 275,
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
});