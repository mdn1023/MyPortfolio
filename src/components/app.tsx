import React from "react";
import Header from "./header";
import Splash from "./splash";
import Portfolio from "./portfolio";
import Experience from "./experience";

import '../css/body.css';
import '../css/body.css';

const App: React.FC = () => {
  return (
    <div className="full-height">
        <Header />
        <body>
            <section id='splash'>
                <Splash></Splash>
            </section>
            <section id='experience'>
              <Experience></Experience>
            </section>
        </body>
    </div>
  );
};

export default App;
