import React from "react";
import { View, Text, Pressable, Button, Dimensions } from "react-native";
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const UseSharedTransition = () => {
  const [btnIndex, setBtnIndex] = React.useState(0);

  const { width } = Dimensions.get("screen");
  const AnimatedPresabble = Animated.createAnimatedComponent(Pressable);
  const transition = useSharedValue(0);

React.useEffect(()=>{
    transition.value = 0;
},[])

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(transition.value,{stiffness:100,damping:100}) }],
    };
  });

  return (
    <View style={{  justifyContent: "center", alignItems: "center" }}>
      
      <View
        style={{
          marginHorizontal: "10%",
          flexDirection: "row",
          backgroundColor: "lightgrey",
          height: 70,
          borderRadius:70/2
        }}
      >
        <Animated.View
          style={[
            {
              width: "45%",
              height: 70,
              backgroundColor: "blue",
              position: "absolute",
              borderRadius:70/2
            },
            animatedStyles,
          ]}
        />
        <AnimatedPresabble
          style={{ width: "45%", justifyContent: "center", alignItems: "center" }}
          onPress={() => {
            setBtnIndex(0);
            transition.value = withTiming(0,{duration:100});
          }}
        >
          <Text style={{color:btnIndex === 0?"#ffffff":"#000000"}}>In</Text>
        </AnimatedPresabble>
        <AnimatedPresabble
          style={{width: "45%",  justifyContent: "center", alignItems: "center" ,
         // backgroundColor:"red"
        }}
          onPress={() => {
            setBtnIndex(1);
            transition.value = withTiming((width+30)/3,{duration:100});
          }}
        >
          <Text style={{color:btnIndex === 1?"#ffffff":"#000000"}}>In</Text>
        </AnimatedPresabble>
      
      </View>
    </View>
  );
};

export default UseSharedTransition;
