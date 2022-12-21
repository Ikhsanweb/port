import React from 'react';
import './About.css';

import NextOneLayout from '../component/NextOneLayout';
import AboutItem from '../component/AboutItem';

import ExperienceItem from '../component/ExperienceItem';

import PortfolioItem from '../../resource/PortfolioItem.js';

const About = () => {
  return (
    <NextOneLayout headTitle="About Me">
      <div className="aboutme__text">
        {/* <h3 className="aboutme__text-one">Hi, my name is Ikhsan</h3> */}
        {/* <h3 className="aboutme__text-two">
          I am a freelance <span>Full Stack Developer</span> and
          <span>Graphic Designer</span> from Indonesia. Curently, I'm working on
          creating web design, banners, posters, certificates, frames, logos and
          many more. I`m also learning <span>React Native</span> to build Mobile
          Apps while strenghening my own portfolio.
        </h3> */}

        <h3 className="aboutme__text-one"></h3>
        <h3 className="aboutme__text-two">
          Highly motivated self taught <span>Full Stack Developer</span> with
          ability to learn and collaborate. Eager to obtain new chalanging
          technologies while expanding my learning to achieve better user
          experience. Currently knows several programming languages such as
          javascript with ReactJS, HapiJS, NodeJS and database with Postgresql.
        </h3>
      </div>

      <div className="aboutme__line" />
      <div className="aboutme__cards">
        {PortfolioItem.aboutItems.map((item) => (
          <AboutItem
            key={`aboutItem ${item.id}`}
            aboutIcon={item.aboutIcon}
            aboutTitle={item.aboutTitle}
            aboutSubtitle={item.aboutSubtitle}
          />
        ))}
      </div>

      <div className="line__tag-cover-right">
        <div className="line__tag line__margintwo"></div>
      </div>

      <div className="experience__wrapper">
        {PortfolioItem.expItems.map((item) => (
          <ExperienceItem
            key={`expItem ${item.id}`}
            expItemTitle={item.expItemTitle}
            expIcon={item.expIcon}
          />
        ))}
      </div>
    </NextOneLayout>
  );
};

export default About;
