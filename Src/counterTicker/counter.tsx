import React from 'react';
import {
    Canvas,
    Color,
    Glyphs,
    runSpring,
    runTiming,
    useFont,
    useValue,
    vec,
} from '@shopify/react-native-skia';

type Props ={
    value?:number,
    color?:Color,
    index?:number,
    fontSize?:number
}

const DIGITS = "0123456789";

const Counter  = ({value,color,index,fontSize}:Props) =>{
  console.log("opopo",value,color,index);
  
  const font = useFont(require("./Roboto-Black.ttf"),fontSize);
    const y  = useValue(0);
    const y2 = useValue(0);

    React.useEffect(() => {
        const normalizedValue = value !== undefined ? value + 1 : 0
        if (index !== undefined) {
          setTimeout(() => {
            runSpring(y2, -normalizedValue * fontSize - fontSize / 6, {
              mass: 1,
              stiffness: 200,
              damping: 17,
            })
          }, index * 50)
        } else {
          runTiming(y, -normalizedValue * fontSize - fontSize / 6, { duration: 350 })
        }
      }, [value, index,fontSize, y, y2])

      if (!font) {
        return null
      }
      const glyphs = font.getGlyphIDs(DIGITS).map((id, i) => ({ id, pos: vec(0, (i + 1) * fontSize) }))
      const [glyphWidth] = font.getGlyphWidths([glyphs[1].id])

      return (
        <Canvas style={{width: glyphWidth, height:fontSize}}>
          <Glyphs font={font} glyphs={glyphs} x={0} y={y2} color={color}/>
        </Canvas>
      )
}

export default Counter;