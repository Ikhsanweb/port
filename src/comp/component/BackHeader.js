import React from 'react'
import './component.css'
import {IoIosArrowBack} from 'react-icons/io'

const BackHeader = () => {
	return (
		<div className="portfolio__head">
			<div className="portfolio__head-back"><IoIosArrowBack className="head-back-icon" /></div>
			<div className="portfolio__head-title"><h3>Portfolio</h3></div>
		</div>
		<section id="portfolio">
			<div className="container portfolio__container">
				<div className="portfolio__head">
					<div className="portfolio__head-back"><IoIosArrowBack className="head-back-icon" /></div>
					<div className="portfolio__head-title"><h3>Portfolio</h3></div>
				</div>
				<div className="portfolio__body">
					<a className={posterIsClick ? "portfolio__body-item" : "portfolio__body-item portfalse"} onClick={() => setPosterIsClick(!posterIsClick)} >
						<div className={posterIsClick ? "portfolio__body-item-up-true" : "portfolio__body-item-up-true portfalse"}>
							<h2>Poster</h2>
						</div>
						<div className={posterIsClick ? "portfolio__body-item-down-true" : "portfolio__body-item-down-true portfalse"}>
							<div className={posterIsClick ? "portfolio__body-item-down-true-imgcover" : "portfolio__body-item-down-true-imgcover portfalse"}>
								<img src={POSTER} className={posterIsClick ? "portfolio__body-item-down-true-img" : "portfolio__body-item-down-true-img portfalse"} />
							</div>
							<div className="portfolio__body-item-down-true-explained">
								<h3 className={posterIsClick ? "portfolio__body-item-down-true-explained-text" : "portfolio__body-item-down-true-explained-text portfalse"} >Having a good looking poster? </h3>
								<h3 className={posterIsClick ? "portfolio__body-item-down-true-explained-text2" : "portfolio__body-item-down-true-explained-text2 portfalse"} >Come Here</h3>
							</div>
						</div>
					</a>
				</div>
			</div>
		</section>
		<section id="about">
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-box">
						<div className="about__me-box-inner">
							<div className="about__me-box-inner-front">
								<img className="about__me-image" src={LOGO} alt="logo" />
							</div>
							<div className="about__me-box-inner-back">
								<div className="about__me-me">
									<img className="about__me-me-image" src={ME} alt="logo" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>1+ Year Working</small>
						</article>

						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>15+ Nation Wide</small>
						</article>
						
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>10+ Completed</small>
						</article>
					</div>

					<p>Ini adalah layanan Dokter. Lorem ipsum dolor sit amet, constecture adipiscing elit. Curabitur tristique lorem eu consectetur facilisis. Donec non nisi scelerisque, lacina turpis vitae, maximus eros.</p>
					<a className="btn btn-primary">Let's Talk</a>
				</div>
			</div>
		</section>
		<section id="exp">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Front End Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheck />
							<h4>HTML</h4>
							<small className="text-dark">Experienced</small>
						</article>
						<article className="experience__details">
							<BsPatchCheck />
							<h4>CSS</h4>
							<small className="text-dark">Intermediate</small>
						</article>
						<article className="experience__details">
							<BsPatchCheck />
							<h4>Javascript</h4>
							<small className="text-dark">Experienced</small>
						</article>
						<article className="experience__details">
							<BsPatchCheck />
							<h4>Bootstrap</h4>
							<small className="text-dark">Experienced</small>
						</article>
						<article className="experience__details">
							<BsPatchCheck />
							<h4>React JS</h4>
							<small className="text-dark">Intermediate</small>
						</article>
						<article className="experience__details">
							<BsPatchCheck />
							<h4>React Native</h4>
							<small className="text-dark">Beginner</small>
						</article>
					</div>
				</div>
				<div className="experience__backend">
					<h3>Back End Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheck />
							<h4>Node JS</h4>
							<small className="text-dark">Beginner</small>
						</article>
						<article className="experience__details">
							<BsPatchCheck />
							<h4>Monggo DB</h4>
							<small className="text-dark">Beginner</small>
						</article>
						<article className="experience__details">
							<BsPatchCheck />
							<h4>Djanggo</h4>
							<small className="text-dark">Intermediate</small>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BackHeader