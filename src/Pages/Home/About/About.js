import React from 'react';

const About = () => {
    const [state] = React.useState({ subHeader: "About Me", text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste nobis porro pariatur in cumque' })

    const [header] = React.useState([
        {id:1, title:'Name', text: 'TareqImtiaz Ravien'},
        {id:2, title:'Email', text: 'tareqimtiaz.ravien@gmail.com'},
        {id:3, title:'Phone', text: '+880 1722 430 485'},
        {id:4, title:'LinkedIn', text: 'web-developers.30'}
    ])
    return (
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="mainHeader">{state.subHeader}</h1>
                    <p className="mainContant">{state.text}</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="about_img">
                            <img src="/images/RavienJ.png" alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about_info">
                            <h1>Hey, There</h1>
                            <div className="about-info-p1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni placeat aut cupiditate nesciunt error impedit id consequatur deserunt, delectus quaerat voluptatibus non sit accusamus ea, consequuntur corporis, maiores consectetur perferendis!
                            </div>
                            <div className="about-info-p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ex?
                            </div>
                            <div className="info-contacts">
                                <div className="row">
                                    {header.map(info => (
                                        <div className="col-6">
                                            <strong>{info.title}</strong>
                                            <p>{info.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;