import {Dimensions,StyleSheet} from 'react-native';

export const {width,height}   = Dimensions.get("screen");
export const ITEM_SIZE = width /5;
export const ITEM_SPACING = ( width - ITEM_SIZE ) / 2;

 const styles = StyleSheet.create({
container:{
    flex:1,
    // backgroundColor:"#000",
    justifyContent:"center"
},
text:{
   fontSize:ITEM_SIZE * 0.8,
   fontWeight:"800",
   color:"#fff"
}
})

export default styles