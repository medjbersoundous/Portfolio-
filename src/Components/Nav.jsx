import { useState, useEffect } from "react";
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi'
import { AiOutlineMenu } from 'react-icons/ai'
import {TbBrandGithubFilled} from 'react-icons/tb'
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router
} from "react-router-dom";

const Nav = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <Router>
      <nav className={`pt-7 pr-[9%]  ${scrolled ? "scrolled" : ""}`}>
        <div className="md:hidden">
          <span onClick={toggleMenu}><AiOutlineMenu className="text-3xl ms-auto" /></span>
        </div>
        <div className={`md:flex items-center ${menuOpen ? "block" : "hidden"}`}>
          <div className="md:ml-auto font-thin text-gray-300 md:mr-3">
            <Link to="#home" className="md:m-4 hover:text-white text-xl" onClick={() => onUpdateActiveLink('home')}>Home</Link>
            <Link to="#skills" className="md:m-4 hover:text-white text-xl" onClick={() => onUpdateActiveLink('skills')}>Skills</Link>
            <Link to="#projects" className="md:m-4 hover:text-white text-xl" onClick={() => onUpdateActiveLink('projects')}>Projects</Link>
          </div>
          <div className="flex">
            <Link to="https://www.linkedin.com/in/soundous-medjber-03419221b/" className="w-12 h-12 bg-gray-300 bg-opacity-10 inline-flex rounded-full mr-2 items-center justify-center leading-none border border-white border-opacity-50 hover:bg-[rgba(179,178,178,0.47)]" ><BiLogoLinkedin className="text-xl"/></Link>
            <Link to="https://www.facebook.com/soundous.medjber.902/?locale=fr_FR" className="w-12 h-12 bg-gray-300 bg-opacity-10 inline-flex rounded-full mr-2 items-center justify-center leading-none border border-white border-opacity-50 hover:bg-[rgba(179,178,178,0.47)]"><BiLogoFacebook className="text-xl"/></Link>
            <Link to="https://github.com/medjbersoundous" className="w-12 h-12 bg-gray-300 bg-opacity-10 inline-flex rounded-full mr-2 items-center justify-center leading-none border border-white border-opacity-50 hover:bg-[rgba(179,178,178,0.47)]"><TbBrandGithubFilled className="text-xl"/></Link>
          </div>
          <Link to="https://drive.google.com/file/d/1hjm0oAUibzGBIcABGoAKZ13UeSKzuVPt/view?usp=sharing">
            <button className="md:relative overflow-hidden font-semibold text-white border border-solid border-white py-3 px-8 text-lg ml-4 bg-transparent transition duration-300 ease-in-out z-10 group hover:text-black">
              <span className="relative z-10">My resume</span>
              <span className="absolute top-0 left-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </button>
          </Link>
        </div>
      </nav>
    </Router>
  )
}

export default Nav;
