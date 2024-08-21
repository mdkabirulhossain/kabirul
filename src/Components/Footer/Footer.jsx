import './Footer.css'
// import { FaUser } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className='footer'>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                     <FaRegCopyright></FaRegCopyright>
                     <p>2024 all rights reserved</p>
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