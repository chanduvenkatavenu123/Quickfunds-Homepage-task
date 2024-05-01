import React from "react";


function Fourthslide(){

    return(
        <div className="fourthslide-main bg-gradient-to-r from-teal-50">
            <h1 className="about">About us</h1>
            <div className="fourthslide-subdiv1">
                <div className="fourthslide-subdiv11">
                    <img className="fourthslide-img1" src="https://res.cloudinary.com/dogmqg8to/image/upload/v1687100170/Quick%20Funds/Raising_hand-bro-01_jdvjck.png"/>
                    <p className="fouthslide-p1">QuickFunds- Your trusted financial partner for loans. Quick approvals, competitive rates, and personalized solutions to meet
                         your unique needs. Empowering you to achieve your financial goals. Apply online today!</p>
                </div>
                <form className="fourthslide-subdiv12">
                    <label className="fourthslide-label" htmlFor="name">Your Name</label><br></br>
                    <input className="fourthslide-inputfield" type="text"/><br></br>
                    <label className="fourthslide-label" htmlFor="number">Phone Number</label><br></br>
                    <input className="fourthslide-inputfield" type="text"/><br></br>
                    <label className="fourthslide-label" htmlFor="mail">Email address</label><br></br>
                    <input className="fourthslide-inputfield" type="text"/><br></br><br></br>
                    <button type="button" className="fourthslide-btn">SEND</button>
                </form>             
            </div>
        </div>    
    )
};
export default Fourthslide;