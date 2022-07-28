import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Crousal from './Src/Crousal';
import FlashList from './Src/FlashList';
import HorizontalList from './Src/HorizontalList';
import VerticalList from './Src/VerticalList';

export default function App() {
  return (
  //  <Crousal/>
  //  <HorizontalList/>
  // <VerticalList/>
  <FlashList/>
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
