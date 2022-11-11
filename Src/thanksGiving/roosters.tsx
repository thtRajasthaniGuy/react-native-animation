import React from 'react';
import Lottie from 'lottie-react-native';
import Animated,{useSharedValue,useAnimatedStyle, withSpring, withTiming,BounceIn} from 'react-native-reanimated'
export default function Roosters() {
    const translateY  = useSharedValue(0)
    const translateX  = useSharedValue(75)
    const run  = useAnimatedStyle(()=>{
        return{
            transform:[{translateY:translateY.value},{translateX:translateX.value}]
        }
    })
    React.useEffect(()=>{
        // translateY.value = withSpring(250)
        translateX.value = withSpring(70)
    },[])
  return (
    <Animated.View
    entering={BounceIn.duration(1500)}
    style={{justifyContent:"center",alignItems:"center",left:'35%'}}
    >
    <Lottie source={require('./assets/38233-thanksgiving-turkey.json')} autoPlay loop style={{height:200,width:100}}/>
    </Animated.View>
  );
}