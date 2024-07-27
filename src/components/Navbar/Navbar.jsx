import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >50 ? setSticky(true) : setSticky(false);
    })
  },[])

  const[mobileMenu, setMobileMenu] = useState(false);

  function toggleMenu(){
    mobileMenu ? setMobileMenu(false) :setMobileMenu(true);
  }


  return (
   <nav className={`container ${sticky && 'dark-nav' }`}>
    <img src="/images/logo1.png" alt=""></img>
    <ul className={!mobileMenu && "hide-mobile-menu"}>
        <li><Link to="hero" smooth={true} offset={0}
        duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260}
        duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150}
        duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260}
        duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260}
        duration={500}>Testimonials</Link></li>
        <li className="btn"><Link to='contact' smooth={true} offset={-260}
        duration={500}>Contact us</Link></li>
    </ul>
    <img onClick={toggleMenu} src="/images/menu.png" alt="" className="menu-icon"></img>
   </nav>
  )
}

export default Navbar