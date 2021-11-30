import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

const Contact = () => {
    const [state] = React.useState({})
    return (
        <div className="contact">
            <div className="container">
                <div className="contact_section">
                    <div className="row justifyContent">
                        <div className="col-6">
                            <div className="contactSection-logo">
                                <img src="/images/logo.png" alt="" />
                            </div>
                            <p>A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server model.</p>
                            <ul className="contactCircles">
                                <li><FaFacebook /></li>
                                <li><FaInstagram /></li>
                                <li><FaLinkedin /></li>
                                <li><GoMarkGithub /></li>
                                <li><FaYoutube /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Contact;