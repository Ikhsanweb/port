import React from 'react'
import './AboutItem.css'

const AboutItem = ({ aboutIcon, aboutTitle, aboutSubtitle}) => {
	return (
		<article className="aboutme__card">
			{aboutIcon}
			<h5>{aboutTitle}</h5>
			<small>{aboutSubtitle}</small>
		</article>
	)
}

export default AboutItem