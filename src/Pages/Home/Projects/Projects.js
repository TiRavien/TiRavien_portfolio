import React from 'react';
import { GoMarkGithub, GoDeviceCamera } from "react-icons/go";
import { FaJsSquare, FaReact, FaBootstrap, FaCss3 } from "react-icons/fa";

const Projects = () => {
    const [heading] = React.useState({ textHeader: 'PROJECTS', subHeader: 'My Projects', text: 'lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quia animi in fuga non earum voluptatum velit, possimus praesentium. Quas, corrupti nostrum facilis quidem vel dolore aspernatur asperiores eligendi veritatis?' });

    const [state] = React.useState([
        {
            id: 1,
            icon: <GoMarkGithub />,
            header: 'Web Development',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste nobis porro pariatur in cumque'
        },
        {
            id: 2,
            icon: <GoDeviceCamera />,
            header: 'Photography',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste nobis porro pariatur in cumque'
        },
        {
            id: 3,
            icon: <FaJsSquare />,
            header: 'JavaScript',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste nobis porro pariatur in cumque'
        },
        {
            id: 4,
            icon: <FaReact />,
            header: 'React',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste nobis porro pariatur in cumque'
        },
        {
            id: 5,
            icon: <FaBootstrap />,
            header: 'Bootstrap',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste nobis porro pariatur in cumque'
        },
        {
            id: 6,
            icon: <FaCss3 />,
            header: 'CSS3',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste nobis porro pariatur in cumque'
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