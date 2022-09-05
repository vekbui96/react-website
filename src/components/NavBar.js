import { useEffect, useState } from 'react';
import {Link} from "react-scroll";
import Container from 'react-bootstrap/Container';
import navbar from "../data/navbar.json"
import {checkExternalLink} from "../utils/checkExternalLink";
import '../css/navbar.css'

// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Navbar = ({className}) => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll",onScroll);
    }, [])
    return (
              <nav className="ect">
                  <ul className="boxes" >
                      {navbar.map(item => (
                          <li key={item.id}>
                              {checkExternalLink(item.href) ? (
                                  <a
                                      href={item.href} target="_blank"
                                      data-hover={item.name.toLowerCase()}
                                      className={`block text-white font-medium text-sm relative cursor-pointer after:duration-300 ${navItemHoverStyle}`}
                                  >
                                      <span className="item">{item.name}</span>
                                  </a>
                              ) : (
                                  <Link
                                      spy={true}
                                      smooth={true}
                                      to={item.href}
                                      activeClass={navItemActiveStyle}
                                      data-hover={item.name.toLowerCase()}
                                      className={`block text-white font-medium text-sm relative cursor-pointer after:duration-300 ${navItemHoverStyle}`}
                                  >
                                      <span className="item">{item.name}</span>
                                  </Link>
                              )}
                          </li>
                      ))}
                  </ul>
              </nav>
          );
}

const navItemHoverStyle = "after:content-[attr(data-hover)] after:absolute after:left-1/2 after:top-3/4 after:opacity-0 after:-translate-x-1/2 hover:after:top-1/2 hover:after:opacity-100 after:hover:-translate-x-1/2 after:hover:-translate-y-1/2";

const navItemActiveStyle = "before:absolute before:h-[6px] before:w-[6px] before:rounded-full before:bg-white before:left-1/2 before:-translate-x-1/2 before:-bottom-3";

export default Navbar;
