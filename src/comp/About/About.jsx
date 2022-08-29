import React from 'react'
import './About.css'
import ME from '../../assets/logoA1.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

import NextOneLayout from '../component/NextOneLayout'
import AboutItem from '../component/AboutItem'
import TopExplainItem from '../component/TopExplainItem'

import ExperienceItem from '../component/ExperienceItem'

import PortfolioItem from '../../resource/PortfolioItem.js'

const About = () => {
	return (
		<NextOneLayout
			headTitle="About Me"
		>
			<div className="aboutme__text">
				<h3 className="aboutme__text-one">Hi, my name is Ikhsan</h3>
				<h3 className="aboutme__text-two">I am a freelance <span>junior front end developer</span> and <span>graphic designer</span> from Indonesia. Curently, I'm working on creating web design, banners, posters, certificates, frames, logos and many more. I`m also learning <span>React Native</span> to build Mobile Apps while strenghening my own portfolio.</h3>
			</div>

			<div className="aboutme__line" />
			<div className="aboutme__cards">
				{PortfolioItem.aboutItems.map((item) => 
					<AboutItem 
						key={`aboutItem ${item.id}`}
						aboutIcon={item.aboutIcon} 
						aboutTitle={item.aboutTitle}
						aboutSubtitle={item.aboutSubtitle}
					/>
				)}
			</div>

			<div className="line__tag-cover-right">
				<div className="line__tag line__margintwo"></div>
			</div>

			<div className="experience__wrapper">
				{PortfolioItem.expItems.map((item) => 
					<ExperienceItem 
						key={`expItem ${item.id}`}
						expItemTitle={item.expItemTitle}
						expIcon={item.expIcon}
					/>
				)}
			</div>

		</NextOneLayout>
	)
}

export default About