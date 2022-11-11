import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './bottomNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                options={{
                    headerShown:false
                }}
                name='bottomtabs' component={BottomTabs}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;