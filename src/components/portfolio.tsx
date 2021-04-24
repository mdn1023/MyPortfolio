import React from 'react';
import '../css/portfolio.css';

const Portfolio: React.FC = () => {
    return (
        <div className="portfolio-container">
            <div className='portfolio-section-container'></div>
            <div className="portfolio-label">
                PORTFOLIO
            </div>
            <div className='portfolio-section-container'>
                <div className="portfolio-item">
                    <div className="portfolio-item-content inner">
                        IMAGE GOES HERE
                    </div>
                    <div className="portfolio-item-label inner">
                        LABEL GOES HERE
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="portfolio-item-content inner">
                        IMAGE GOES HERE
                    </div>
                    <div className="portfolio-item-label inner">
                        LABEL GOES HERE
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="portfolio-item-content inner">
                        IMAGE GOES HERE
                    </div>
                    <div className="portfolio-item-label inner">
                        LABEL GOES HERE
                    </div>
                </div>
            </div>
            <div className='portfolio-section-container'></div>
        </div>
    );
}

export default Portfolio;