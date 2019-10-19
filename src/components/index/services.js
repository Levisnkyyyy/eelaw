import React, { useRef, useEffect } from 'react';
import posts from '../../json/posts';
import { Link } from 'gatsby';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { Power2 } from 'gsap';

const Services = () => {
    let data = posts.filter(x => x.type === 'service');
    return <>
        {data.map((serv, index) =>
            <Service key={serv.title} id={index} service={serv} align={serv.id % 2 === 0 ? 'left' : 'right'} />
        )}
    </>;
};
export default Services;

const Service = ({ service, align, id }) => {
    const servRef = useRef(null);
    useEffect(() => {
        if (servRef !== null) {
            //  alert(servRef);
        }
    })
    return <Controller>
        <div ref={servRef} id={"service-"+id} className={"service " + align + " id-" + id}>
        <Scene key={id} triggerHook={1} duration={800} indicators={true} triggerElement={"#service-" + id}
    >
         {(progress) => (
            <Tween            
            to={{
              y: 200
            }}       
            ease="Power2.easeOut"
            totalProgress={progress}
            paused
          >
<p>test</p>
              </Tween>
         )}       
         </Scene>
        <div className={"service-image " + ((align === 'left') ? '' : 'smaller')}>
            <img src={"/images/" + service.image} />
            <div className="service-square">

            </div>
        </div>

        <div className="service-title">
            <h2>{service.title}</h2>
        </div>
        <div className="service-wrapper">
            <div className="service-content">
                <p>{service.content.substr(0, 150) + " .."}</p>
            </div>
            <div className="service-link">
                <Link to="/">read more</Link>
            </div>
        </div>
        
    </div>
        </Controller>;
};
