// React Functional Component
import React from "react";
import { Link } from 'react-router-dom'
import './homeContentFiller.css'

// ------------------------------ HomeContentFiller ------------------------------ 

const HomeContentFiller = ({ linkTo, homeContentIcon, homeContentLink }) => {
	return (
		<Link to={`/${linkTo}`} className="homeContent-Filler">
			<div className="homeContentFillerWhite">
      	{homeContentIcon}
			</div>
			<div className="homeContentFillerBlack">
      	<h5 className="homeContent-Link">{homeContentLink}</h5>
			</div>
    </Link>
	)
}

export default HomeContentFiller
