import React, {useRef} from 'react';
import posts from '../../json/posts';
import { Link } from 'gatsby';
const Services = () => {
    let data = posts.filter(x => x.type === 'service');
    return <>
        {data.map(serv =>
            <Service key={serv.title} service={serv} align={serv.id % 2 === 0 ? 'left' : 'right'} />
        )}
    </>;
};
export default Services;

const Service = ({ service, align }) => {
    const servRef = useRef(null);
    return <div ref={servRef} className={"service " + align}>
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
    </div>;
};
