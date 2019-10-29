import React, { useEffect } from "react"

import Layout from "../components/layout/layout"
import lang from '../json/lang.en.json';
import SEO from "../components/seo"
import About from "../components/index/about";
import Services from '../components/index/services'
import BlogSlider from "../components/index/blogslider"

import posts from '../json/posts.json';

const HeaderComp = ()=> {
  return     <div id="index_header" className="headerbg">
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
          <h1>{lang.intro.textlogo_h1}</h1>
          <label>{lang.intro.textlogo_label}</label>
        </div>
        <div className="intro-article">
          <article>
            <div className="article-title">
              <h2>{posts[0].title}</h2>
            </div>
            <div className="article-content">
              <p>{posts[0].content.substr(0, 120) + " .."}</p>
            </div>
            <div className="article-link">
              <a href="/">read more</a>
            </div>
          </article>
        </div>
      </div>
      <div className="rightintro">
        <BlogSlider />
        </div>
      </div>
    </div>
  </div>
</div>;
}

const IndexPage = () => {
  useEffect(() => {
    console.log(lang);
  });
  return <Layout header={<HeaderComp />}>
    <SEO title="Home" />
    <About />
    <section className="services">
      <div className="container">
        <h2 className="title">Area of <span>Practice</span></h2>
        <Services />
      </div>
    </section>
    <section className="quote">
      <div className="container">
        <div className="commas">"</div>
        <h3>The guiding principle at our office is an individual approach to each case and each client.</h3>
        <div className="quote-profile">
          <img src="/images/avatar.png" className="avatar" alt="Erez" />
          <div className="quote-profile-desc">
            <h4>Erez Eliahu</h4>
            <label>Adovcate & Notary</label>
          </div>
        </div>
      </div>
    </section>
    <section className="geo">
      <div className="map">

      </div>

      <div className="map-overlay">
        <div className="map-effect"></div>
        <div className="content">
          <h3>Local knowledge with global experience</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
      </div>
    </section>
  </Layout>
}

export default IndexPage;
