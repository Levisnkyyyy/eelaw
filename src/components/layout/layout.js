/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import "typeface-poppins"
import Header from "../header"
import "../../assets/normalize.css"
import "../../assets/main.scss"
import Footer from "./footer"
import ParallaxMagic from '../scroll'
const Layout = ({ header, children }) => {
  useEffect(() => {
    /* window.addEventListener('scroll', (event) => {
       TweenLite.to('#layout',1, {
         y: -window.pageYOffset
       });
     });*/
    //ParallaxMagic("#layout");
    //var controller = new ScrollMagic.Controller();
  }, []);

  return (

    <div id="layout">
      <Header page_header={header} />
      <main>{children}</main>
      <footer>
      <Footer />
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
