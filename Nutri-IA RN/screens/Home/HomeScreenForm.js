import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, StatusBar} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'

export default class HomeScreenForm extends React.Component{
    render(){
        console.warn(this.props)
        return(
            <View style={styles.container}>
                <StatusBar
                    barStyle = "light-content"
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={() =>
                    this.props.navigation.navigate("Login")}>
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
    buttonContainer:{
        backgroundColor: '#3cb9bc',
        width: 200,
        paddingVertical: 15,
        borderRadius: 60,
        marginBottom: 10,
    },
    buttonText:{
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '800',
    },
});