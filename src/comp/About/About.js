import React from 'react'
import './About.css'
import ME from '../../assets/logoA1.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

import NextOneLayout from '../component/NextOneLayout'
import AboutItem from '../component/AboutItem'
import TopExplainItem from '../component/TopExplainItem'

import PortfolioItem from '../../resource/PortfolioItem.js'

const About = () => {
	return (
		<NextOneLayout
			headTitle="About Me"
		>
			<div className="aboutme__text">
				<h3 className="aboutme__text-one">Hi, my name is Ikhsan</h3>
				<h3 className="aboutme__text-two">I am a freelance <span>graphic designer</span>, <span>junior front-end</span> and <span>back-end developer</span> from Indonesia. Curently, I'm working on creating web design, banners, posters, certificates, frames, logos and many more. I`m also learning <span>React Native</span> to build Mobile Apps while strenghening my own portfolio.</h3>
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
		</NextOneLayout>
	)
}

export default About