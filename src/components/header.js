
import React from "react"
import {Link} from 'gatsby';
const Header = () => {
  return <header>
    <nav className="nav">
      <div className="nav-left">
        <div className="nav-left_logo">
          <img src="images/erezlogo.png" />
        </div>

      </div>
      <div className="nav-right">
          <div className="columns is-hidden-touch">
            <div className="column">
              <Link to="/">Home</Link>
            </div>
            <div className="column">
              <Link to="/">About</Link>
            </div>
            <div className="column before">
              <Link to="/">Expertise</Link>
            </div>
            <div className="column nav-right_phone">
              <Link to="/">+972 54 - 543 - 5444</Link>
            </div>
          </div>
          <div className="nav-right_menu is-hidden-desktop">
            MENU
          </div>
          
        </div>
    </nav>
  </header>;
}


export default Header
