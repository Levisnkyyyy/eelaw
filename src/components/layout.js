/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "typeface-poppins"
import Header from "./header"
import "./normalize.css"
import "./main.scss"
import {TweenLite} from 'gsap';

const Layout = ({ children }) => {
  useEffect(()=> {
   /* window.addEventListener('scroll', (event) => {
      TweenLite.to('#layout',1, {
        y: -window.pageYOffset
      });
    });*/
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
