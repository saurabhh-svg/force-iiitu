import React from "react";
import Button from "../../components/Button/Button";
import man from "../../images/man.svg";
import socials from "../../utils/socials";
import "./home.css";

const Home = () => {
	return (
		<main className="home">
			<section className="home-hero">
				<div
					className="home-hero-image"
					style={{ backgroundImage: `url(${man})` }}
				></div>
				<div className="home-hero-content">
					<span className="home-hero-content__h1">FORCE</span>
					<span className="home-hero-content__h2">
						Forum of computer engineers
					</span>
					<span className="home-hero-content__buttons">
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
					<div className="home-hero-content-socials">
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
		</main>
	);
};

export default Home;
