// import Logo from "./Logo";
import Navbar from "./NavBar";
import {useState} from "react";
// import MobileNavbar from "./MobileNavbar";
import { Divide as Hamburger } from 'hamburger-react';
import useScrollPosition from "../hooks/useScrollPosition";
import allCSS from '../css/header.css';


const Header = () => {
    const {position} = useScrollPosition();
    const [isMobileNavShow, setIsMobileNavShow] = useState(false);

    return (
        <header className="header">

            <div className="container">
                <div className="subHeader">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        {/* <Logo/> */}

                        {/* Mobile Menu Icon */}
                        <span className="sm:hidden">
                        </span>
                    </div>

                    {/* Desktop Navbar */}
                    <Navbar/>

                    {/* Mobile Navbar */}
                   {/* <MobileNavbar className={!isMobileNavShow ? "mt-0 h-0":"mt-3 h-[130px]"}/> */}
                </div>
            </div>


        </header>
    );
};

export default Header;