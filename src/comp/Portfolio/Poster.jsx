import React from 'react'

import NextOneLayout from '../component/NextOneLayout'
import portfolioItems from '../../resource/PortfolioItem.js'

const Poster = () => {

	const [portContentPoster, setPortContentPoster] = React.useState()

	React.useEffect(() => {
		const portfolioPoster = portfolioItems.portfolioItems[0] 
		setPortContentPoster(portfolioPoster)
	}, [portContentPoster])

	console.log(portContentPoster)

	return (
		<NextOneLayout
			headTitle="Poster"
		>
			<h1>Poster</h1>
		</NextOneLayout>
	)
}

export default Poster