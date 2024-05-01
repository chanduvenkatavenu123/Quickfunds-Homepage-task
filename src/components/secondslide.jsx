import React from "react";
function Secondslide(){
    return(
        <div className="secondslidemain bg-gradient-to-r from-teal-50">          
                <h1 className="secondslide-h1">Our Services</h1><br></br>  
            <div className="secondslide-subdiv1">
                <div className="secondslide-subdiv11">
                    <img className="secondslide-img" src="https://res.cloudinary.com/dogmqg8to/image/upload/v1686996620/Quick%20Funds/personal_loan_n8udz3.png"/>
                    <h4 className="secondslide-h4L">Personal Loan</h4>
                    <p className="secondslide-LD">Personal loans provide <br></br>borrowers with flexibility in how they <br></br>use the funds.</p>
                    <div className="secondslide-btn">
                        <button className="btn">Apply Now</button>
                    </div>    
                </div>
                <div className="secondslide-subdiv11">
                    <img className="secondslide-img" src="https://res.cloudinary.com/dogmqg8to/image/upload/v1686996620/Quick%20Funds/business_loan_yveryi.png"/>
                    <h4 className="secondslide-h4L">Business Loan</h4>
                    <p className="secondslide-LD">Business Loan Services provide <br></br>financial assistance to businesses <br></br>for various purposes..</p>
                    <div className="secondslide-btn">
                        <button className="btn">Apply Now</button> 
                    </div>    
                </div>    
                <div className="secondslide-subdiv11">
                    <img className="secondslide-img" src="https://res.cloudinary.com/dogmqg8to/image/upload/v1686996620/Quick%20Funds/auto_loan_xyesis.png"/>
                    <h4 className="secondslide-h4L">Auto Loan</h4>
                    <p className="secondslide-LD">Auto Loan Services provide <br></br> financing options for individuals<br></br> businesses to purchase a vehicle</p>
                    <div className="secondslide-btn">
                        <button className="btn">Apply Now</button>
                    </div>    
                </div>
            </div>
            <div className="end-button">
                <button className="bt-btn">View more</button>   
            </div>
        </div>
    )
};
export default Secondslide;