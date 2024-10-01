import './MyWork.css'
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
import mywork_data from '../../assets/myWork_data';

const MyWork = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(mywork_data);
    }, [])

 
    return (
        <div id='mywork' className="mywork">
            <div className="mywork-title">
                <h1>My latest work</h1>
            </div>
            <div className="mywork-container">
                {
                    data.map(project => <div className='container border-2 border-gray-200 rounded-md' key={project.w_no}>
                        <img src={project.w_img} alt="" className='rounded-md'
                            />
                            <p className='text-center p-2 font-bold text-xl'>{project.w_name}</p>
                        <a href={project.url}>
                        <button className='live-link w-full p-2 mb-2 rounded-md'>Live link</button>
                        </a>
                        
                        <button className='live-link w-full p-2 mb-2 rounded-md'>Github link</button> 

                    </div>)
                }
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <FaArrowRight></FaArrowRight>
            </div>
        </div>
    );
};

export default MyWork;