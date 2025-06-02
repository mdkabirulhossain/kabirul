
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css'
import logo from '../../assets/Logo.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
const fullText = "I am Md. Kabirul Hossain,\nMERN Stack Developer.";


const Hero = () => {
    const downloadFile = async () => {
        const response = await fetch('/Md_Kabirul_CV_01.pdf');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        // Create a link and programmatically click to start download
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Md_Kabirul_CV_01.pdf');
        document.body.appendChild(link);
        link.click();

        // Clean up
        link.remove();
        window.URL.revokeObjectURL(url);
    };

    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (index < fullText.length) {
                setText((prev) => prev + fullText[index]);
                setIndex(index + 1);
            } else {
                setTimeout(() => {
                    setText('');
                    setIndex(0);
                }, 10000); // Wait 2 seconds then restart
            }
        }, 200); // Typing speed

        return () => clearTimeout(timeout);
    }, [index]);
    return (
        <div id='home' className='hero'>
            <div className='icon'>
                <div className='border-2 w-56 h-56 rounded-full'>
                    <img className='hero-logo  w-full h-full rounded-full' src={logo} alt="" />
                </div>
                <div className='flex gap-5'>
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
                {/* <h1 className='p-1'><span>I am Md. Kabirul Hossain,</span> MERN Stack Developer.</h1> */}

                <motion.h1
                    className='p-1 typing-cursor'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {text.split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}
                </motion.h1>
                {/* <p>I am a Full Stack Developer from Dhaka, Bangladesh. I am recently working five more projects.</p> */}
                <div className="hero-action">
                    <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                    <div className="hero-resume" onClick={downloadFile}>My-resume</div>
                </div>
            </div>

        </div>
    );
};

export default Hero;