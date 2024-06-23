import './Hero.css'
import logo from '../../assets/Logo.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
const PDF_FILE_URL = 'http://localhost:5173/Md_Kabirul_CV.pdf'
const Hero = () => {
    const downloadFileAtURL = (url) => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return (
        <div id='home' className='hero'>
            <div className='icon'>
                <img className='hero-logo' src={logo} alt="" />
                <div >
                    <a href="https://www.linkedin.com/in/md-kabirul-hossain-0a63351ab/">
                        <FaLinkedin size={35}></FaLinkedin>
                    </a>
                    <a href="https://github.com/mdkabirulhossain">
                        <FaGithub size={35}></FaGithub>
                    </a>
                    <a href="https://www.facebook.com/mdkabirulhossain.joy?mibextid=ZbWKwL">
                        <FaFacebook size={35}></FaFacebook>
                    </a>

                </div>
            </div>
            <div className='left'>
                <h1><span>I am Md. Kabirul Hossain,</span> MERN Stack Developer.</h1>
                {/* <p>I am a Full Stack Developer from Dhaka, Bangladesh. I am recently working five more projects.</p> */}
                <div className="hero-action">
                    <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                    <div className="hero-resume" onClick={() => { downloadFileAtURL(PDF_FILE_URL) }}>My-resume</div>
                </div>
            </div>

        </div>
    );
};

export default Hero;