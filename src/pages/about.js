import React from 'react';
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import {useIntl} from 'gatsby-plugin-intl'
const AboutPage = ()=> {
    const intl = useIntl();
    return <Layout navbarColored={true} idpage="about">
    <SEO title={intl.formatMessage({id: "titles.about"})} />
        <div className="container">
            <div className="abouterez">
                <div className="abouterez-intro">
                <div className="abouterez-image">
                    
                    </div>
                    <div className="abouterez-title">
                        <h1>{intl.formatMessage({id: "index.about"})} <span>{intl.formatMessage({id: "erez_eliahu"})}</span></h1>
                    </div>
                </div>
                <div className="abouterez-context" dangerouslySetInnerHTML={{__html: intl.formatMessage({id: "about.fulltext"})}}>

                </div>
            </div>
        </div>
    </Layout>
}
export default AboutPage;