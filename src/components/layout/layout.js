/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect,createContext, useContext } from "react"
import PropTypes from "prop-types"
import "typeface-poppins"
import Header from "../header"
import "../../assets/normalize.css"


import "../../assets/icofont.min.css"
import Footer from "./footer";

import "../../assets/main-ltr.scss"// CHANGE ON BUILD

export const currentLang = React.createContext("en");
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
gatsby build --prefix-paths 
FOR ENGLISH V

*/
const Layout = ({ header, navbarColored = false, idpage, children }) => {
  const lang = useContext(currentLang);
  const getLocation = () => {
    if (typeof window !== `undefined`) {
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then((data) => {
          
          if (data.country_name === 'Israel' && lang === "en") { // CHANGE ON BUILD
            if (typeof (Storage) !== "undefined") {
              if (localStorage.getItem("defaultLang") === null || localStorage.getItem("defaultLang") !== 'en') {
                localStorage.setItem("defaultLang", "he");
                if (typeof window !== `undefined`) window.location.replace("http://ee-law.com/");
              }
            }
          }
          if (data.country_name !== 'Israel' && lang === "he") { // CHANGE ON BUILD
            if (typeof (Storage) !== "undefined") {
              if (localStorage.getItem("defaultLang") === null || localStorage.getItem("defaultLang") !== 'he') {
                localStorage.setItem("defaultLang", "en");
                if (typeof window !== `undefined`) window.location.replace("http://ee-law.com/en/");
              }
            }
          }
        })
        .catch(console.log);
    }
  }
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
