import React from 'react';
import {View,Text,LayoutAnimation,SafeAreaView,Button,StyleSheet} from 'react-native';
import CounterTicker from './counterTicker'
const CounterTickers  = () =>{
    const [nextNumber,setNextNumber ] = React.useState(0);
    const handlePress = React.useCallback(()=>{
        // console.log("lk");
        
            const nextNumber  = Math.floor(Math.random() * 1000000);
            setNextNumber(nextNumber)
           

            

            
    },[])

    // React.useEffect(()=>{
    //     const number  = setInterval(() => {
    //         setNextNumber(nextNumber+1)
    //     },100)

    //     return () => {
    //         clearInterval(number);
    //     }
    // },[])
    return (
        <SafeAreaView style={{flex:1,alignItems: 'center'}}>
            <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
                <CounterTicker fontSize={60} value={nextNumber} color={'#000'}  maxNumber={9999999}/>
                
                <Button title='Press' onPress={handlePress}/>
            </View>
        </SafeAreaView>
    )
}

export default CounterTickers