// Required Dependencies and Files
import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import Logo from "../images/logo_combo.png";

import Shield from "../images/shield.png";



const About = () => {
    return (
        <MDBJumbotron fluid className="text-center jumbotron">

            <MDBContainer className="aboutus">
                <h1>About Us</h1>
                <p>We are the WARRIORS of traveling and living on the road!</p>

                <p>The TraveLife Road Warriors help those going on short road trips all the way to those who have chosen to pack it up and live their lives on the road. We are a team made up of RV, TinyHome, Camper, Van, SUV and Sedan OWNERS and USERS. In addition to our expertise, we help people utilize the millions of other road travel resources available.</p>

                <p>Whatever path you choose, we can help you brave it!</p>


                <a class="nav-link Ripple-parent active" aria-current="page" href="/">
                    <p>Get Started Now</p>
                    <img src={Shield} style={{ width: 100 }} alt="shield" />
                    <img src={Logo} style={{ width: 300 }} alt="logo" /></a>
            </MDBContainer>
        </MDBJumbotron >
    );
}

// Export the About
export default About;