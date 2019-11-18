import React, { useEffect } from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import About from "../components/index/about";
import Services from '../components/index/services'
import BlogSlider from "../components/index/blogslider"
import Contact from "../components/index/contact"
import {useMediaQuery} from 'react-responsive'; // NOT WORKING ON BUILD VERSION
import {touch_query} from '../utilities/responsive';
import {TweenMax,TimelineMax, Linear} from 'gsap';
import ScrollMagic from 'ScrollMagic';
import { useIntl } from "gatsby-plugin-intl"
/* FOLLOWING LINE TO BE REMOVED FROM BUILD */
//import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
//
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
const HeaderComp = ()=> {
  const intl = useIntl();
  const isTouch = useMediaQuery({query: touch_query});
  useEffect(()=> {
    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: '.main',
      triggerHook: 0,
      offset: 10
    })
    .on('enter', (e)=> {
        TweenMax.to('.nav', 0.5, {backgroundColor: '#f6f6f6', boxShadow: '0 1px 10px #d3d3d3', onStart: ()=> {
          document.getElementById("navbar").classList.add("colored");
        }});
    })
    .on('leave', ()=> {
      TweenMax.to('.nav', 0.2, {backgroundColor: 'rgba(255,255,255,0)', boxShadow: '0', onStart: ()=> {
        document.getElementById("navbar").classList.remove("colored"); 
      }});
    })
  //  .addIndicators()
    .addTo(controller);
    if(!isTouch) {
      let dir = intl.locale === 'he' ? -30 : 30;
      TweenMax.to('#index_header', 50, {backgroundPosition: dir+'vw 0', ease: Linear.easeNone });
    }
    
    return ()=> {
      controller.destroy(true);
    }
  },[intl.locale, isTouch])
  return  <div id="index_header" className="headerbg">
  <div className="squares">
    <div className="helper_square is-hidden-touch"></div>
    <div className="right_square">

    </div>
    <div className="left_square">
    </div>

  </div>
  <div className="main">
    <div className="container">
      
      <div className="main_table">
      <div className="intro">
        <div className="textlogo">
          <h1>{intl.formatMessage({ id: "erez_eliahu" })}</h1>
          <label>{intl.formatMessage({id: "advocate_notary"})}</label>
        </div>
        <div className="intro-article">
          <article>
            {/*<div className="article-title">
              <h2>{intl.formatMessage({id: "index.heading"})}</h2>
</div>*/}
            <div className="article-content">
              <p>{intl.formatMessage({id: "index.content"})}</p>
            </div>
            {/*<div className="article-link">
              <a href="/">{intl.formatMessage({id: "readmore"})}</a>
</div>*/ }
          </article>
        </div>
      </div>
      <div className="rightintro" style={{display: 'none'}}>
        <BlogSlider />
        </div>
      </div>
    </div>
  </div>
</div>;
}

const IndexPage = () => {

  const intl = useIntl();
  useEffect(() => {

  });
  return <Layout header={<HeaderComp />} idpage="index">
    <SEO title={intl.formatMessage({id: "titles.home"})} />
    <About />
    <section className="services">
      <div className="container">
        <h2 className="title">{intl.formatMessage({id: "index.areaof"})}<span>{intl.formatMessage({id: "index.practice"})}</span></h2>
        <Services />
      </div>
    </section>
    <section className="quote">
      <div className="container">
        <div className="commas">"</div>
        <h3>{intl.formatMessage({id: "index.quote"})}</h3>
        <div className="quote-profile">
          <img src="/images/avatar.png" className="avatar" alt="Erez" />
          <div className="quote-profile-desc">
            <h4>{intl.formatMessage({id: "erez_eliahu"})}</h4>
            <label>{intl.formatMessage({id: "advocate_notary"})}</label>
          </div>
        </div>
      </div>
    </section>
    <section className="geo">
      <div className="map" style={{backgroundImage: 
      "linear-gradient(to bottom, #fff, rgba(255,255,255,0) 20%), url('/images/map-"+intl.formatMessage({id: "index.map"})+".png')"}}>
        
      </div>

      <div className="map-overlay">
        <div className="map-effect"></div>
        <div className="content">
          <h3>{intl.formatMessage({id:"index.localknowledge"})}</h3>
        </div>
      </div>
    </section>
    <section className="contact" id="#contact">
      <Contact />
    </section>
  </Layout>
}

export default IndexPage;
//