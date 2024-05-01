import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

function Fifthslide(){
    return(
        <div className="fifthslide-main">
            <div className="fifthslide-subdiv1">
                <div style={{display:'flex',fontSize:'25px',fontWeight:'bold'}}>Quick
                    <span style={{color:'lightgreen'}}>Funds</span>
                </div>
                <p className="fifthslide-subdiv1-p1">Our mission is to empower individuals and businesses by providing them with the financial resources they need to achieve 
                    their goals.</p>
                <div className="sm">
                    <FaFacebook className="socialmedia"/><FaWhatsapp className="socialmedia"/> <CiLinkedin className="socialmedia"/><FaInstagram className="socialmedia"/>
                </div>
            </div>
            <div className="declaration">
                <div className="services">
                    <h1 className="serv">OUR SERVICES</h1>
                    <h2 className="serv">Personal loan</h2>
                    <h2 className="serv">Business loan</h2>
                    <h2 className="serv">Educational loan</h2>
                    <h2 className="serv">Auto loan</h2>
                    <div className="sm-right">
                        <FaFacebook className="socialmedia"/><FaWhatsapp className="socialmedia"/> <CiLinkedin className="socialmedia"/><FaInstagram className="socialmedia"/>
                    </div>
                </div>              
                <div className="fifth-slide-content-right">
                    <h1 className="contact">CONTACT US</h1>
                    <div className="reachout">
                        <FaPhone/><h2>+91 99999 99999</h2>                  
                    </div>
                    <div className="reachout">
                        <MdEmail /><h2>xyzfh5@gmail.com</h2>
                    </div>
                    <div className="reachout">
                        <MdLocationOn/><h2>Address line-1</h2>
                </div>
                </div>
            </div>
        </div>
    )
};
export default Fifthslide;