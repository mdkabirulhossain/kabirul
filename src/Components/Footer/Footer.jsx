import './Footer.css'
// import { FaUser } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <p>I am a Full Stack Developer from Dhaka, Bangladesh</p>
                </div>
                {/* <div className="footer-top-right">
                    <div className="footer-email-input">
                        <FaUser />
                        <input type="email" name="email" placeholder='Enter your email' id="" />
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div> */}
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                     <FaRegCopyright></FaRegCopyright>
                     <p>2024 Md. Kabirul Hossain. All rights reserved</p>
                </div>
                <div className='footer-bottom-right'>
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;