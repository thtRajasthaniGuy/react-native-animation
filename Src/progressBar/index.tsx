import React from 'react';
import {View} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated';



type Props = {
  totalTime: number;
  progressTime: number;
  height: number;
};
const ProgressBar = ({totalTime, progressTime, height}: Props) => {
  const progressAnimatedValue = useSharedValue(-1000);
  const reactive = useSharedValue(-1000);
  const [width, setWidth] = React.useState(0);
//   const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    progressAnimatedValue.value = reactive.value
  }, []);

  React.useEffect(() => {
    reactive.value = withSpring( -width + (width * progressTime) / totalTime,{stiffness:75});
  }, [progressTime, width]);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((index + 1) % (10 + 1));
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [index]);
 
  const progressBarAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: reactive.value}],
    };
  },[width,progressTime,totalTime]);
 
  return (
  
      <View
      onLayout={e => {
        const newWidth = e.nativeEvent.layout.width;
        setWidth(newWidth);
      }}
        style={{
          height,
          backgroundColor: "#043b5c",
          borderRadius: height,
          overflow: 'hidden',
        }}>
        <Animated.View
          style={[
            progressBarAnimatedStyle,
            {
              height,
              width: '100%',
              borderRadius: height,
              backgroundColor: "#cf2f74",
              position: 'absolute',
              left: 0,
              top: 0,
            },
          ]}>
            
          </Animated.View>
      </View>
   
  );
};

export default ProgressBar;

