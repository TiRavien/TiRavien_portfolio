import React from 'react';

const Menubar = () => {
    return (
        <nav className="menubar">
            <div className="container">
                <div className="menubar_container">
                    <ul className="menubar_left">
                        <div className="menubar_left_logo">
                            <img src="/images/logo.png" alt="logo" />
                        </div>
                    </ul>
                    <ul className="menubar_right">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Skills</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menubar;