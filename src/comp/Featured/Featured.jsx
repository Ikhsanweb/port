import React from 'react'
import './Featured.css'
import FRA from '../../assets/fra5.jpg'

const Featured = () => {
	return (
		<section id="featured">
	    	<div className="container pul-featured">
		        <div className="pul-left">
		            <div className="pul-left-container">
		                <p className="pul-subtitle">Featured Project</p>
		                <a href="#" className="pul-featured-title">DesignCourse.com ReDesign</a>

		                <p className="pul-featured-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestiae, soluta autem nemo quae delectus quas? Excepturi.</p>
		            </div>
		        </div>
		        <img className="pul-right pul-sec-img" src={FRA} alt="Featured Project" />
	    	</div>
		</section>
	)
}

export default Featured