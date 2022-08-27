import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Crousal from './Src/Crousal';
import FlashList from './Src/FlashList';
import HorizontalList from './Src/HorizontalList';
import VerticalList from './Src/VerticalList';
import ProgressBar from './Src/progressBar';
import FlotingImage from './Src/flotingImage';
import Transition from './Src/Transition/useshared';
import tokyoghoul from './Src/flotingImage/image/naruto.png';
import PhoneRing from './Src/phoneRing/reanimated/reanimated'
export default function App() {
  return (
  //  <Crousal/>
  //  <HorizontalList/>
  // <VerticalList/>
    // <View style={{flex:1,justifyContent: 'center'}}>
    // <View style={{marginHorizontal:'10%'}}>
    // <ProgressBar totalTime={30} progressTime={30} height={10}/>
    // </View>
    // <FlotingImage image={tokyoghoul}/>
    // <Transition/>
    // </View>
  // <FlashList/>
<PhoneRing/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
