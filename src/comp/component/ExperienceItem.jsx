import React from 'react'
import './ExperienceItem.css'

const ExperienceItem = ({ expItemTitle, expItemRank }) => {

	// const [expItemBarFillControler, setExpItemBarFillControler] = React.useState(expItemBarFill)

	return (
		<div className="experienceItem">
			<div className="experienceItem__title">
				<h3>{expItemTitle}</h3>
				<h3 className="experienceItem__rank-text">{expItemRank}</h3>
			</div> 
			{/*<div className="experienceItem__bar">
				<div className={expItemRank === "Beginner" ? "experienceItem__bar-fill experienceItem-widthd" : expItemRank === "Intermediate" ? "experienceItem__bar-fill experienceItem-widthc" : expItemRank === "Advance" ? "experienceItem__bar-fill experienceItem-widthb" : expItemRank === "Master" ? "experienceItem__bar-fill experienceItem-widtha" : "experienceItem__bar-fill" }></div>
				<h3 className="experienceItem__bar-text">{expItemRank === "Beginner" ? 60 : expItemRank === "Intermediate" ? 70 : expItemRank === "Advance" ? 80 : expItemRank === "Master" ? 90 : "" }%</h3>
			</div>
			<div className="experienceItem__rank">
				<h3 className="experienceItem__rank-text">{expItemRank}</h3>
			</div>*/}
		</div>
	)
}

export default ExperienceItem