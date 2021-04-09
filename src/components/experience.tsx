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
                                August 2020 - Present
                            </div>
                        </div>
                        <div className='experience-responsibilities'>
                            <ul>
                                <li className='responsibilities-row'>Operate a subscription-based <mark className='purple-text'>Discord</mark> hub serving <mark className='red-text'>over 200 clients</mark> focused on obtaining <mark className='yellow-text'>highly valued, limited-stock products.</mark></li>
                                <li className='responsibilities-row'>Developed low-latency product avaibility monitors with a sophisticated ping-messaging system to delivery high quality notifications to clients.</li>
                                <li className='responsibilities-row'>Leveraged PuppeteerJS' web-scraping API to analyze and identify profitable investment opportunities for clients.</li>
                            </ul>
                        </div>
                        <div className='experience-technology-stack-container'>
                            <div className='technology-stack-item'>
                                Typescript
                            </div>
                            <div className='technology-stack-item'>
                                ReactJS
                            </div>
                            <div className='technology-stack-item'>
                                PuppeteerJS
                            </div>
                            <div className='technology-stack-item'>
                                ReactJS
                            </div>
                            <div className='technology-stack-item'>
                                Golang
                            </div>
                            <div className='technology-stack-item'>
                                Discord API
                            </div>
                            <div className='technology-stack-item'>
                                Twitter API
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="experience-section">
                <div className='experience-inner-container'>
                    <img src='../../images/experience_logos/bah.png' className='experience-logo'></img>
                    <div className='experience-info-container'>
                        <div className='experience-info-company-name'>
                                Booz Allen Hamilton
                        </div>
                        <div className='experience-tenure-container'>
                            <div className='experience-tenure-left'>
                                Full Stack Software Engineer, Senior Consultant
                            </div>
                            <div className='experience-tenure-right'>
                                November 2019 - August 2020
                            </div>
                        </div>
                        <div className='experience-tenure-container'>
                            <div className='experience-tenure-left'>
                                Full Stack Software Engineer, Consultant
                            </div>
                            <div className='experience-tenure-right'>
                                October 2018 - November 2019
                            </div>
                        </div>
                        <div className='experience-responsibilities'>
                            <ul>
                                <li className='responsibilities-row'>Owned a backend payment microservices responsible for processing <mark className='red-text'>thousands of transactions per day</mark>, while upholding strict PCI security standards through <mark className='yellow-text'>RSA-based encrpytion</mark> of sensitive user data.</li>
                                <li className='responsibilities-row'>Increased project revenue and improved user checkout experience by implementing an upsell flow, allowing users to purchase all necessary items for their reservation.</li>
                                <li className='responsibilities-row'>Created ReactJS web pages to serve the needs of the external customer-facing and internal hub sites.</li>
                                <li className='responsibilities-row'>Implemented CassandraQL Data Access Object (DAO) interfaces to expose APIs for data handling.</li>
                            </ul>
                        </div>
                        <div className='experience-technology-stack-container'>
                            <div className='technology-stack-item'>
                                Golang
                            </div>
                            <div className='technology-stack-item'>
                                Javascript
                            </div>
                            <div className='technology-stack-item'>
                                Jest
                            </div>
                            <div className='technology-stack-item'>
                                ReactJS
                            </div>
                            <div className='technology-stack-item'>
                                HTML/CSS
                            </div>
                            <div className='technology-stack-item'>
                                CassandraQL
                            </div>
                            <div className='technology-stack-item'>
                                AWS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;