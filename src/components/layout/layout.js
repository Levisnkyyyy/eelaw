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


import "../../assets/icofont.min.css"
import Footer from "./footer";

import "../../assets/main-ltr.scss"// CHANGE ON BUILD


/*
CHANGE GATSBY-CONFIG:
Intl language, default.
Path Prefix

CHANGE LAYOUT:
window location replace
css stylesheet rtl

CHANGE NAVBAR: 
otherlanguage const
changeLang

ON BUILD:
gatsby build --prefix-paths FOR ENGLISH V

*/
const Layout = ({ header, navbarColored = false, idpage, children }) => {

  const getLocation = () => {
    if (typeof window !== `undefined`) {


      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then((data) => {
          if (data.country_name === 'Israel') { // CHANGE ON BUILD
            if (typeof (Storage) !== "undefined") {
              if (localStorage.getItem("defaultLang") === null || localStorage.getItem("defaultLang") !== 'en') {
                localStorage.setItem("defaultLang", "he");
                if (typeof window !== `undefined`) window.location.replace("http://ee-law.com/");
              }
            }

          }
        })
        .catch(console.log);
    }
  }
              /* FOR ENGLISH SITE:
          if (data.country_name === 'Israel') { // CHANGE ON BUILD
            if (typeof (Storage) !== "undefined") {
              if (localStorage.getItem("defaultLang") === null || localStorage.getItem("defaultLang") !== 'en') {
                localStorage.setItem("defaultLang", "he");
                if (typeof window !== `undefined`) window.location.replace("http://ee-law.com/");
              }
            }

          }

              FOR HEBREW:
          if (data.country_name !== 'Israel') { // CHANGE ON BUILD
            if (typeof (Storage) !== "undefined") {
              if (localStorage.getItem("defaultLang") === null || localStorage.getItem("defaultLang") !== 'he') {
                localStorage.setItem("defaultLang", "en");
                if (typeof window !== `undefined`) window.location.replace("http://ee-law.com/en/");
              }
            }

          }

            */
  useEffect(() => {

    getLocation();
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
