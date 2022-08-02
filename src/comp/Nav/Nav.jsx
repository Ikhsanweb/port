import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {AiFillBook} from 'react-icons/ai'
import {AiFillProject} from 'react-icons/ai'
import {AiFillMail} from 'react-icons/ai'

const Nav = () => {
	const [activeNav, setActiveNav] = React.useState("#")
	return (
		<nav>
			<a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""} ><AiFillHome /></a>
			<a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""} ><FaUser /></a>
			<a href="#exp" onClick={() => setActiveNav("#exp")} className={activeNav === "#exp" ? "active" : ""} ><AiFillBook /></a>
			<a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""} ><AiFillProject /></a>
			<a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""} ><AiFillMail /></a>
		</nav>
	)
}

export default Nav