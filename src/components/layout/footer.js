import React from 'react'
import {Link} from 'gatsby'
const Footer = ()=> {
    return <><div className="container">
        <div className="footer-table">
            <div className="name"><div className="textlogo">
                <h1>Erez Eliahu</h1><label>Advocate & Notary</label>
                </div></div>
            <div className="info">
                <ul className="info-list">
                    <li>Ma'ale Hashikhrur 9</li>
                    <li>erez@ee-law.com</li>
                    <li>054 - 65333444</li>
                </ul>
            </div>
            <div className="links">
                <ul className="links-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Expertise</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="footer-copyright">
        <p>All rights reserved © Erez Eliahu 2020</p>
        <label>Designed by <a href="http://benlevi.me">BENLEVI</a></label>
    </div>
    </>
}
export default Footer