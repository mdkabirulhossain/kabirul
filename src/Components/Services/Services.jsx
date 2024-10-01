import './Services.css';
import services_data from '../../assets/services_data'
import { GrLinkNext } from "react-icons/gr";
import App from './modal';

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
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className='services-readmore '>
  
                                
                                <App id={service.s_no} name={service.s_name}></App>
                                </div>
                        </div>
                    })
                }
            </div>
            
        </div>
    );
};

export default Services;