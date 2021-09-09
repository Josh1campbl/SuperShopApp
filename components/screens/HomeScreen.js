import React, {Component} from 'react';
import { View, StyleSheet, ImageBackground, Button, Pressable, Text, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Category from './explore/Category';

function HomeScreen({navigation}) {
    return (
        <ImageBackground source={require(".../assets/aisle.png")} style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.panel}>
                    <Pressable style={styles.newListButton} onPress={() => console.log("New List")}>
                        <Text style={styles.newListText}>New List</Text>
                    </Pressable>
                </View>
                <View style={styles.panel}>
                    <Pressable style={styles.newListButton} onPress={() => console.log("My Lists")}>
                        <Text style={styles.newListText}>My Lists</Text>
                    </Pressable>
                </View>
                <View style={styles.panel}>
                    <Pressable style={styles.newListButton} onPress={() => console.log("Plan Meals")}>
                        <Text style={styles.newListText}>Plan Meals</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.specialsContainer}>
                <Pressable style={styles.specialsButton} onPress={() => console.log("Specials")}>
                    <Text style={styles.specialsText}>Specials</Text>
                </Pressable>
                <View style={{flex: 1, backgroundColor:"grey"}}>
                    <ScrollView horizontal={true}>
                        <Category imageUri={require(".../assets/Blueberry.png")} name="Blueberry"/>
                        <Category imageUri={require(".../assets/Strawberry.png")} name="Strawberry"/>
                        <Category imageUri={require(".../assets/Chicken.png")} name="Chicken"/>
                        <Category imageUri={require(".../assets/Dumpling.png")} name="Dumpling"/>
                    </ScrollView>
                </View>
            </View>
            
        </ImageBackground>
    );
}
    
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",

    },
    innerContainer:{
        flex: 0.55,
        backgroundColor: "transparent",
        justifyContent: "space-between",
        padding: 15,
    },
    myListsButton:{
        justifyContent: 'center',
        paddingHorizontal: 22,
        backgroundColor: 'darkseagreen',
        flex: 1,
    },
    myListsText:{
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    newListButton: {
        justifyContent: 'center',
        paddingHorizontal: 22,
        backgroundColor: 'darkseagreen',
        flex: 1,
    },
    newListText: {
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    panel: {
        flex: 0.3,
        backgroundColor: "transparent",
        backgroundColor: "darkseagreen",
        opacity: 0.9,
        borderRadius: 5,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 1,
        
    },
    planMealsButton: {
        justifyContent: 'center',
        paddingHorizontal: 22,
        backgroundColor: 'darkseagreen',
        flex: 1,
    },
    planMealsButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    specialsButton: {
        alignItems: 'center',
        backgroundColor: 'darkseagreen',
        opacity: 0.9,
    },
    specialsContainer: {
        backgroundColor:"transparent",
        flex: 0.35,
    },
    specialsText: {
        fontSize: 27,
        fontWeight: 'bold',
        letterSpacing: 0.9,
        color: 'white',
    },
    
    
})



export default HomeScreen;