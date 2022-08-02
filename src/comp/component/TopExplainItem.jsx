import React from 'react'
import './TopExplainItem.css'

const TopExplainItem = ({ helloText, helloTextMore, children }) => {
	return (
		<div className="topexplain__text">
			<h3 className="topexplain__text-one">{helloText}</h3>
			<h3 className="topexplain__text-one-more">{helloTextMore}</h3>
			<h3 className="topexplain__text-two">{children}</h3>
		</div>
	)
}

export default TopExplainItem