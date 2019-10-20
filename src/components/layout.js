/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import "typeface-poppins"
import Header from "./header"
import "./normalize.css"
import "./main.scss"
import ParallaxMagic from './scroll'
const Layout = ({ children }) => {
  useEffect(()=> {
   /* window.addEventListener('scroll', (event) => {
      TweenLite.to('#layout',1, {
        y: -window.pageYOffset
      });
    });*/
    ParallaxMagic("#layout");
    //var controller = new ScrollMagic.Controller();
  },[]);

  return (

      <div id="layout">
        <Header />
          <main>{children}</main>
          <footer>

          </footer>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
