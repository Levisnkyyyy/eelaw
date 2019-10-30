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

import Footer from "./footer"
import ParallaxMagic from '../scroll'
const Layout = ({ header, navbarColored = false, idpage, children }) => {
  useEffect(() => {
    /* window.addEventListener('scroll', (event) => {
       TweenLite.to('#layout',1, {
         y: -window.pageYOffset
       });
     });*/
    //ParallaxMagic("#layout");
    //var controller = new ScrollMagic.Controller();
    require("../../assets/main-rtl.scss");
  }, []);

  return (

    <div id="layout">
      <Header page_header={header} navbarColored={navbarColored} />
      <main id={idpage}>{children}</main>
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
