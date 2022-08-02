import React from 'react'
import './Contact.css'

import NextOneLayout from '../component/NextOneLayout'


import PortfolioItem from '../../resource/PortfolioItem.js'

const Contact = () => {
	return (
		<NextOneLayout
			headTitle=""
		>
			
			<div className="contact__wrapper">
				<div className="contact__one">
					<div className="contact__title">
						<h2>Find me on</h2>
					</div>
					<div className="contact__iconwrapper">
						{PortfolioItem.socmedItems.map((item) => 
							<a 
								key={`socmedItem-${item.id}`}
								href={item.socmedLink} 
							>
								<div className="contact__iconcover">
									{item.socmedIcon}
									<h3>{item.socmedName}</h3>
								</div>
							</a>
						)}
					</div>
				</div>
				<div className="contact__two">
					<div className="contact__two-cover">
						<h3 className="contact__two-textone">PEMATANGSIANTAR</h3>
						<h3 className="contact__two-textone">SUMATERA UTARA</h3>
						<h3 className="contact__two-textone">INDONESIA</h3>
						<br></br>
						<h3 className="contact__two-texttwo">Singosari Street, Sumber Sari alley</h3>
						<h3 className="contact__two-texttwo">ZIP Code : 21111</h3>
					</div>
					<div className="contact__two-cover">
						<h3 className="contact__two-texttwo">(+62) 882-0153-27390</h3>
						<h3 className="contact__two-texttwo">ikhsan.dev147@gmail.com</h3>
					</div>
				</div>
			</div>
		</NextOneLayout>
	)
}

export default Contact