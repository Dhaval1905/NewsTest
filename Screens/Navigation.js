import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import FirstSCreen from './FisrtScreen';
import SecondScreen from "./SecondScreen";
import ThirdScreen from './ThirdScreen'


const Stack=createStackNavigator();

function Navigation()
{
    return(
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="FirstScreen"  component={FirstSCreen}/>
        <Stack.Screen name="SecondScreen"  component={SecondScreen}/>
        <Stack.Screen name="ThirdScreen"  component={ThirdScreen}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation