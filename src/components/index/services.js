import React, { useRef, useEffect } from 'react';
import posts from '../../json/posts';
import { Link } from 'gatsby';
import { TimelineMax, TweenMax, Power2 } from 'gsap';
import * as ScrollMagic from 'ScrollMagic';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import 'ScrollMagic/ScrollMagic/uncompressed/plugins/debug.addIndicators';
import {isMobile} from 'react-device-detect';
require('paroller.js');  

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
//let controller = React.createContext(new ScrollMagic.Controller());
const Services = () => {
    let data = posts.filter(x => x.type === 'service');
    useEffect(()=> {
      //  controller = ;
    },[])
    return <>
        {data.map((serv, index) =>
            <Service key={serv.title} id={index} service={serv} align={serv.id % 2 === 0 ? 'left' : 'right'} />
        )}
    </>;
};
export default Services;

const Service = ({ service, align, id }) => {
    const servRef = useRef(null);
   // const scroll_controller = useContext(controller);
    useEffect(() => {
        var elm = '#service-'+id;
        if (servRef !== null) {
         //   document.getElementById("service-"+id).paroller({ factor: 0.5, factorXs: 0.2, type: 'foreground', direction: 'horizontal' });
            var controller = new ScrollMagic.Controller();
            let obj = {newY: 80, newImage: 30};
            let tt = TweenMax.to(obj, 1, {newY: -60, newImage: -30, onUpdate: ()=> {}})


            var tl_texts = new TimelineMax();
            var tweened = false;
            var tl_title = (isMobile) ? -85 : -25;
            var tl_title_end = (isMobile) ? -35 : 25;
            var tl_square = (isMobile) ? 30 : 75;
            var tl_square_end = (isMobile) ? -30 : -75;
            tl_texts.from(elm + ' .parallax1', 1, {y: tl_title},0)
            .from(elm + ' .parallax2', 1, {y: tl_square},0)
            .to(elm + ' .parallax1', 1, {y: tl_title_end},0)
            .to(elm + ' .parallax2', 1, {y: tl_square_end},0);
            new ScrollMagic.Scene({
                    duration: (align === 'left' ? 800 : 1100),
                //  triggerElement: "#service-"+id,
                    offset: 0,
                    triggerElement: elm,
                    triggerHook: "onEnter",
                    reverse: true
            })//.addIndicators()
            .setTween(tt)
            .on('enter', (e)=> {
                if(e.scrollDirection !== 'REVERSE' && tweened === false) {
                        TweenMax.fromTo(elm+' .service-image', 1, {opacity: 0, y: 100}, {opacity: 1, y: 0,
                        onComplete: ()=> {
                            tweened = true;
                        }});
                }
            })
            .on('leave', (e)=> {
                if(e.state === 'AFTER') {
                    tweened = true;
                }
            })
            .on('progress', (e)=> {
                if(tweened === true) {
                    
                TweenMax.to(elm+' .parallax3', 0.4, {y: obj.newImage, ease: Power2.easeOut});
                }
                TweenMax.to(elm+' .parallax1', 0.4, {y: obj.newY, ease: Power2.easeOut});
               // console.log(e.progress);
            })
            .addTo(controller);
            
        }
    },[align, id]);
    return  <div ref={servRef} id={"service-"+id} className={"service " + align + " id-" + id}>
        <div className={"service-image " + ((align === 'left') ? '' : 'smaller')}>
            <img className="parallax3" src={"/images/" + service.image} alt={service.title} />
            <div className="service-square parallax2">

            </div>
        </div>

        <div className="service-title parallax1">
            <h2>{service.title}</h2>
        </div>
        <div className={("service-wrapper " + ((!isMobile) ? 'parallax1' : ''))}>
            <div className="service-content">
                <p>{service.content.substr(0, 150) + " .."}</p>
            </div>
            <div className="service-link">
                <Link to="/">read more</Link>
            </div>
        </div>
        
    </div>
    ;
};
