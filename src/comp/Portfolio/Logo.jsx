import React from 'react'

import NextOneLayout from '../component/NextOneLayout'

const Logo = () => {

	const [portContentLogo, setPortContentLogo] = React.useState()

	return (
		<NextOneLayout
			headTitle="Logo"
		>
			<h1>Logo</h1>
		</NextOneLayout>
	)
}

export default Logo