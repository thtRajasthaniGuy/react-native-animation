import React from 'react';
import {View,Text} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './home';
import Setting from './setting';

const BottomTabsStack = createBottomTabNavigator();

const BottomTabs = () =>{
    return (    
        <BottomTabsStack.Navigator
      // tabBar={(props)=><View><Text>asd</Text></View>} 
        >
            <BottomTabsStack.Screen
            options={{
                headerShown:false
            }}
            name='home' component={Home}/>
            <BottomTabsStack.Screen
            options={{
                headerShown:false
            }}
            name='setting' component={Setting}/>
        </BottomTabsStack.Navigator>
    )
}

export default BottomTabs
