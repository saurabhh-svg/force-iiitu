import React, { useEffect } from "react";
import Button from "../../components/Button/Button";
import man from "../../images/man.svg";
import socials from "../../utils/socials";
import "./home.css";
import Dots from "../../images/Dots";

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className="home">
			<section className="home-hero">
				<div
					className="home-hero-image"
					style={{ backgroundImage: `url(${man})` }}
				></div>
				<div className="home-hero-content">
					<span
						className="home-hero-content__h1"
						data-aos="fade-right"
					>
						FORCE
					</span>
					<span
						className="home-hero-content__h2"
						data-aos="fade-right"
					>
						Forum of computer engineers
					</span>
					<span
						className="home-hero-content__buttons"
						data-aos="zoom-in"
					>
						<Button
							text="Know More"
							color="light-blue"
							link="/about"
						/>
						<Button
							text="Contact Us"
							color="light-blue"
							variant="outline"
							link="/contact"
						/>
					</span>
					<div
						className="home-hero-content-socials"
						data-aos="fade-up"
					>
						{socials.map((social) => (
							<a
								href={social.link}
								title={social.text + "/" + social.username}
								target="_blank"
								rel="noreferrer"
							>
								{social.icon}
							</a>
						))}
					</div>
				</div>
			</section>
			<section className="home-about">
				<Dots className="home-about-topimg" />
				<div className="home-about-head">
					<h1>
						Who we are?
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="home-about-content">
					<p>
						FORCE -Forum of Computer Engineers is the association of
						computer science in IIIT Una.
					</p>
					<p>
						Our main objective is to encourage open source software,
						improving coding culture, project building and
						introducing new platforms to work on. It provides
						opportunity for students to broaden their knowledge in
						the field of computer science and interact with other
						student who have shared interest.
					</p>
				</div>
			</section>
		</main>
	);
};

export default Home;
