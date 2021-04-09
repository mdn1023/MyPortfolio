import React from 'react';
import '../css/header.css';

const Sticky: React.FC = () => {
    return (
        <h1 className="sticky-inner">
            <div className="topnav">
                <div className="topnav-left">
                    <div className="logo">
                        <img src="../../images/bigmike_2.png" className='logo-image' width="100" height="100" />
                    </div>
                </div>
                <div className="topnav-right">
                    <div className="header-button">
                        <span>CONTACT</span>
                    </div>
                    <div className="header-button">
                        <span>RESUME</span>
                    </div>
                    <div className="header-button">
                        <span>PORTFOLIO</span>
                    </div>
                </div>
            </div>
        </h1>
    );
}

export default Sticky;