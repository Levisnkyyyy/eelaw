import React from 'react'
import {Link} from 'gatsby'
import {useIntl} from 'gatsby-plugin-intl';
const Footer = ()=> {
    const intl = useIntl();
    return <><div className="container">
        <div className="footer-table">
            <div className="name"><div className="textlogo">
                <h1>{intl.formatMessage({id: 'erez_eliahu'})}</h1><label>{intl.formatMessage({id: 'advocate_notary'})}</label>
                </div></div>
            <div className="info">
                <ul className="info-list">
                    <li><div className="icon"><i class="icofont-location-pin"></i></div> {intl.formatMessage({id: 'footer.address'})}</li>
                    <li><div className="icon"><i class="icofont-ui-email"></i></div> {intl.formatMessage({id: 'footer.email'})}</li>
                    <li><div className="icon"><i class="icofont-phone"></i></div> {intl.formatMessage({id: 'footer.phone'})}</li>
                </ul>
            </div>
            <div className="links">
                <ul className="links-list">
                    <li><Link to="/">{intl.formatMessage({id: 'nav.home'})}</Link></li>
                    <li><Link to="/">{intl.formatMessage({id: 'nav.about'})}</Link></li>
                    <li><Link to="/">{intl.formatMessage({id: 'nav.expertise'})}</Link></li>
                    <li><Link to="/">{intl.formatMessage({id: 'nav.contact'})}</Link></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="footer-copyright">
        <p>{intl.formatMessage({id: 'footer.copyright'})}</p>
        <label>Designed by <a href="http://benlevi.me">BENLEVI</a></label>
    </div>
    </>
}
export default Footer