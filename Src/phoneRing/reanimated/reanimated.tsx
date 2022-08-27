import React from 'react';
import {StyleSheet, View} from 'react-native';

import Ring from './ring'
const PhoneRing = () =>{
    
        return (
            <View style={{flex:1,justifyContent: 'center',alignItems: "center"}}>
                <View style={{justifyContent: 'center',alignItems: "center",width:100,height:100,borderRadius:100,}}>
                {[...Array(3).keys()].map((i,_i) => {
                        return (
                            <Ring index={_i}/>
                        )
                })}
               
               </View>
            </View>
        )
}

export default PhoneRing