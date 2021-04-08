import React from "react";
import Header from "./header";
import Body from "./body";
import '../css/body.css';

const App: React.FC = () => {
  return (
    <div className="full-height">
        <Header />
        <div className="body">
            <Body></Body>
        </div>
    </div>
  );
};

export default App;
