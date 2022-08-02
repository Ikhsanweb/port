import React from 'react'
import { Link } from 'react-router-dom'
import './ItemAnimTwo.css'
// import POSTER from '../../assets/cert8.png'


const ItemAnimTwo = ({ imgContent, imgText, imgId, imgParams }) => {
	return (
		<Link className="itemAnimTwo" to={`/portfolioContent/${imgParams}/portfolioContentDetail/${imgId}`}>
			<div className="itemAnimTwo__content">
				<div className="itemAnimTwo__content-pics">
					<div className="itemAnimTwo__content-picscover">
						<img src={imgContent} />
					</div>
				</div>
				<div className="itemAnimTwo__content-text">
					<div className="itemAnimTwo__content-textdiv">
						<h4>{imgText}</h4>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default ItemAnimTwo