import React from "react";
import { View, Text, Pressable, Button, Dimensions } from "react-native";
import Animated, {
  Transition,
  Transitioning,
} from "react-native-reanimated";
const transitionFun = (
  <Transition.Together>
    <Transition.In  durationMs={2000} interpolation="easeIn" />
    <Transition.Change />
    <Transition.Out  durationMs={2000} interpolation="easeInOut" />
  </Transition.Together>
);
const Transitions = () => {
  const [btnIndex, setBtnIndex] = React.useState(0);

  const { width } = Dimensions.get("screen");
  const transitionRef = React.useRef(null);
  const AnimatedPresabble = Animated.createAnimatedComponent(Pressable);

  return (
    <View style={{ flexDirection: "row" }}>
      <Transitioning.View
        ref={transitionRef}
        style={{ flexDirection: "row", marginHorizontal: "5%", flex: 1 }}
        transition={transitionFun}
      >
        <View
          style={{
            width: width - 30,
            flexDirection: "row",
            backgroundColor: "lightgrey",
            height: 70,
          }}
        >
          <View
            style={{
              width: (width - 30) / 2,
              position: "absolute",
              backgroundColor: "red",
              height: 70,
              left: btnIndex == 0 ? 0 : null,
              right: btnIndex == 1 ? 0 : null,
            }}
          />
          <AnimatedPresabble
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            onPress={() => {
              setBtnIndex(0);
              transitionRef.current &&
                transitionRef.current.animateNextTransition();
            }}
          >
            <Text style={{}}>In</Text>
          </AnimatedPresabble>
          <AnimatedPresabble
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            onPress={() => {
              setBtnIndex(1);
              transitionRef.current &&
                transitionRef.current.animateNextTransition();
            }}
          >
            <Text style={{}}>In</Text>
          </AnimatedPresabble>
        </View>
      </Transitioning.View>
    </View>
  );
};

export default Transitions;
