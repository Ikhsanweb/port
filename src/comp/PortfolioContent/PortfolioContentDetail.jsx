import React from 'react'
import './PortfolioContentDetail.css'
// import POSTER from '../../assets/cert8.png'

import { useParams } from 'react-router-dom'

import NextOneLayout from '../component/NextOneLayout'

import portfolioItems from '../../resource/PortfolioItem.js'

const PortfolioContentDetail = () => {

	const [portfolioContentDetailHeadTitle, setPortfolioContentDetailHeadTitle] = React.useState()
	const [portfolioContentDetailContent, setPortfolioContentDetailContent] = React.useState([])

	const {imgPortId, portfolioId} = useParams()

	

	React.useEffect(() => {

		if (portfolioId == 1) {
			if (imgPortId == 11) {
				setPortfolioContentDetailContent(portfolioItems.portfolioItems[0].itemContent[0])
			} else if (imgPortId == 12) {
				setPortfolioContentDetailContent(portfolioItems.portfolioItems[0].itemContent[1])	
			} else if (imgPortId == 13) {
				setPortfolioContentDetailContent(portfolioItems.portfolioItems[0].itemContent[2])	
			} else if (imgPortId == 14) {
				setPortfolioContentDetailContent(portfolioItems.portfolioItems[0].itemContent[3])	
			} else if (imgPortId == 15) {
				setPortfolioContentDetailContent(portfolioItems.portfolioItems[0].itemContent[4])	
			} else if (imgPortId == 16) {
				setPortfolioContentDetailContent(portfolioItems.portfolioItems[0].itemContent[5])	
			} else {
				console.log("unknown loop and unknown location track 1")
			}
		} else if (portfolioId == 2) {
			if (imgPortId == 21) {
				setPortfolioContentDetailContent(portfolioItems.portfolioItems[1].itemContent[0])
			} else if (imgPortId == 22) {
				setPortfolioContentDetailContent(portfolioItems.portfolioItems[1].itemContent[1])	
			} else if (imgPortId == 23) {
				setPortfolioContentDetailContent(portfolioItems.portfolioItems[1].itemContent[2])	
			} else if (imgPortId == 24) {
				setPortfolioContentDetailContent(portfolioItems.portfolioItems[1].itemContent[3])	
			} else if (imgPortId == 25) {
				setPortfolioContentDetailContent(portfolioItems.portfolioItems[1].itemContent[4])	
			} else {
				console.log("unknown loop and unknown location track 2")
			}
		} else if (portfolioId == 3) {
			if (imgPortId == 31) {
				setPortfolioContentDetailContent(portfolioItems.portfolioItems[2].itemContent[0])
			} else if (imgPortId == 32) {
				setPortfolioContentDetailContent(portfolioItems.portfolioItems[2].itemContent[1])	
			} else if (imgPortId == 33) {
				setPortfolioContentDetailContent(portfolioItems.portfolioItems[2].itemContent[2])	
			} else {
				console.log("unknown loop and unknown location track 3")
			}
		} else if (portfolioId == 4) {
			if (imgPortId == 41) {
				setPortfolioContentDetailContent(portfolioItems.portfolioItems[3].itemContent[0])
			} else if (imgPortId == 42) {
				setPortfolioContentDetailContent(portfolioItems.portfolioItems[3].itemContent[1])	
			} else {
				console.log("unknown loop and unknown location track 4")
			}
		} else {
			console.log("unknown loop")
		}

	}, [])

	return (
		<NextOneLayout>
				<div className="portfolioContentDetail">
					<div className="line__tag-cover-right">
						<div className="line__tag"></div>
					</div>
					{/*{ portfolioContentDetailContent && <renderImage /> }*/}
					<div className="portfolioContentDetail__headtitle">
						<h2 className="portfolioContentDetail-headTitle">Head Title</h2>
					</div>
					<div className="portfolioContentDetail__wrapper">
						{portfolioContentDetailContent.imgContent ? portfolioContentDetailContent.imgContent.map((item) => 
							<div 
								className="portfolioContentDetail-imgcover"
								key={`imgContent-${item.deepId}`}
							>
								<img src={item.deepImg} className="portfolioContentDetail-img" />
							</div>
						) : ("")}
					</div>
					<div className="portfolioContentDetail-p">
						<p>{portfolioContentDetailContent.imgText}</p>
					</div>
				</div>
		</NextOneLayout>
	)
}

export default PortfolioContentDetail