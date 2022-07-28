import React from 'react';
import {StyleSheet} from 'react-native';

import Animated, {
    useSharedValue,
    interpolate,
    useAnimatedStyle,
  } from "react-native-reanimated";

  interface ImageProps {
    source:string,
    index:number,
    scrollX:Animated.SharedValue<number>,
    width:any
  }

 const BackGroundImage = ({source, index,scrollX,width}:ImageProps) =>{
    const rOpacity = useAnimatedStyle(() => {
        const opacity = interpolate(
          scrollX.value,
          [(index-1)* width, (index * width) ,(index+1)*width],
          [0, 1, 0]
        );
        return {
          opacity: opacity,
        };
      },[]);
    return (
        <>
        <Animated.Image
              key={index+1}
              source={{ uri: source }}
              style={[StyleSheet.absoluteFillObject, rOpacity ]}
              blurRadius={20}
            />
            </>
    )
  }

  export default BackGroundImage;