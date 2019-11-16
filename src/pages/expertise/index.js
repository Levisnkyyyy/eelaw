import React from 'react';
import Layout from '../../components/layout/layout'
import SEO from '../../components/seo'
import services from "../../json/services"
import {Link} from 'gatsby'
import {useIntl} from 'gatsby-plugin-intl'
const ExpertisePage = ()=> {
    const intl = useIntl();
    return  <Layout navbarColored={true} idpage="expertise">
    <SEO title={intl.formatMessage({id: "titles.expertise"})} />
        <div className="container">
            <div className="infoblock">
                <h1>{intl.formatMessage({id: "index.practice"})}</h1>
                <div className="infoblock-p">
                   <p></p>
                </div>
            </div>
            <div className="expertise-container">
                <div className="expertises">
                    {services.map(x=> 
                        <Expertise ex={x} />    
                    )}
                </div>
            </div>
        </div>
    </Layout>
}
export default ExpertisePage


const Expertise = ({ex}) => {
    const intl = useIntl();
    return                     <div className="expertise">
    <div className="expertise-image">
      <img src={"../../img/"+ex.image.replace('png', 'svg')} alt={intl.formatMessage({id: ex.title})} />
    </div>
    <div className="expertise-title">
        <h2>{intl.formatMessage({id: ex.title})}</h2>
    </div>
    <div className="expertise-paragraph">
        <p>
        {intl.formatMessage({id: ex.preview})}
        </p>
    </div>
    <div className="expertise-readmore">
        <Link to={"/expertise/" + ex.url}>{intl.formatMessage({id: 'readmore'})}</Link>
    </div>
</div>
}