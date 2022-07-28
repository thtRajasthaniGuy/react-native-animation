import {StyleSheet,Dimensions} from 'react-native';

export const {height,width} = Dimensions.get('screen')

export const imageW = width * 0.7;
export const imageH = imageW * 1.54;

const styles  = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#2C3333"
    },
    image:{
        height:imageH,
        width:imageW,
        borderRadius:20
    }
})

export default styles;