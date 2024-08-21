import { useRef, useState } from 'react';
import './Navbar.css'
import navbar from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
    const[menu, setMenu] = useState("home");
    const menuRef = useRef();
    const openMenu = ()=>{
        menuRef.current.style.right = "0";
    }
    const closeMenu = ()=>{
        menuRef.current.style.right = "-350px";
    }
    return (
        <div className='navbar'>
            <h1 className='font-bold text-2xl'>KABIRUL</h1>
            <img src={menu_open} alt="" onClick={openMenu} className='nav-mob-open' />
            <ul ref={menuRef} className="nav-manue">
                <img src={menu_close} alt="" onClick={closeMenu} className='nav-mob-close' />
                <li><AnchorLink className='anchor-link anchor-link-main' href='#home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link anchor-link-main' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About Me</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link anchor-link-main' offset={50} href='#services'><p onClick={()=>setMenu('services')}>Services</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link anchor-link-main' offset={50} href='#work'><p onClick={()=>setMenu('work')}>Portfolio</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link anchor-link-main' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink></li>
            </ul>
            <div className='nav-connect'>
            <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink> 
            </div>
        </div>
    );
};

export default Navbar;