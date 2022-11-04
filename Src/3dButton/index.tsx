import React from 'react';
import {View,Pressable,Text,StyleSheet} from 'react-native';
import Animated,{useSharedValue,useAnimatedStyle,interpolate, withRepeat, withTiming} from 'react-native-reanimated'
import * as Haptics from 'expo-haptics';
const ThreeDButton = () =>{
    const AnimatedButton = Animated.createAnimatedComponent(Pressable);
    const imgAniamtedValue = useSharedValue(0);
    const btnAniamtedValue = useSharedValue(0);

    const viewAnimated = useAnimatedStyle(() => {
        const translateY = interpolate(imgAniamtedValue.value, [0, 1], [0, 10]);
        return {
          transform: [{translateY: translateY},{rotateX:"50deg"}],
        };
      });
      const threeDLook = useAnimatedStyle(()=>{
        // REVERSE INPUT RANGE VALUE REVERSE 3D EFFECT
        return {
            marginTop:interpolate(btnAniamtedValue.value,[1,0],[0,-1]),
            marginBottom:interpolate(btnAniamtedValue.value,[1,0],[0,7]),
            // paddingBottom:interpolate(btnAniamtedValue.value,[0,1],[10,0]),
            borderRadius:interpolate(btnAniamtedValue.value,[0,1],[3,5])
        }
      })
      React.useEffect(() => {
        // imgAniamtedValue.value = withRepeat(
        //   withTiming(1, {duration: 1000}),
        //   -1,
        //   true,
        // );
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      const clickIn  = () =>{
        btnAniamtedValue.value = withTiming(1,{duration:100})
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
      }
      const clickOut  = () =>{
        btnAniamtedValue.value = withTiming(0,{duration:50})
      }
    return(
        <Animated.View style={[viewAnimated,styles.container]}>
            <View style={styles.outer}>
                <AnimatedButton
                style={[styles.btnView,threeDLook]}
                onPressIn={()=>clickIn()}
                onPressOut={()=>clickOut()}
                >
                    <Text style={{color:"#283618"}}>
                        Click
                    </Text>
                </AnimatedButton>
                </View>
        </Animated.View>
    )
}

export default ThreeDButton

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
    },
    btnView:{
        height:50,
        width:150,
        borderRadius:5,
        borderWidth:1,
        borderColor:"#e76f51",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#f4a261"
    },
    outer: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'rgba(0,0,0,0.65)',
      },
})