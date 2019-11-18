import React, {useState, useEffect, useRef} from 'react';

import posts from "../../json/posts";
import { TweenMax, Power2} from 'gsap';

const BlogSlider = ()=> {
    const [selected, setSelected] = useState(0);
    const [direction, setDir] = useState(1);
    const handleNavClick = (add)=> {
        if(selected + add >= posts.length) {
            setSelected(0);
        }
        else if(selected + add < 0) {
            setSelected(posts.length-1);
        }
        else {
            setSelected(selected +add);
        }
        setDir(add);
    }
    
    const handleBtnClick = ()=> {

    }
    useEffect(()=> {
        
    },[]);
    return  <div className="blogslider">
    <div className="blogslider-stripe">
        <div>
        </div>
        <div></div>
    </div>
    <div className="blogslider-triangles">
        <div></div>
        <div></div>
    </div>
    <div className="blogslider-bigtitle">
        Read my articles
    </div>
    <SliderArticle id={selected} direction={direction} switchto={selected} />
    <div className="blogslider-footer">
        <div className="buttons">
            <div className="left" onClick={()=> handleNavClick(-1)}><i className="icofont-arrow-left"></i></div>
            <div className="right" onClick={()=> handleNavClick(1)}><i className="icofont-arrow-right"></i></div>
        </div>
        <div className="navigation">
            {posts.filter(e=>e.type === 'slider').map((pt,index) =>
                <label key={index} onClick={()=> setSelected(index)} className={selected === index ? 'active' : ''}>0{index+1}</label>
            )}
        </div>
        <div className="btn readmore" onClick={()=> handleBtnClick()}>
            Read more
        </div>
    </div>
</div>;
}
export default BlogSlider;
const SliderArticle = ({id,direction})=> {
    const article = useRef(null);
    useEffect(()=> {
        TweenMax.fromTo(article.current, 1, {x: 500*direction, opacity: 0}, {x:0, ease:Power2.easeOut, opacity: 1});
    },[id, direction]);
    return     <article ref={article} className="blogslider-article">
    <div className="article-title">
        <h2>{posts[id].title}</h2>
    </div>
    <div className="article-paragraph">
        <p>
            {posts[id].content.substring(0, 220)}
        </p>
    </div>
</article>;
}