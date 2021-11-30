import React from 'react';
import { GoMarkGithub, GoDeviceCamera } from "react-icons/go";
import { FaJsSquare, FaReact, FaBootstrap, FaCss3 } from "react-icons/fa";

const Projects = () => {
    const [heading] = React.useState({ textHeader: 'PROJECTS', subHeader: 'My Projects', text: 'Every project is an opportunity to learn, to figure out problems and challenges, to invent and reinvent.' });

    const [state] = React.useState([
        {
            id: 1,
            icon: <GoMarkGithub />,
            header: 'Web Development',
            text: 'Build, Organize & Collaborate on Work in One Place from Virtually Anywhere, w/ Confluence. Confluence Is Your Remote-Friendly Team Workspace Where.'
        },
        {
            id: 3,
            icon: <FaJsSquare />,
            header: 'JavaScript',
            text: 'JavaScript is a curly-braced, dynamically typed, prototype-based, object-oriented programming language. It started as the programming language for the web.'
        },
        {
            id: 4,
            icon: <FaReact />,
            header: 'React',
            text: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community.'
        },
        {
            id: 5,
            icon: <FaBootstrap />,
            header: 'Bootstrap',
            text: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.It contains CSS- and JavaScript. '
        },
        {
            id: 6,
            icon: <FaCss3 />,
            header: 'CSS3',
            text: 'CSS3 is the latest version of the CSS specification. CSS3 adds several new styling features and improvements to enhance the web presentation.'
        },
        {
            id: 2,
            icon: <GoDeviceCamera />,
            header: 'Photography',
            text: 'Photo captions, also known as cutlines, are a few lines of text used to explain and elaborate on published photographs. In some cases captions.'
        }
    ])
    return (
        <div className="projects">
            <div className="container">
                <div className="header_projects">
                    <div className="common">
                        <h3 className="header">{heading.textHeader}</h3>
                        <h1 className="mainHeader">{heading.subHeader}</h1>
                        <p className="mainContant">{heading.text}</p>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="row">
                        {state.map(info => (
                            <div className="col-4">
                                <div className="projects_box">
                                    <div className="commonIcons">{info.icon}</div>
                                    <div className="projects_box_header">{info.header}</div>
                                    <div className="projects_box_p">{info.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;