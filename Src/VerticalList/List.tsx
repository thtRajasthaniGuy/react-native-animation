import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
    useSharedValue,
    interpolate,
    useAnimatedStyle,
  } from "react-native-reanimated";
  import styles from './styles'
 interface ListProps {
ITEMSIZE: number;
index: number;
scrollX:Animated.SharedValue<number>,
item:number,
currentIndex:number
 } 

 const List  = ({ITEMSIZE, index, scrollX,item,currentIndex}:ListProps) =>{
    const rOpacity = useAnimatedStyle(() => {
        const opacity = interpolate(
          scrollX.value,
          [(index-1)* ITEMSIZE, (index * ITEMSIZE) ,(index+1)*ITEMSIZE],
          [.4, 1, .4]
        );
        const scale = interpolate(
            scrollX.value,
            [(index-1)* ITEMSIZE, (index * ITEMSIZE) ,(index+1)*ITEMSIZE],
            [.7, 1, .7]
          );
        return {
          opacity: opacity,
          transform:[{
            scale
          }]
        };
      },[]);
return (
    <Animated.View
        style={{
          width: ITEMSIZE,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:currentIndex === index ?"#3F4E4F":"#A27B5C"
        }}
      >
        <Animated.Text style={[styles.text,rOpacity]}>{item}</Animated.Text>
      </Animated.View>
)
 }

 export default List