import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl'
import { TweenMax } from 'gsap';

const Navbar = ({ colored = false }) => {
  const intl = useIntl();
  const styles = (colored) ? { backgroundColor: '#f6f6f6', boxShadow: '0 1px 10px #d3d3d3' } : {};
  const menu = useRef(null);
  const [mobileMenu, setMenu] = useState(false);

  const handleMenuClick = () => {
    if (mobileMenu) {
      TweenMax.to(menu.current, 0.5, {
        height: '0',
        onStart: () => {

        },
        onComplete: () => {
          TweenMax.set(menu.current, { visibility: 'hidden' });
        }
      });
    } else {
      TweenMax.to(menu.current, 0.5, {
        height: '230px', onStart: () => {
          let navbar = document.getElementById("navbar");
          if (!navbar.classList.contains('colored')) {
            document.getElementById("navbar").classList.add("colored");
            TweenMax.to('.nav', 0.5, { backgroundColor: '#f6f6f6', boxShadow: '0 1px 10px #d3d3d3' });
          }
          TweenMax.set(menu.current, { visibility: 'visible' });
        }
      });
    }
    setMenu(!mobileMenu);
  }
   /* const changeLang = () => {
      if (typeof (Storage) !== "undefined") {
        localStorage.setItem("defaultLang", "en"); // change thiss
      }
    }
    const otherLanguage = <a className="lang_link" href={"http://ee-law.com/en/"} onClick={()=>changeLang()}><img src={"/img/en.png"} alt="country" /></a>;
    */
  
  const changeLang = () => {
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem("defaultLang", "he"); // change thiss
    }
  }
  const otherLanguage = <a className="lang_link" href="http://ee-law.com/" onClick={() => changeLang()}><img src={"/img/he.png"} alt="country" /></a>; // CHANGE ON BUILD// CHANGE ON BUILD// CHANGE ON BUILD// CHANGE ON BUILD// CHANGE ON BUILD
 
  return <><nav className={"nav " + ((colored) ? 'colored' : '')} id="navbar" style={styles}>
    <div className="nav-left">
      <div className="nav-left_logo">
        <Link to="/"><img src="/images/erezlogo.png" alt="logo" /></Link>
        <Link to="/"><div className="textlogo" style={{ display: 'inline-block' }}>
          <h1>{intl.formatMessage({ id: "erez_eliahu" })}</h1>
          <label>{intl.formatMessage({ id: "advocate_notary" })}</label>
        </div></Link>
      </div>

    </div>
    <div className="nav-right">
      <div className="columns is-hidden-touch">
        <div className="column">
          <Link to="/">{intl.formatMessage({ id: "nav.home" })}</Link>
        </div>
        <div className="column">
          <Link to="/about">{intl.formatMessage({ id: "nav.about" })}</Link>
        </div>
        <div className="column">
          <Link to="/expertise">{intl.formatMessage({ id: "nav.expertise" })}</Link>
        </div>
        <div className="column nav-right_phone">
          <a href="telto:+972544503432">+972 54 - 450 - 3432</a>
        </div>
        <div className="column language">
          {otherLanguage}
        </div>
      </div>
      <div className="nav-right_menu is-hidden-desktop">
        {otherLanguage}
        <div className="menu_icon_container" onClick={() => handleMenuClick()} >
          <MenuIcon />
        </div>

      </div>
    </div>

  </nav>
    <div ref={menu} className={"mobile-menu " + (mobileMenu ? 'active' : '')}>
      <ul className="mobile-menu_ul">
        <Link to="/" onClick={() => handleMenuClick()}><li className="selected">{intl.formatMessage({ id: "nav.home" })}</li></Link>
        <Link to="/about" onClick={() => handleMenuClick()}><li>{intl.formatMessage({ id: "nav.about" })}</li></Link>
        <Link to="/expertise" onClick={() => handleMenuClick()}><li>{intl.formatMessage({ id: "nav.expertise" })}</li></Link>
        <Link to="/#contact" onClick={() => handleMenuClick()}><li>{intl.formatMessage({ id: "nav.contact" })}</li></Link>
      </ul>
    </div>
  </>
}
export default Navbar;



const MenuIcon = () => {
  return <div className="menuicon">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16">
      <g id="svg_menuicon" transform="">
        <rect id="line1" width="22" height="2" rx="1" transform="" fill="#000" />
        <rect id="line2" width="22" height="2" rx="1" transform="translate(0 7)" fill="#000" />
        <rect id="line3" width="22" height="2" rx="1" transform="translate(0 14)" fill="#000" />
      </g>
    </svg>
  </div>

}