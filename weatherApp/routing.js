import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer , useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import AutoComp from './autocomp'
import Details from './details'
import Splash from './splash'
const Stack=createStackNavigator();
export default class Routes extends React.Component{
    render(){

        return(
            <NavigationContainer>

            <Stack.Navigator initialRouteName="Splash" headerMode="none" >
            <Stack.Screen name="Splash" component={Splash} />

             <Stack.Screen name="Home" component={AutoComp} />
     
             <Stack.Screen name="Details" component={Details} />
         
            </Stack.Navigator>
            </NavigationContainer>
        )
    }
}