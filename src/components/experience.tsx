import React from 'react';
import '../css/experience.css';

const Experience: React.FC = () => {
    return (
        <div className="experience-container">
            <div className="experience-label">
                WORK EXPERIENCE
            </div>
            <div className="experience-section">
                <div className='experience-inner-container'>
                    <img src='../../images/experience_logos/rocketcooks.png' className='experience-logo'></img>
                    <div className='experience-info-container'>
                        <div className='experience-info-company-name'>
                                Rocket Cooks
                        </div>
                        <div className='experience-tenure-container'>
                            <div className='experience-tenure-left'>
                                Co-Owner, CTO
                            </div>
                            <div className='experience-tenure-right'>
                                August 2019 - Present
                            </div>
                        </div>
                        <div className='experience-responsibilities'>
                            - Responsible for propping up technical infrastructure to assist server of over 200 subscription-based clients in e-commerce
                        </div>
                        <div className='experience-technology-stack-container'>
                            <div className='technology-stack-item'>
                                Golang
                            </div>
                            <div className='technology-stack-item'>
                                Javascript
                            </div>
                            <div className='technology-stack-item'>
                                AWS
                            </div>
                            <div className='technology-stack-item'>
                                Typescript
                            </div>
                            <div className='technology-stack-item'>
                                ReactJS
                            </div>
                            <div className='technology-stack-item'>
                                Express
                            </div>
                            <div className='technology-stack-item'>
                                MongoDB
                            </div>
                            <div className='technology-stack-item'>
                                Golang
                            </div>
                            <div className='technology-stack-item'>
                                Discord API
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;