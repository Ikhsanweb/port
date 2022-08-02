import React from 'react'

import NextOneLayout from '../component/NextOneLayout'

const Frame = () => {

	const [portContentFrame, setPortContentFrame] = React.useState()

	return (
		<NextOneLayout
			headTitle="Frame"
		>
			<h1>Frame</h1>
		</NextOneLayout>
	)
}

export default Frame