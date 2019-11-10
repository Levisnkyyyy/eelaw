import React from 'react';
import Layout from '../../components/layout/layout'
import SEO from '../../components/seo'
import services from '../../json/services'
import {Link} from 'gatsby'
import {useIntl} from 'gatsby-plugin-intl'
const Template = ({expertise, id})=> {
    const intl = useIntl();
    return  <Layout navbarColored={true} idpage={"expertise-"+expertise}>
    <SEO title={intl.formatMessage({id: services[id].title})} />
    <div className={"container expertiseview " + expertise}>
        <div className="backbtn"> <Link to="/expertise">Back</Link></div>
        <div className="info">
            <div className="info-title">
                <img src={"../../img/"+ services[id].image.replace('png', 'svg')} />
                <h2>{intl.formatMessage({id: services[id].title})}</h2>
            </div>
        </div>
        <div className="context">
            <p style={{marginTop: '15px'}} dangerouslySetInnerHTML={{__html: intl.formatMessage({id: services[id].content})}}>
            
           </p>
        </div>
        <div className="bigimage">
            <img src={"/images/"+services[id].image} />
        </div>
    </div>
    </Layout>
}

export default Template;