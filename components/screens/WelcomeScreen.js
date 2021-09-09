import React, { Component } from 'react';
import { Button, Image, ImageBackground, StyleSheet, View } from 'react-native';

import HomeScreen from './HomeScreen';

function WelcomeScreen({navigation}) {
    return (
        <ImageBackground
        style={styles.background}
            source={require('.../assets/nana.png')}
        >   
            <Image style={styles.logo} source={require(".../assets/logo.png")}/>
            <View style={styles.loginButton}>
                <Button title="Log In" color="green"
                    onPress={() => 
                        navigation.navigate('Login', {name: 'Login'})} />
                <Button title="Register" color="red"
                    onPress={() => 
                        navigation.navigate('Register', {name: 'Register'})} />
            </View>
            
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
    },
    logo: {
        width: 300,
        height: 300,
        position: 'absolute',
        top: 70,
    },
    
})

export default WelcomeScreen;