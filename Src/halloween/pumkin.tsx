import React from 'react';
import Lottie from 'lottie-react-native';
import Animated,{useSharedValue,useAnimatedStyle, withSpring, withTiming, useDerivedValue, Easing} from 'react-native-reanimated'
export default function Pumpkin() {
    const translateX  = useSharedValue(0)
    const rotateZ = useDerivedValue(() => {
        return withTiming(45, {
          duration: 100,
          easing: Easing.linear,
        });
      });
    React.useEffect(()=>{
        translateX.value = withTiming(100,{duration:3000})
    },[])
    const run  = useAnimatedStyle(()=>{
        return{
            transform:[{translateX:translateX.value}]
        }
    })
    
  return (
    <Animated.View
    style={run}
    >
    <Lottie source={require('./assets/89007-pumpkin.json')} autoPlay loop style={{height:100,width:100}}/>
    </Animated.View>
  );
}