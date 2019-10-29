
import React, {useEffect} from "react"

import {TweenMax,TimelineMax, Linear, Power2} from 'gsap';
import {useMediaQuery} from 'react-responsive'; // NOT WORKING ON BUILD VERSION
import {touch_query} from '../utilities/responsive';
import ScrollMagic from 'ScrollMagic';
import Navbar from "../components/layout/navbar";
/* FOLLOWING LINE TO BE REMOVED FROM BUILD */
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
//
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";


const Header = ({page_header}) => {
  const isTouch = useMediaQuery({query: touch_query});
  useEffect(()=> {
    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
    //TweenMax.to('.left_square', 2, {rotation: 0.01, ease: Power2.easeOut});
    //TweenMax.to('.right_square', 2, {rotation: 0.01, ease: Power2.easeOut, delay: 0.6});
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: '.main',
      triggerHook: 0,
      offset: 10
    })
    .on('enter', (e)=> {
        TweenMax.to('.nav', 0.5, {backgroundColor: '#f6f6f6', boxShadow: '0 1px 10px #d3d3d3'});
    })
    .on('leave', ()=> {
      TweenMax.to('.nav', 0.2, {backgroundColor: 'rgba(255,255,255,0)', boxShadow: '0'});
    })
    .addIndicators()
    .addTo(controller);
    if(!isTouch) {
      TweenMax.to('#index_header', 50, {backgroundPosition: '30vw 0', ease: Linear.easeNone });
    }
  },[]);
  return <header>
    <Navbar />
    {page_header}
  </header>;
}


export default Header
