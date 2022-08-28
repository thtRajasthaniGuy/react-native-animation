import React,{useCallback} from 'react';
import {View,Pressable, LayoutChangeEvent,Text} from 'react-native';
import Animated,{useSharedValue,useAnimatedStyle,withTiming} from 'react-native-reanimated'
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
    
    const sharedDays = useSharedValue<{width: number, x: number}>({width: 0, x: 0})
    
    const sharedMonths = useSharedValue<{width: number, x: number}>({width: 0, x: 0})
    
    const sharedAllPhotos = useSharedValue<{width: number, x: number}>({width: 0, x: 0})
    
    const layoutYears = useCallback((event: LayoutChangeEvent) => {
      const {width, x} = event.nativeEvent.layout
      sharedYears.value = {width, x}
    },[sharedYears])
    
    const layoutDays = useCallback((event: LayoutChangeEvent) => {
      const {width, x} = event.nativeEvent.layout
      sharedDays.value = {width, x}
    },[sharedDays])
    
    const layoutMonths = useCallback((event: LayoutChangeEvent) => {
      const {width, x} = event.nativeEvent.layout
      sharedMonths.value = {width, x}
    },[sharedMonths])
    
    const layoutAllPhotos = useCallback((event: LayoutChangeEvent) => {
      const {width, x} = event.nativeEvent.layout
      sharedAllPhotos.value = {width, x}
    },[sharedAllPhotos])
    
React.useEffect(()=>{
    // layoutYears()
    translateX.value = withTiming(20)
    sharedWidth.value = withTiming(60)
 },[sharedYears, translateX, sharedWidth])

    const pressYears = useCallback(() => {
    "worklet"
      translateX.value = withTiming(sharedYears.value.x)
      sharedWidth.value = withTiming(sharedYears.value.width)
    },[sharedYears, translateX, sharedWidth])

   
    
    const pressMonths = useCallback(() => {
      "worklet"
      translateX.value = withTiming(sharedMonths.value.x)
      sharedWidth.value = withTiming(sharedMonths.value.width)
    },[sharedMonths, translateX, sharedWidth])
    
    const pressDays = useCallback(() => {
      "worklet"
      translateX.value = withTiming(sharedDays.value.x)
      sharedWidth.value = withTiming(sharedDays.value.width)
    },[sharedDays, translateX, sharedWidth])
    
    const pressAllPhotos = useCallback(() => {
      "worklet"
      translateX.value = withTiming(sharedAllPhotos.value.x)
      sharedWidth.value = withTiming(sharedAllPhotos.value.width)
    },[sharedYears, translateX, sharedWidth])
    
    
    return (
      
    <View style={{flex: 1,justifyContent: 'center'}} >
    <Animated.View style={[animatedStyle]} />
        <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
          <Pressable
          style={{padding:10}}
          onPress={pressYears} onLayout={layoutYears}>
            <Text>Years</Text>
          </Pressable>
          <Pressable
           style={{padding:10}}
          onPress={pressDays} onLayout={layoutDays}>
            <Text>Days</Text>
          </Pressable>
          <Pressable 
           style={{padding:10}}
          onPress={pressMonths} onLayout={layoutMonths}>
            <Text>Months</Text>
          </Pressable>
          <Pressable
           style={{padding:10}}
          onPress={pressAllPhotos} onLayout={layoutAllPhotos}>
            <Text>All Photos</Text>
          </Pressable>
          </View>
    </View>
    )
}

export default UsingWithTiming