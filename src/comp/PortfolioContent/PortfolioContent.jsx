import React from 'react'
import './PortfolioContent.css'

import { useParams, Outlet } from 'react-router-dom'

import NextOneLayout from '../component/NextOneLayout'
import ItemAnimTwo from '../component/ItemAnimTwo'

import portfolioItems from '../../resource/PortfolioItem.js'

const PortfolioContent = () => {

	const [portfolioItem, setPortfolioItem] = React.useState()
	// const [renderItemContent, setRenderItemContent] = React.useState()
	const {portfolioId} = useParams()	
	// const modifiedParams = portfolioId - 1 ;
	// const portfolioParams = portfolioItems.portfolioItems[modifiedParams] 

	React.useEffect(() => {
		if(portfolioId == 1) {
			setPortfolioItem(portfolioItems.portfolioItems[0])
		} else if (portfolioId == 2) {
			setPortfolioItem(portfolioItems.portfolioItems[1])
		}	else if (portfolioId == 3) {
			setPortfolioItem(portfolioItems.portfolioItems[2])
		}else if (portfolioId == 4) {
			setPortfolioItem(portfolioItems.portfolioItems[3])
		} else {
			console.log("Nothing here")
		}
	}, [])

	return (
		<NextOneLayout
			headTitle="PortfolioContent"
		>
			<div className="line__tag-cover-right">
				<div className="line__tag line__margintwo"></div>
			</div>
			<div className="portfolioContent__wrapper">
				{portfolioItem && portfolioItem.itemContent.map((item) => 
					<ItemAnimTwo 
						key={`portfolioItemContent-${item.specId}`}
						imgContent={item.imgContent[0].deepImg}
						imgText={item.imgText}
						imgId={item.specId}
						imgParams={portfolioId}
					/>
				)}
			</div>
		</NextOneLayout>
	)
}

export default PortfolioContent