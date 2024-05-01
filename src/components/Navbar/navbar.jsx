import React, { useState,useEffect } from "react";
import style from "./Navbar.module.css"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
    const [toggleNavbar, setNavbar] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    let className = '';
    if (windowWidth <= 600 && windowWidth >= 320 && toggleNavbar) {
        className = style.dropdown;
    } else if(windowWidth <= 600 && windowWidth >= 320 && !toggleNavbar){
        className = style.backDropdown;
    }
    else if (windowWidth > 600) {
        className = style.navRoutes;
    }else{
        className = style.HIDE;
    }
    return (
        <div className={style.navMain}>
            <ul className={style.nav}>
                {!toggleNavbar ?
                    <RxHamburgerMenu className={style.hide} style={{ color: '#2a6877', fontSize: '25px', fontWeight: 'bold' }}
                        onClick={() => setNavbar(true)} /> :
                    <RxCross2 className={style.hide} onClick={() => setNavbar(false)} style={{ color: "#2a6877", position: "absolute", right: "31vw",top:"11vh", zIndex: "150" }} />
                }
                <li className="web-name" style={{ display: 'flex', fontSize: '25px', fontWeight: 'bold', color: '#2a6877', paddingLeft: "80px" }} >Quick<span style={{ color: 'lightgreen' }}>Funds</span>
                </li>
                <div
                className={className}>
                    <li className={style.companydescription}>Home</li>
                    <li className={style.companydescription}>Services</li>
                    <li className={style.companydescription}>How we work?</li>
                    <li className={style.companydescription}>About us</li>
                    <button className="nav-btn">Contact us</button>
                </div>
            </ul>
        </div>
    )
};
export default Navbar;