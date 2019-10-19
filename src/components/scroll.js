import React, {useEffect, useRef} from 'react';
import ScrollMagic from 'scrollmagic';
import addIndicators from '../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

const ParallaxMagic = ({servRef, children})=> {
   // const elm = useRef(null);
    useEffect(()=> {
       // if(elm !== null) {
          //  if(servRef !== undefined) {
                (function() {
                    alert(servRef.scrollTop);
                })
           // }
       // }
            
    },[]);
    return [children];
   
}
export default ParallaxMagic;