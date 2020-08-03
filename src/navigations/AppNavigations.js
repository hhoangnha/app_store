import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ScreenLogin,ScreenRegister} from '../screens/Login/index'

export default class AppNavigations extends Component {
    render() {
        const Stack = createStackNavigator()
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown:false}}>
                    <Stack.Screen name="Login" component={ScreenLogin} />
                    <Stack.Screen name="Register" component={ScreenRegister} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
