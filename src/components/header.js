
import React, {useEffect} from "react"

import Navbar from "../components/layout/navbar";



const Header = ({page_header, navbarColored = false}) => {

  useEffect(()=> {

    //TweenMax.to('.left_square', 2, {rotation: 0.01, ease: Power2.easeOut});
    //TweenMax.to('.right_square', 2, {rotation: 0.01, ease: Power2.easeOut, delay: 0.6});
  /*  if(navbarColored === false) {

    } 
    return ()=> {
      controller.destroy(true);
      controller = null;
    }*/
  },[]);
  return <header>
    <Navbar colored={navbarColored} />
    {page_header}
  </header>;
}


export default Header
