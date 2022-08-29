// React Functional Component
import React from 'react';
import './Home.css';
// import HomeBar from '../Stuff/HomeBar';
// import ItemAnimTwo from '../../comp/component/ItemAnimTwo';
import {BsPersonFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';

import PortfolioItem from '../../resource/PortfolioItem.js'
import HomeContentFiller from '../../comp/component/homeContentFiller'

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
            <h4>Graphic Designer</h4>
            <h4>Junior Front End Developer</h4>
          </div>
          <div className="homeTitleLogo">
            <img src={Logo} className="homeLogo" />
          </div>
        </div>
        {/*<div className="line__tag-cover-right">*/}
  				{/*<div className="line__tag"></div>*/}
  			{/*</div>*/}
      </div>
      <div className="homeDown">
        <div className="homeContent-wrapper">
        	{PortfolioItem.homeContent.map((item) => 
  					<HomeContentFiller 
  						key={`homeContent ${item.id}`}
  						linkTo={item.linkTo}
  						homeContentIcon={item.homeContentIcon}
  						homeContentLink={item.homeContentLink}
  					/>
  				)}
        </div>
        <div className="partiall">
          <div className="homeDown__line"></div>
            <h2 className="homeDown__h2">Projects</h2>
          <a href="https://miniguideweb.netlify.app/">
            <h3 className="homeDown__h3">Minimized Info Guide</h3>
          </a>
          <Link to="/portfolio">
            <h3 className="homeDown__h3">Graphic Design</h3>
          </Link>
        </div>
        {/*<div className="homeDown__title">*/}
          {/*<h3>My Projects</h3>*/}
        {/*</div>*/}
        {/*<div className="homeDown__content">*/}
          
          
          {/*<div className="homeDown__content__item">*/}
            {/*<div className="homeDown__content__item__insider">
              <div className="homeDown__content__item__insider__left">
                
              </div>
              <div className="homeDown__content__item__insider__right">
            
              </div>
            </div>*/}

            {/*<div className="homeDown__content__item__absolutepinch__left"></div>*/}
            {/*<div className="homeDown__content__item__absolutepinch__right"></div>*/}
            
            {/*<div className="homeDown__content__item__absolute">
              <div className="homeDown__content__item__absolute__top">
              </div>
              <div className="homeDown__content__item__absolute__down">
              
              </div>

              <h4 className="demo">Demo Project</h4>
              <h4 className="demotype">Website</h4>
            </div>*/}

          {/*</div>*/}

        {/*</div>*/}
      </div>
    </div>
  );
};

export default Home;
