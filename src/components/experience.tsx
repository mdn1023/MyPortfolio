import React from 'react';
import '../css/experience.css';

const Experience: React.FC = () => {
    return (
        <div className="experience-container">
            <div className='experience-section-container'></div>
            <div className="experience-label">
                WORK EXPERIENCE
            </div>
            <div className='experience-section-container'>
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
                                    <li className='responsibilities-row'>Operate a subscription-based Discord hub serving over 200 clients focused on obtaining highly valued, limited-stock products.</li>
                                    <li className='responsibilities-row'>Developed low-latency product avaibility monitors integrated with a sophisticated ping-messaging system to delivery personalized notifications to clients.</li>
                                    <li className='responsibilities-row'>Implemented a "smart" proxy pool rotator algorithm to preserve proxy integrity & maintain 24/7 uptime of product monitors.</li>
                                    <li className='responsibilities-row'>Leveraged PuppeteerJS' web-scraping API to analyze & identify profitable investment opportunities for clients.</li>
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
            </div>
            <div className='experience-section-container'>
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
                                    <li className='responsibilities-row'>Owned a backend payment microservices responsible for processing thousands of transactions per day, while upholding strict PCI security standards through RSA-based encrpytion of sensitive user data.</li>
                                    <li className='responsibilities-row'>Increased project revenue & improved user checkout experience by implementing an upsell flow, allowing users to purchase all necessary items for their reservation.</li>
                                    <li className='responsibilities-row'>Created ReactJS web pages to serve the needs of both external customer-facing & internal hub sites.</li>
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
            <div className='experience-section-container'>
                <div className="experience-section">
                    <div className='experience-inner-container'>
                        <img src='../../images/experience_logos/twitch.png' className='experience-logo'></img>
                        <div className='experience-info-container'>
                            <div className='experience-info-company-name'>
                                    Twitch
                            </div>
                            <div className='experience-tenure-container'>
                                <div className='experience-tenure-left'>
                                    Software Engineering Intern
                                </div>
                                <div className='experience-tenure-right'>
                                    June 2018 - October 2018
                                </div>
                            </div>
                            <div className='experience-responsibilities'>
                                <ul>
                                    <li className='responsibilities-row'>Automated code review flow for the Edge team, responsible for maintaining the integrity & security of Twitch's internal API middleware.</li>
                                    <li className='responsibilities-row'>Leveraged GitHub, Slack & Jira APIs to track repository code changes, automate management of Jira ticket states, & delivering Slack notifications to team members regarding code reviews.</li>
                                </ul>
                            </div>
                            <div className='experience-technology-stack-container'>
                                <div className='technology-stack-item'>
                                    Golang
                                </div>
                                <div className='technology-stack-item'>
                                    GraphQL
                                </div>
                                <div className='technology-stack-item'>
                                    Javascript
                                </div>
                                <div className='technology-stack-item'>
                                    GitHub API
                                </div>
                                <div className='technology-stack-item'>
                                    Jira API
                                </div>
                                <div className='technology-stack-item'>
                                    Slack API
                                </div>
                                <div className='technology-stack-item'>
                                    AWS
                                </div>
                                <div className='technology-stack-item'>
                                    Terraform
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='experience-section-container'>
                <div className="experience-section">
                    <div className='experience-inner-container'>
                        <img src='../../images/experience_logos/amazon.png' className='experience-logo'></img>
                        <div className='experience-info-container'>
                            <div className='experience-info-company-name'>
                                    Amazon
                            </div>
                            <div className='experience-tenure-container'>
                                <div className='experience-tenure-left'>
                                    Software Development Engineer Intern
                                </div>
                                <div className='experience-tenure-right'>
                                    June 2017 - September 2017
                                </div>
                            </div>
                            <div className='experience-responsibilities'>
                                <ul>
                                    <li className='responsibilities-row'>Redesigned an internal web interface for vendors create, track, & deploy coupons for store inventory.</li>
                                    <li className='responsibilities-row'>Developed internal APIs for Amazon’s coupons inventory service to expose new performance metrics.</li>
                                </ul>
                            </div>
                            <div className='experience-technology-stack-container'>
                                <div className='technology-stack-item'>
                                    Java
                                </div>
                                <div className='technology-stack-item'>
                                    Spring Boot
                                </div>
                                <div className='technology-stack-item'>
                                    JSP
                                </div>
                                <div className='technology-stack-item'>
                                    AWS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='experience-section-container'>
                <div className="experience-section">
                    <div className='experience-inner-container'>
                        <img src='../../images/experience_logos/solvista.png' className='experience-logo'></img>
                        <div className='experience-info-container'>
                            <div className='experience-info-company-name'>
                                    Sol Vista
                            </div>
                            <div className='experience-tenure-container'>
                                <div className='experience-tenure-left'>
                                    Software Developer/Data Specialist
                                </div>
                                <div className='experience-tenure-right'>
                                    January 2017 - May 2017
                                </div>
                            </div>
                            <div className='experience-responsibilities'>
                                <ul>
                                    <li className='responsibilities-row'>Designed & implemented an internal employee user interface to streamline data management.</li>
                                    <li className='responsibilities-row'>Maintained over 40 scripts used to automate data extraction of PDF-formatted utility bills.</li>
                                    <li className='responsibilities-row'>Extensively tested the client-facing web application used to exchange compiled reports & utility data.</li>
                                </ul>
                            </div>
                            <div className='experience-technology-stack-container'>
                                <div className='technology-stack-item'>
                                    Java
                                </div>
                                <div className='technology-stack-item'>
                                    JavaFX
                                </div>
                                <div className='technology-stack-item'>
                                    Microsoft Suite API
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='experience-section-container'></div>
        </div>
    );
}

export default Experience;