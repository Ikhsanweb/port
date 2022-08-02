import React from 'react'
import './Portfolio.css'
import {IoIosArrowBack} from 'react-icons/io'

import NextOneLayout from '../component/NextOneLayout'
import ItemAnim from '../component/ItemAnim'

import portfolioItems from '../../resource/PortfolioItem.js'

const Portfolio = () => {
	return (
		<NextOneLayout
			headTitle="Portfolio"
		>
			<div className="portfolio__wrapper">
				{portfolioItems.portfolioItems.map((item) => 
					<ItemAnim 
						key={item.id}
						click={item.click}
						itemTitle={item.itemTitle}
						itemSubtitle={item.itemSubtitle}
						itemImg={item.itemImg}
						itemId={item.id}
					/>
				)}
			</div>

		</NextOneLayout>
	)
}

export default Portfolio