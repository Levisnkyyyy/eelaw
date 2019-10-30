import React, { useEffect, useRef } from 'react';
import services from '../../json/services';
import { Link } from 'gatsby';
import { TimelineMax, TweenMax, Power2, Linear } from 'gsap';
import {useMediaQuery} from 'react-responsive'; // NOT WORKING ON BUILD VERSION
import ScrollMagic from 'ScrollMagic';
/* FOLLOWING LINE TO BE REMOVED FROM BUILD */
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
//
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import {touch_query} from '../../utilities/responsive';
//let controller = React.createContext(new ScrollMagic.Controller());
const Services = () => {
    return <>
        {services.map((serv, index) =>
            <Service key={serv.title} id={index} service={serv} align={serv.id % 2 === 1 ? 'left' : 'right'} />
        )}
    </>;
};
export default Services;

const Service = ({ service, align, id }) => {
    let isMobile = useMediaQuery({query: touch_query});
    const servRef = useRef(null);
    useEffect(() => {
        var elm = '#service-'+id;
        ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
      if (servRef.current !== null) {
            var controller = new ScrollMagic.Controller();
            let elements = (e) => elm+ ' .service-'+e;
            let transitions = {
                title_y: -10, square_y: -50,
                to: {title_y: -50, square_y: 50}
            };
            
            if(!isMobile) {
                transitions.title_y = 75;
                transitions.to.title_y = -30;
            }
            let tt = TweenMax.to(transitions, 1, {
                title_y: transitions.to.title_y,
                square_y: transitions.to.square_y});
            var tweened = false;
            var scene = new ScrollMagic.Scene({
                    duration: (align === 'left' ? 900 : 1100),
                    offset: 0,
                    triggerElement: elm,
                    triggerHook: "onEnter",
                    reverse: true
            }).addIndicators()
            .setTween(tt)
            .on('enter', (e)=> {
                if(tweened ===false) {
                    let w = document.querySelector(elements('square')).offsetWidth;
                TweenMax.fromTo(elements('square'), 1.2, {css:{width: '0'}}, {css:{width: w}, ease: Power2.easeOut});
                tweened = true;
                }
            })
            .on('leave', (e)=> {
               /* if(e.state === 'AFTER') {
                    tweened = true;
                }*/
            })
            .on('progress', (e)=> {
                let title_elm = (!isMobile) ? elements('title') +','+elements('wrapper') : elements('title');
                TweenMax.to(title_elm, 0.4, {y: transitions.title_y, ease: Power2.easeOut});
                TweenMax.to(elements('square'), 1, {y: transitions.square_y, ease: Power2.easeOut});
            })
            .addTo(controller);
            
        }
        return ()=> {
            controller.destroy(true);
            controller = null;
            scene.destroy(true);
            scene = null;
        }
    },[align, id]);
    return  <div ref={servRef} id={"service-"+id} className={"service " + align}>
        <div className={"service-image " + ((align === 'left') ? '' : 'smaller')}>
            <img className="service-image_img" src={"/images/" + service.image} alt={service.title} />
            <div className="service-square" style={{width: Math.floor(Math.random()*300+50)+'px'}}>

            </div>
        </div>

        <div className="service-title">
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
