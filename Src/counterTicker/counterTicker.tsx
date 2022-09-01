import React from 'react';
import {StyleSheet,View} from 'react-native';
import {Color} from '@shopify/react-native-skia';
import Counter from './counter';

type Props = {
    value?:number,
    color?:Color,
    maxNumber?:number,
    shouldStagger?: boolean,
    fontSize?:number,
}

const CounterTicker = ({value,color,maxNumber,shouldStagger,fontSize}:Props) =>{
    const digits = String(value).split('').map(Number);
    const fixedDigits = [
        ...Array.from(
            {length:Math.ceil(Math.log10(maxNumber ?? 1))- digits.length},
            () => undefined,
            ),
            ...digits
    ]

    console.log("lll",digits,fixedDigits,value);
    

    return (
        <View style={{flexDirection:'row',alignItems: 'center'}}>
                {
                    fixedDigits.map((digit,index)=>{
                        
                        
                        return(
                            <Counter
                            fontSize={fontSize}
                            value={digit}
                            key={index}
                            color={color}
                            index={true ? index: undefined}
                            />
                        )
                    })
                }
        </View>
    )
}

export default CounterTicker