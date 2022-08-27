import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
type Props = {
  index: number;
};
export default function ring({ index }: Props) {
  const opacityValue = useSharedValue(0.7);
  const scaleValue = useSharedValue(1);
  const ringAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value,
      transform: [{ scale: scaleValue.value }],
    };
  });

  React.useEffect(() => {
    opacityValue.value = withDelay(
      index * 400,
      withRepeat(
        withTiming(0, { duration: 2000, easing: Easing.out(Easing.ease) }),
        -1,
        false
      )
    );
    scaleValue.value = withDelay(
      index * 400,
      withRepeat(withTiming(4, { duration: 2000 }), -1, false)
    );
  }, [opacityValue, scaleValue, index]);
  return (
    
      <Animated.View
        key={index}
        style={[
          ringAnimatedStyle,
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: "#000",
            width: 100,
            height: 100,
            borderRadius: 100 ,
            position: "absolute",
            borderWidth: 1,
          },
        ]}
      />
  );
}
