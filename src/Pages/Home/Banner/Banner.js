import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import Typical from 'react-typical';

const Banner = () => {
    const [state] = React.useState({
        title: "I'm Tareq Imtiaz", text: <Typical
            loop={Infinity}
            wrapper="b"
            steps={['Full-Stack Web Developer', 2000, 'MERN Stack Developer', 2000]}

        />, image: "/images/Ravien-bg.png"
    });
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header_icon">
                            <div className="header_section">
                                <ul className="header_ul">
                                    <li><FaFacebook /></li>
                                    <li><FaInstagram /></li>
                                    <li><FaLinkedin /></li>
                                    <li><GoMarkGithub /></li>
                                    <li><FaYoutube /></li>
                                </ul>
                                <h1>{state.title}</h1>
                                <p>{state.text}</p>
                                <div className="header_button">
                                    <a href="https://drive.google.com/uc?export=download&id=1vJlEmGSGV-Zg8v5JkQ4-ExtQA2Jb6f7O" className="btn btn-outline">Download Resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="header_image">
                            <img src={state.image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;