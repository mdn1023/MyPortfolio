import React from 'react';
import '../css/header.css';

const Sticky: React.FC = () => {
    const [selectedTab, setSelected] = React.useState("none");
    React.useEffect(() => {
        document.title = `${selectedTab} `;
    });

    return (
        <h1 className="sticky-inner">
            <div className="topnav">
                <div className="topnav-left">
                    <div className="logo">
                        <img src="../../images/bigmike_2.png" className='logo-image' width="90" height="90" />
                    </div>
                </div>
                <ul className="topnav-right">
                    <li className='header-list-item'>
                        <div className="header-button">
                            <span>CONTACT</span>
                        </div>
                    </li>
                    <li className='header-list-item'>
                        <div className="header-button">
                            <span>RESUME</span>
                        </div>
                    </li>
                    <li className='header-list-item'>
                        <a className="header-button" href='#portfolio'>
                            <span>PORTFOLIO</span>
                        </a>
                    </li>
                    <li className='header-list-item'>
                        <a className="header-button" href='#experience' onClick={() => {setSelected("experience")}}>
                            <span>EXPERIENCE</span>
                        </a>
                    </li>
                </ul>
            </div>
        </h1>
    );
}

export default Sticky;