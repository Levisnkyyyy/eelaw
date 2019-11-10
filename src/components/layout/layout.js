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
import "../../assets/main-rtl.scss"
import "../../assets/normalize.css"
import "../../assets/icofont.min.css"
import Footer from "./footer";

const Layout = ({ header, navbarColored = false, idpage, children }) => {
 // const intl = useIntl();

  useEffect(() => {
   /* let dir = 'ltr';
    if(intl.locale === 'he') {
      dir = 'rtl';
    }
    import("../../assets/main-"+dir+".scss");*/
 
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
