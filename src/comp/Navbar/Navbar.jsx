import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {FiMenu} from 'react-icons/fi'

const Navbar = ({ navbarIsActive, setNavbarIsActive}) => {
	const [navbarIsExpanded, setNavbarIsExpanded] = React.useState(false) 
	
	return (
		<nav className={navbarIsExpanded ? "navbar responsive" : "navbar"} >
			<Link 
				to="/home" 
				onClick={() => setNavbarIsActive("home")} 
				className={navbarIsActive === "home" ? "navActive" : ""}
			>	
				Home
			</Link>
			<Link 
				to="/profile"
				onClick={() => setNavbarIsActive("profile")} 
				className={navbarIsActive === "profile" ? "navActive" : ""}
			>	
				About Me
			</Link>
			<Link 
				to="/portfolio"
				onClick={() => setNavbarIsActive("portfolio")} 
				className={navbarIsActive === "portfolio" ? "navActive" : ""}
			>	
				Portfolio
			</Link>
			<Link
				to="/service"
				onClick={() => setNavbarIsActive("service")} 
				className={navbarIsActive === "service" ? "navActive" : ""}
			>	
				Service
			</Link>
			<Link 
				to="/contact"
				onClick={() => setNavbarIsActive("contact")} 
				className={navbarIsActive === "contact" ? "navActive" : ""}
			>	
				Contact
			</Link>
			<a className="navbar-menu" onClick={() => setNavbarIsExpanded(!navbarIsExpanded)} ><FiMenu /></a>
		</nav>
	)
}

export default Navbar