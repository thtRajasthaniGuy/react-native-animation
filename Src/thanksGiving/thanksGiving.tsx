import React from 'react';
import Lottie from 'lottie-react-native';
import Animated,{useSharedValue,useAnimatedStyle, withSpring, withTiming} from 'react-native-reanimated'
export default function ThanksGivingLottie() {
    const translateY  = useSharedValue(0)
    const translateX  = useSharedValue(75)
    const run  = useAnimatedStyle(()=>{
        return{
            transform:[{translateY:translateY.value},{translateX:translateX.value}]
        }
    })
    React.useEffect(()=>{
        translateY.value = withSpring(500)
        translateX.value = withSpring(70)
    },[])
  return (
    <Animated.View
    style={run}
    >
    <Lottie source={require('./assets/38243-happy-thanksgiving.json')} autoPlay loop style={{height:200,width:100}}/>
    </Animated.View>
  );
}