import React from "react";
import Sticky from './sticky';

const Header: React.FC = () => {
  const [isSticky, setSticky] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (ref && ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
        <Sticky></Sticky>
      </div>
    </React.Fragment>
  );
};

export default Header;
