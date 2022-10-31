import React from 'react';
import {View,Text} from 'react-native';
import Firecrakers from './firecrakers';
import Ghost from './ghost';
import HalloweenText from './halloween';
import Pumpkin from './pumkin';
const Halloween = () =>{
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
            <Firecrakers/>
            <View style={{flexDirection:'row',width:'100%',justifyContent:"space-between"}}>
         <Pumpkin/>
         <Ghost/>
         </View>
         <HalloweenText/>
        </View>
    )
}
export default Halloween