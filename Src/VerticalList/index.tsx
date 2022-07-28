import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles, { width, ITEM_SIZE, ITEM_SPACING, height } from "./styles";
import Animated, { useSharedValue,useAnimatedScrollHandler } from "react-native-reanimated";
import List from "./List";
const VerticalList = () => {
  const timers = [...Array(13).keys()].map((i) => (i === 0 ? 1 : i * 5));
  const scrollX = useSharedValue(0);
  const [currentIndex,setIndex] = React.useState(0);
  const renderNumber = ({ item, index }: any) => {
    return (
      <List
      item={item}
      index={index}
      scrollX={scrollX}
      ITEMSIZE={ITEM_SIZE}
      currentIndex={currentIndex}
      />
    );
  };

  React.useEffect(()=>{
    console.log("scrollx",scrollX);
    
  },[scrollX])

  const scrollHandel = useAnimatedScrollHandler((event)=>{
    scrollX.value  = event.contentOffset.x
    
})

  return (
    <View style={styles.container}>
    
      <Animated.FlatList
        data={timers}
        keyExtractor={(item) => item.toString()}
        renderItem={renderNumber}
        horizontal={false}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: ITEM_SPACING,
        }}
        onMomentumScrollEnd={(en)=>{
                const index= Math.round(en.nativeEvent.contentOffset.x / ITEM_SIZE);
                console.log("index",index,timers[index]) ;
                setIndex(index);
                
        }}
        style={{ flexGrow: 0 }}
        snapToInterval={ITEM_SIZE}
        decelerationRate="fast"
         onScroll={scrollHandel}
      />
      
    </View>
  );
};

export default VerticalList;
