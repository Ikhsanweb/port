import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import {FiMenu} from 'react-icons/fi'
import {FaFacebook} from 'react-icons/fa'

import {FaInstagram} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {FaTwitter} from 'react-icons/fa'

import './NextOneLayout.css'

const NextOneLayout = ({headTitle, children}) => {
	const [isNextNavClicked, setIsNextNavClicked] = React.useState(true)
	const Navigate = useNavigate()
	return (
		<section id="nextOne">
			<div className="container nextOne__container">
				<div className="nextOne__head">
					<div className="nextOne__head-back"><a onClick={() => Navigate(-1)}><IoIosArrowBack className="nextOne__head-back-icon" /></a></div>
					<div className="nextOne__head-title"><h3>{headTitle}</h3></div>
					<div className="nextOne__head-navbar">
						<div className="nextOne__head-navbar-menu">
							<FiMenu onClick={() => setIsNextNavClicked(!isNextNavClicked)} className="nextOne__head-navbar-menu-icon" />
						</div>
						<div className={ isNextNavClicked ? "nextOne__head-navbar-responsive-menu" : "nextOne__head-navbar-responsive-menu nextfalse" }>
							<ul>
								<li>
									<Link to="/" replace={true}>Home</Link>
								</li>
								<li>
									<Link to="/profile" replace={true}>Profile</Link>
								</li>
								<li>
									<Link to="/contact" replace={true}>Contact Me</Link>
								</li>
							</ul>
						</div>		
					</div>
				</div>
				<div className="nextOne__body">
					{children}
				</div>
				<div className="nextOne__footer">
					<div className="nextOne__footer-line"></div>
					<div className="nextOne__footer-links">
						<a 
							href="https://www.instagram.com/ikhsan_personalportfolio?r=nametag" 
							className="nextOne__footer-links-soc"
						>
							<FaInstagram />
						</a>
						<a 
							href="https://github.com/ikhsanweb" 
							className="nextOne__footer-links-soc"
						>
							<AiFillGithub />
						</a>
						<a 
							href="https://www.linkedin.com/mwlite/in/muhammad-ikhsan-1b2468247"
							className="nextOne__footer-links-soc"
						>
							<AiFillLinkedin />
						</a>
						<a 
							href="https://twitter.com/" 
							className="nextOne__footer-links-soc"
						>
							<FaTwitter />
						</a>
					</div>
					<div className="nextOne__footer-footer">
						<h4 className="nextOne__footer-footer-text">Muhammad Ikhsan 2022. All Rights Reserved</h4>
					</div>
				</div>
			</div>
		</section>
	)
}

export default NextOneLayout