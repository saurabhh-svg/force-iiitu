import React, { useContext, useEffect } from "react";
import Button from "../../components/Button/Button";
import man from "../../images/man.svg";
import teamwork from "../../images/teamwork.svg";
import socials from "../../utils/socials";
import "./home.css";
import Dots from "../../images/Dots";
import { ArrowRight } from "react-feather";
import Row, { Col } from "../../Layout/Responsive";
import Card from "../../components/Card/Card";
import GlobalContext from "../../Context/GlobalContext";
import { office } from "../../utils/team";

const Home = () => {
	const { setHeaderStyle, breakpoint } = useContext(GlobalContext);
	useEffect(() => {
		window.scrollTo(0, 0);
		setHeaderStyle({ color: "var(--white)" });
	}, [setHeaderStyle]);

	let team = [...office];

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
						{socials.map((social, id) => (
							<a
								href={social.link}
								title={social.text + "/" + social.username}
								target="_blank"
								rel="noreferrer"
								key={id}
							>
								{social.icon}
							</a>
						))}
					</div>
				</div>
			</section>
			<section className="home-about">
				<Dots className="home-about-topimg" />
				<div className="home-about-head" data-aos="fade-right">
					<h1>
						Who we are?
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="home-about-content">
					<p>
						FORCE - Forum of Computer Engineers is the association
						of computer science in IIIT Una.
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
			<section className="home-about">
				<Dots className="home-about-topimg" />
				<div className="home-about-head" data-aos="fade-left">
					<h1>
						What we do?
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="home-about-content">
					<p>
						FORCE is the association of computer science enthusiasts
						of IIITU, aimed at lending a helping hand to all the
						beginners in the world of programming.
					</p>
					<p>
						We have BITERATION, a student chapter on codechef of
						IIIT Una to provide students a platform to compete
						against the best of minds.Our other events include short
						and long challenges,a technical fest MERAKI and a yearly
						hackathon.
					</p>
				</div>
			</section>
			<section className="home-team">
				<div className="home-about-head home-team-head" data-aos="fade-right">
					<h1 style={{ color: "var(--indigo-100)" }}>Our Team</h1>
					<Button
						variant="outline"
						text={
							<>
								View All <ArrowRight />
							</>
						}
						link="/team"
						color="light-blue"
					/>
				</div>
				<div className="home-team-body">
					<Row>
						{team.map((person, id) => (
							<Col lg={33} md={50} sm={100} key={id}>
								<Card {...person} />
							</Col>
						))}
					</Row>
				</div>
			</section>
			<section className="home-about">
				<Dots className="home-about-topimg" />
				<div className="home-about-head" data-aos="fade-right">
					<h1>
						Why should you join us?
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="home-about-content">
					<ul className="home-about-content-ul">
						<li>To enhance your CODING SKILLS</li>
						<li>To persue future in FULL STACK DEVELOPMENT </li>
						<li>To excel at GRAPHIC DESIGNING</li>
						<li>To enhance your SPEAKING SKILLS </li>
						<li>To learn TEAMWORK</li>
					</ul>
					{!(breakpoint("mobile") || breakpoint("tab")) && (
						<img
							src={teamwork}
							alt="Team Work"
							className="home-about-content-joinimg"
						/>
					)}
				</div>
			</section>
		</main>
	);
};

export default Home;
