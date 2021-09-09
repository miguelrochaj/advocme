import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../screens/Login';
import { Carregamento } from '../screens/Loading';
import { Cadastro } from '../screens/Cadastro';
import  Home  from '../screens/Home';


const Stack= createStackNavigator();    

export function MainNavigation(){

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Loading" component={Carregamento}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Cadastro" component={Cadastro}/>
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}