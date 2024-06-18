import './About.css'
import profile from '../../assets/Logo.jpeg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                {/* <img src="" alt="image" /> */}
            </div>
            <div className='about-sections'>
                <div className="about-left">
                    <img src={profile} alt="profile" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced full stack developer. I am working about last 2 years</p>
                        <p>I also want to learn knowledge about machine learning. And also always try to learn something new</p>
                    </div>
                    <div className="about-skills">
                         <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{width:"70%"}} />
                         </div>
                         <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{width:"75%"}} />
                         </div>
                         <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{width:"68%"}} />
                         </div>
                         <div className="about-skill">
                            <p>node.js &
                                <span><br></br></span> express.js</p>
                            <hr style={{width:"88%"}} />
                         </div>
                         
                    </div>
                </div>
                
            </div>
            <div className="about-achievements">
                     <div className="about-achievement">
                        <h1>10+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                     </div>
                     <hr/>
                     <div className="about-achievement">
                        <h1>10+</h1>
                        <p>PROJECT COMPLETED</p>
                     </div>
                     <hr/>
                     <div className="about-achievement">
                        <h1>10+</h1>
                        <p>HAPPY CLIENT</p>
                     </div>
                </div>
        </div>
    );
};

export default About;