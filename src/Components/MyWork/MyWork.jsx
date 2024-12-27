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
                    data.map(project => <div className='container shadow-lg rounded-md' key={project.w_no}>
                        <img src={project.w_img} alt="" className='rounded-md'
                            />
                            <p className='text-center py-2 font-bold text-xl'>{project.w_name}</p>
                        <a href={project.url}>
                        <button className='live-link w-full py-2 mb-2 rounded-md'>Live link</button>
                        </a>
                        <a href={project.github_url}>
                        <button className='live-link w-full py-2 mb-2 rounded-md '>Github link</button> 
                        </a>
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