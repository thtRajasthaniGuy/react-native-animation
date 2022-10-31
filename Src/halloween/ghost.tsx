import React from 'react';
import Lottie from 'lottie-react-native';
import Animated,{useSharedValue,useAnimatedStyle, withSpring, withTiming} from 'react-native-reanimated'
export default function Ghost() {
    const translateX  = useSharedValue(0)
    const run  = useAnimatedStyle(()=>{
        return{
            transform:[{translateX:translateX.value}]
        }
    })
    React.useEffect(()=>{
        translateX.value = withTiming(-90,{duration:3000})
    },[])
  return (
    <Animated.View
    style={run}
    >
    <Lottie source={require('./assets/83093-scary-ghost.json')} autoPlay loop style={{height:130,width:130}}/>
    </Animated.View>
  );
}