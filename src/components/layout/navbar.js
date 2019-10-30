import React from 'react';
import {Link} from 'gatsby';

const Navbar = ({colored = false})=> {
    const styles = colored ? {backgroundColor: '#f6f6f6', boxShadow: '0 1px 10px #d3d3d3'} : {};
    return <nav className="nav" style={styles}>
    <div className="nav-left">
      <div className="nav-left_logo">
        <Link to="/"><img src="/images/erezlogo.png" alt="logo" /></Link>
      </div>

    </div>
    <div className="nav-right">
        <div className="columns is-hidden-touch">
          <div className="column">
            <Link to="/">Home</Link>
          </div>
          <div className="column">
            <Link to="/about">About</Link>
          </div>
          <div className="column before">
            <Link to="/expertise">Expertise</Link>
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
}
export default Navbar;