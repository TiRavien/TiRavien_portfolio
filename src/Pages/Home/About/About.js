import React from 'react';

const About = () => {
    const [state] = React.useState({ subHeader: "About Me", text: "I'm Md Tareq Imtiaz Ravien as a Full Stack Web Developer, Student, Learner & entrepreneur" })

    const [header] = React.useState([
        {id:1, title:'Name', text: 'TareqImtiaz Ravien'},
        {id:2, title:'Email', text: 'tareqimtiaz.ravien@gmail.com'},
        {id:3, title:'Phone', text: '+880 1722 430 485'},
        {id:4, title:'LinkedIn', text: 'http://surl.li/auqli'}
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
                            <img src="/images/IMG_4161.png" alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about_info">
                            <h1>Hey, There</h1>
                            <div className="about-info-p1">T i Ravien’s front-end portfolio handles complicated developmental skills. However, the site itself is clear and straightforward, using simple icons and images. Ravien also offers an option that allows viewers to see his resume, which is located at the entry-point of his site.
                            </div>
                            <div className="about-info-p2">This is helpful for those who don’t want to scroll through all of his quirky animations.
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