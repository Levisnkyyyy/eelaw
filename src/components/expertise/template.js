import React from 'react';
import Layout from '../../components/layout/layout'
import SEO from '../../components/seo'
import services from '../../json/services'
import {Link} from 'gatsby'
const Template = ({expertise, title, id})=> {
    return  <Layout navbarColored={true} idpage={"expertise"+expertise}>
    <SEO title={title} />
    <div className={"container expertiseview " + expertise}>
        <div className="backbtn"> <Link to="/expertise">Back</Link></div>
        <div className="info">
            <div className="info-title">
                <img src={"../../img/"+ services[id].image.replace('png', 'svg')} />
                <h2>{title}</h2>
            </div>
        </div>
        <div className="context">
            <p>
                <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong>
            </p>
            <p style={{marginTop: '15px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div className="bigimage">
            <img src={"/images/"+services[id].image} />
        </div>
    </div>
    </Layout>
}

export default Template;