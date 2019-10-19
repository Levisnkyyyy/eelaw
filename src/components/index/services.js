import React, { useRef, useEffect, useContext } from 'react';
import posts from '../../json/posts';
import { Link } from 'gatsby';
import { TimelineMax, TweenMax, Linear, Power2 } from 'gsap';
import * as ScrollMagic from 'ScrollMagic';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import 'ScrollMagic/ScrollMagic/uncompressed/plugins/debug.addIndicators';
import {isMobile} from 'react-device-detect';
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
            var controller = new ScrollMagic.Controller();
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
            var scene = new ScrollMagic.Scene({
                    duration: (align === 'left' ? 800 : 1100),
                //  triggerElement: "#service-"+id,
                    offset: 0,
                    triggerElement: elm,
                    triggerHook: "onEnter",
                    reverse: true
            }).addIndicators()
            .setTween(tl_texts)
            .on('enter', (e)=> {
                if(e.scrollDirection !== 'REVERSE' && tweened === false) {
                   
                    document.querySelectorAll(elm+'>div').forEach(function(e,index) {
                        TweenMax.fromTo(e, 1, {opacity: 0, y: 200}, {opacity: 1, y: 0, onComplete: ()=> {
                            if(index === 2) {
                               //scene.setTween(tl_texts);
                            }
                        }});
                        
                    })
                }
            })
            .on('leave', (e)=> {
                if(e.state === 'AFTER') {
                    tweened = true;
                }
            })
            .addTo(controller);
            
        }
    },[]);
    return  <div ref={servRef} id={"service-"+id} className={"service " + align + " id-" + id}>
        <div className={"service-image " + ((align === 'left') ? '' : 'smaller')}>
            <img src={"/images/" + service.image} />
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
