import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import styles, { imageH, imageW, width, height } from "./style";
import BackGroundImage from './backgroundImage'
const data = [
  "https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200",
  "https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200",
  "https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200",
  "https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200",
  "https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200",
  "https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200",
  "https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200",
];
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
const Crousal = () => {
  const scrollX = useSharedValue(0);
  
  const renderCrousal = ({ item, index }: any) => {
    return (
      <Animated.View
        style={{
          width: width,
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          shadowColor:"#2C3333",
          shadowOpacity:0.5,
          shadowOffset:{
            width:0,
            height: 0
          },
          shadowRadius:20
        }}
      >
        <Animated.Image
          resizeMode={"cover"}
          source={{ uri: item }}
          style={styles.image}
        />
      </Animated.View>
    );
  };

  const scrollHandel = useAnimatedScrollHandler((event)=>{
        scrollX.value  = event.contentOffset.x
  })
  return (
    <View style={styles.container}>
      <View style={[StyleSheet.absoluteFillObject]}>
        {data.map((item: any, index: any) => {
          return (
            <BackGroundImage
                source={item}
                scrollX={scrollX}
                width={width}
                index={index}
            />
          );
        })}
      </View>
      <Animated.FlatList
        keyExtractor={(_, index) => index.toString()}
        onScroll={scrollHandel}
        scrollEventThrottle={16}
        pagingEnabled
        data={data}
        renderItem={renderCrousal}
        horizontal
      />
    </View>
  );
};

export default Crousal;
