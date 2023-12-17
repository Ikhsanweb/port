// React Functional Component
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

import CertA1 from '../../assets/certA1.png';
import PosC5 from '../../assets/posC1.png';

import PortfolioItem from '../../resource/PortfolioItem.js';
import HomeContentFiller from '../../comp/component/homeContentFiller';

// ------------------------------ Images ----------------------------
import Logo from '../../assets/logoA1.png';
import ProjectItem from '../../comp/component/ProjectItem';
import ItemAnim from '../../comp/component/ItemAnim.jsx';

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

          <div className="project-items">
            {/* {PortfolioItem.projectItem.map((item) => (
              <ProjectItem
                key={item.id}
                img={item.img}
                linkTo={item.linkTo}
                projectName={item.projectName}
                isLink={item.isLink}
              />
            ))} */}

            {PortfolioItem.projectItemAnim.map((item) => (
              <ItemAnim
                key={item.id}
                click={item.click}
                itemTitle={item.itemTitle}
                itemSubtitle={item.itemSubtitle}
                itemImg={item.itemImg}
                itemId={item.id}
                isLink={item.isLink}
                isSingleLink={item.isSingleLink}
                singleLink={item.singleLink}
              />
            ))}

            {/* <div className="project-item">
              <Link to="/portfolio" className="project-item-link">
                <div className="project-item-top">
                  <img
                    src={PosC5}
                    alt="project-picture"
                    className="project-picture"
                  />
                </div>
                <div className="project-item-bottom">
                  <span>Project Name</span>
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
