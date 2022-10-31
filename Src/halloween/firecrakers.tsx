import React from 'react';
import Lottie from 'lottie-react-native';
import Animated,{useSharedValue,useAnimatedStyle, withSpring, withTiming} from 'react-native-reanimated'
export default function Firecrakers() {
    const translateY  = useSharedValue(-1000)
    const run  = useAnimatedStyle(()=>{
        return{
            transform:[{translateY:translateY.value}]
        }
    })
    React.useEffect(()=>{
        translateY.value = withTiming(-50,{duration:5000})
    },[])
  return (
    <Animated.View
    style={run}
    >
    <Lottie source={require('./assets/75407-firecrackers-loading-screen.json')} autoPlay loop style={{height:200,width:100}}/>
    </Animated.View>
  );
}