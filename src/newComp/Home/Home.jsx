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
      <div className="homeTitle">
        <div className="homeTitleText">
          <h5>Hello I`m ..</h5>
          <h2>Muhammad</h2>
          <h2>Ikhsan</h2>
          <h4>Graphic Designer</h4>
          <h4>Junior Developer</h4>
        </div>
        <div className="homeTitleLogo">
          <img src={Logo} className="homeLogo" />
        </div>
      </div>
      <div className="line__tag-cover-right">
				<div className="line__tag"></div>
			</div>
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
    </div>
  );
};

export default Home;
