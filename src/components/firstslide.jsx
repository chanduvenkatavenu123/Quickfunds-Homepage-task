import React from "react";

function Firstslide(){
    return(
        <div className="firstslidemain">
            <div className="firstslidesubdiv1">
                <h1 className="firstslide-h1text">Quick and Easy Loans for Your Financial Needs.</h1>
                <p className="firstslide-ptext">Our loan services offer a hassle-free and streamlined borrowing 
                    experience, providing you with the funds you need in a timely 
                    manner to meet your financial requirements.</p>
                    <div>
                        <button className="firstslide-button">Get Started</button>
                    </div>
            </div>
            <div className="firstslidesubdiv2">
                <img className="firstimg" src="https://res.cloudinary.com/dogmqg8to/image/upload/v1686751698/Quick%20Funds/33530836_8069130_xs3wqv.jpg"/>
            </div>
        </div>
    )
};
export default Firstslide;