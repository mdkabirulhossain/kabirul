import './Services.css';
import services_data from '../../assets/services_data'
import { GrLinkNext } from "react-icons/gr";

const Services = () => {
    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>My Services</h1>
            </div>
            <div className="services-container">
                {
                    services_data.map((service, index)=>{
                       return <div key={index}
                        className='services-format'
                        >
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className='services-readmore'>
                                <p>read more</p>
                                <GrLinkNext></GrLinkNext>
                                </div>
                        </div>
                    })
                }
            </div>
            
        </div>
    );
};

export default Services;