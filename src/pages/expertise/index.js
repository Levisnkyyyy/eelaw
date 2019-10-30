import React from 'react';
import Layout from '../../components/layout/layout'
import SEO from '../../components/seo'
import services from "../../json/services"
import {Link} from 'gatsby'
const ExpertisePage = ()=> {
    return  <Layout navbarColored={true} idpage="expertise">
    <SEO title="Expertise" />
        <div className="container">
            <div className="infoblock">
                <h1>Expertise</h1>
                <div className="infoblock-p">
                    <p>Small paragraph about the services we give etc....</p>
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
    return                     <div className="expertise">
    <div className="expertise-image">
      <img src={"./img/"+ex.image.replace('png', 'svg')} />
    </div>
    <div className="expertise-title">
        <h2>{ex.title}</h2>
    </div>
    <div className="expertise-paragraph">
        <p>
            {ex.content.substring(0,150)}
        </p>
    </div>
    <div className="expertise-readmore">
        <Link to="/">Read more</Link>
    </div>
</div>
}