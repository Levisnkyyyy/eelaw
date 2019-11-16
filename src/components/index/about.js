import React from 'react'
import keypoints from "../../json/keypoints"
import { useIntl } from "gatsby-plugin-intl"
const About = ()=> {
    const intl = useIntl();
    return <section className="about">
        <div className="container">
            <div className="about-leftside">
                <div className="about-image">
                    <img src="/images/erezpic.png" />
                </div>
                <div className="about-title">
                    {intl.formatMessage({id: "index.about"})} <span>{intl.formatMessage({id: "index.erez"})}</span>
                </div>
                <div className="about-paragraph">
                    <p>{intl.formatMessage({id: "index.about_text"})}</p>
                </div>
            </div>
            <div className="about-rightside">
                <div className="about-keynav">
                <i class="icofont-rounded-left"></i>
                <i class="icofont-rounded-right"></i>
                </div>
                <div className="about-keypoints">
                    {keypoints.map((x) =>
                        <Keypoint key={x.title} img={x.img} title={intl.formatMessage({id: x.title})} text={intl.formatMessage({id: x.text})} />    
                    )}
                </div>
            </div>
        </div>
    </section>
}
export default About


const Keypoint = ({img, title, text}) => {
    return  <div className="keypoint">
    <div className="keypoint-image">
         <img src={img} alt={title} />
    </div>
    <div className="keypoint-text">
    <h2>{title}</h2>
    <p>{text}</p>
    </div>
</div>;
}