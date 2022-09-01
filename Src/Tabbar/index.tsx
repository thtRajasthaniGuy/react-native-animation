import React,{useCallback} from 'react';
import {View,Pressable, LayoutChangeEvent,Text} from 'react-native';
import Animated,{useSharedValue,useAnimatedStyle,withTiming} from 'react-native-reanimated'
const data =["Years","Day","Month","Week"]
const UsingWithTiming = () =>{
    const sharedWidth = useSharedValue<number>(0)
    const translateX = useSharedValue<number>(0)
    
    
    
const animatedStyle = useAnimatedStyle(() => {
    return {
          width: sharedWidth.value,
      transform: [{translateX: translateX.value}],
      backgroundColor: "grey",
      borderRadius: 12,
       position: "absolute",
    //   bottom: 0,
    //   left: 0,
      height: 30,
    //   padding:15
    }
})


    const sharedYears = useSharedValue<{width: number, x: number}>({width: 0, x: 0})
    
    
    const layoutYears = useCallback((event: LayoutChangeEvent) => {
      const {width, x} = event.nativeEvent.layout
      console.log("layout years",width,x);
      
      sharedYears.value = {width, x}
    },[sharedYears])
    
    
// React.useEffect(()=>{
//     // layoutYears()
//     translateX.value = withTiming(20)
//     sharedWidth.value = withTiming(60)
//  },[sharedYears, translateX, sharedWidth])

    const pressYears = useCallback(() => {
    "worklet"
      translateX.value = withTiming(sharedYears.value.x)
      sharedWidth.value = withTiming(sharedYears.value.width)
    },[sharedYears, translateX, sharedWidth])

   
    
    
    
    return (
      
    <View style={{flex: 1,justifyContent: 'center'}} >
    <Animated.View style={[animatedStyle]} />
        <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
          {data.map((i:any,_i)=>{
            return (
                <Pressable
                key={_i}
                style={{padding:10}}
                onPress={pressYears} onLayout={layoutYears}>
                  <Text>{i}</Text>
                </Pressable>
            )
          })}
         
          
          </View>
    </View>
    )
}

export default UsingWithTiming