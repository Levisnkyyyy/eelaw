import React from 'react'
import keypoints from "../../json/keypoints"
const About = ()=> {
    return <section className="about">
        <div className="container">
            <div className="about-leftside">
                <div className="about-image">
                    
                </div>
                <div className="about-title">
                    ABOUT <span>EREZ</span>
                </div>
                <div className="about-paragraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                </div>
            </div>
            <div className="about-rightside">
                <div className="about-keynav">
                <i class="icofont-rounded-left"></i>
                <i class="icofont-rounded-right"></i>
                </div>
                <div className="about-keypoints">
                    {keypoints.map((x) =>
                        <Keypoint img={x.img} title={x.title} text={x.text} />    
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
         <img src={img} />
    </div>
    <div className="keypoint-text">
    <h2>{title}</h2>
    <p>{text}</p>
    </div>
</div>;
}