import './MyWork.css'
import mywork_data from '../../assets/myWork_data.js'
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from 'react';

const MyWork = () => {
    const[data, setData] = useState([]);
    useEffect(()=>{
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
                            <p className='text-center p-3 m-2 cursor-pointer font-bold text-xl'>{project.w_name}</p>
                            <img src={project.w_img} alt="" className='rounded-md'
                            />
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