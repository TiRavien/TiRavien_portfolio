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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatum, harum laborum corrupti adipisci cum rerum officiis consequatur libero nemo dolores. Reiciendis, dignissimos ipsa quaerat aspernatur optio sit quam nesciunt!</p>
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