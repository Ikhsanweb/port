// React Functional Component
import React from 'react';
import './Home.css';
import { BsPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import PortfolioItem from '../../resource/PortfolioItem.js';
import HomeContentFiller from '../../comp/component/homeContentFiller';

// ------------------------------ Images ----------------------------
import Logo from '../../assets/logoA1.png';

// ------------------------------ Home ------------------------------

const Home = () => {
  return (
    <div className="home">
      <div className="homeTop">
        <div className="homeTitle">
          <div className="homeTitleText">
            <h5>Hello I`m ..</h5>
            <h2>Muhammad</h2>
            <h2>Ikhsan</h2>
            <h4>Full Stack Developer</h4>
            <h4>Graphic Designer</h4>
          </div>
          <div className="homeTitleLogo">
            <img src={Logo} className="homeLogo" />
          </div>
        </div>
      </div>
      <div className="homeDown">
        <div className="homeContent-wrapper">
          {PortfolioItem.homeContent.map((item) => (
            <HomeContentFiller
              key={`homeContent ${item.id}`}
              linkTo={item.linkTo}
              homeContentIcon={item.homeContentIcon}
              homeContentLink={item.homeContentLink}
            />
          ))}
        </div>
        <div className="partiall">
          <div className="homeDown__line"></div>
          <h2 className="homeDown__h2">Projects</h2>
          <a href="https://miniguideweb.netlify.app/" className="a-down">
            <h3 className="homeDown__h3">Minimized Info Guide</h3>
          </a>
          <Link to="/portfolio" className="a-down">
            <h3 className="homeDown__h3">Graphic Design</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
