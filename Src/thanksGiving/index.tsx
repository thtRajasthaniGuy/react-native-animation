import React from "react";
import { View, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import ThreeDButton from "../3dButton";
import Firecrakers from "../halloween/firecrakers";
import Roosters from "./roosters";
import ThanksGivingLottie from "./thanksGiving";

const ThanksGiving = () => {
  const [showFireCrackers, setShowFireCrackers] = React.useState(false);
  const hideButton = useSharedValue(-10);
  const showAnimation = () => {
    setShowFireCrackers(true);
    hideButton.value = withSpring(500);
  };
  const hideButtonAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: hideButton.value }],
    };
  });
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: "60%",
          left: "20%",
        }}
      >
        {showFireCrackers ? <Firecrakers /> : null}
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: "40%",
          left: "0%",
        }}
      >
      {showFireCrackers ? <Roosters /> : null}
      </View>
      {showFireCrackers ? <ThanksGivingLottie /> : null}

      <View
        style={{
          position: "absolute",
          bottom: 80,
          justifyContent: "center",
          alignItems: "center",
          left: 100,
        }}
      >
        <Animated.View style={hideButtonAnimation}>
          <ThreeDButton onPress={() => showAnimation()} />
        </Animated.View>
      </View>
    </View>
  );
};

export default ThanksGiving;
