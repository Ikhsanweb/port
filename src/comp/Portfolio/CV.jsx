import React from 'react'

import NextOneLayout from '../component/NextOneLayout'

const CV = () => {

	const [portContentCv, setPortContentCv] = React.useState()

	return (
		<NextOneLayout
			headTitle="CV"
		>
			<h1>CV</h1>
		</NextOneLayout>
	)
}

export default CV