import React from 'react';

import ProgressBar from "@ramonak/react-progress-bar";

import '../css/splash.css';

const Splash: React.FC = () => {
    return (
        <div className="splash-container">
            <div className="splash-body">
                <div className="splash-child">
                    <h3 className="h3-header typewriter-1">Hi,</h3>
                    <h1 className="h1-header typewriter-2">I'm Mike Nguyen.</h1>
                    <div className="header-description typewriter-3">Full-Stack Developer / Entrepreneur / Sneakerhead / Dog Enthusiast</div>
                    <div className="arrow-container fade-in-delayed-2">
                        <span className="text">More About Me!</span>
                        <div>
                        {/* <div className='circle-border'> */}
                            <a href='#portfolio'>
                                <div className="chevron"></div>
                                <div className="chevron"></div>
                                <div className="chevron"></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="splash-child">
                    <div className="progress-bar-container fade-in-delayed">
                        <div className="progress-bar-container-label">
                            My Skills & Expertise:
                        </div>
                        <div className="progress-bar">
                            <div className="progress-bar-label">Back-end</div>
                            <ProgressBar completed={85} baseBgColor={'#373737'} height={'8px'} labelSize={'0px'} bgColor={'#D2B4DE'} labelColor={'#FF3C3C'}/>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-bar-label">Front-end</div>
                            <ProgressBar completed={50} baseBgColor={'#373737'} height={'8px'} labelSize={'0px'} bgColor={'#D29AE8'} labelColor={'#90FF63'}/>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-bar-label">Javascript</div>
                            <ProgressBar completed={80} baseBgColor={'#373737'} height={'8px'} labelSize={'0px'} bgColor={'#BE6FFE'} labelColor={'#EFD81D'}/>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-bar-label">Golang</div>
                            <ProgressBar completed={75} baseBgColor={'#373737'} height={'8px'} labelSize={'0px'} bgColor={'#A341F3'} labelColor={'#6AD6E3'}/>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-bar-label">ReactJS</div>
                            <ProgressBar completed={55} baseBgColor={'#373737'} height={'8px'} labelSize={'0px'} bgColor={'#9329EB'} labelColor={'#A539FF'}/>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-bar-label">MongoDB</div>
                            <ProgressBar completed={60} baseBgColor={'#373737'} height={'8px'} labelSize={'0px'} bgColor={'#7600D8'} labelColor={'#589636'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Splash;