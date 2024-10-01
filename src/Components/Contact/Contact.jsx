import './Contact.css'
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
 const Contact = () => {

    return (
        
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
            </div>
            <div className="contact-section">
                <div className='contact-left'>
                    <h1>Lets Talk</h1>
                    <p>I am currently available to take on new project. And I am very Happy to contribute in unique projects.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <MdEmail></MdEmail>
                            <p>mdkabirulhossainj@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <IoIosCall></IoIosCall>
                            <p>+880 1762091018</p>
                        </div>
                        <div className="contact-detail">
                            <FaLocationDot></FaLocationDot>
                            <p>Gulshan-2, Dhaka</p>
                        </div>
                    </div>
                </div>
                {/* Use Rormspree for contact */}
                <form action="https://formspree.io/f/xeojjgwb"
                      method="POST" className='contact-right'>
                     <label htmlFor="">Your Name</label>
                     <input type="text" placeholder='Enter your name' name="name" id="" required />
                     <label htmlFor="">Your Email</label>
                     <input type="email" placeholder='Enter your email' name="email" id="" required />
                     <label htmlFor="">Write your message here</label>
                     <textarea name="message" id="" rows="8" placeholder='Enter your message' required></textarea>
                     <button type="submit" className='contact-submit'>Submit now</button>
                     
                </form>

                
            </div>
        </div>
    );
};

export default Contact;