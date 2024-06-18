import './Hero.css'
import logo from '../../assets/Logo.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img className='hero-logo' src={logo} alt="" />
            <div className='left'>
            <h1><span>I am Md. Kabirul Hossain,</span> MERN Stack Developer.</h1>
            {/* <p>I am a Full Stack Developer from Dhaka, Bangladesh. I am recently working five more projects.</p> */}
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className="hero-resume">My-resume</div>
            </div>
            </div>
            
        </div>
    );
};

export default Hero;