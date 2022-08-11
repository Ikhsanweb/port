import React from 'react'
import './Exp.css'
import {BsPatchCheck} from 'react-icons/bs'

import NextOneLayout from '../component/NextOneLayout'
import ExperienceItem from '../component/ExperienceItem'
import TopExplainItem from '../component/TopExplainItem'

import PortfolioItem from '../../resource/PortfolioItem.js'

const Exp = () => {
	return (
		<NextOneLayout
			headTitle="Skills"
		>
			{/*<TopExplainItem
				helloTextMore=""
			>
			</TopExplainItem>*/}

			<div className="line__tag-cover-right">
				<div className="line__tag line__margintwo"></div>
			</div>

			<div className="experience__wrapper">
				{PortfolioItem.expItems.map((item) => 
					<ExperienceItem 
						key={`expItem ${item.id}`}
						expItemTitle={item.expItemTitle}
						expIcon={item.expIcon}
					/>
				)}
			</div>
		</NextOneLayout>
	)
}

export default Exp