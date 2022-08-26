import React from 'react';
import {View,Image,Dimensions} from 'react-native';
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
  } from 'react-native-reanimated';
  

  type Props ={
    image:any
  }
const FlotingImage = ({image}:Props) =>{
    const {width: WIDTH} = Dimensions.get('screen');
    const imgAniamtedValue = useSharedValue(0);
    const AnimatedImage = Animated.createAnimatedComponent(Image);
    const animatedImgStyle = useAnimatedStyle(() => {
      const rotate = interpolate(imgAniamtedValue.value, [0, 1], [-3, -2]);
      return {
        transform: [{rotate: `${rotate}deg`}],
      };
    });
  
    const viewAnimated = useAnimatedStyle(() => {
      const translateY = interpolate(imgAniamtedValue.value, [0, 1], [0, 10]);
      return {
        transform: [{translateY: translateY}],
      };
    });
    React.useEffect(() => {
        imgAniamtedValue.value = withRepeat(
          withTiming(1, {duration: 1000}),
          -1,
          true,
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return (
        <Animated.View
        style={[
          viewAnimated,
          {
            width: WIDTH,
            height: WIDTH,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <AnimatedImage
          source ={require("./image/naruto.png")}
          style={[animatedImgStyle, {width: 266, height: 279}]}
          resizeMode="contain"
        />
      </Animated.View>
      )
}

export default FlotingImage