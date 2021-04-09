import React from 'react';
import Splash from "./splash";
import Portfolio from "./portfolio";

import '../css/body.css';

const Body: React.FC = () => {
    return (
        <body>
            <section id='one'>
                <Splash></Splash>
            </section>
            <section id='two'>
                <Portfolio></Portfolio>
            </section>
        </body>
    );
}

export default Body;