import React, { useContext, useEffect, useState } from "react";
import MaterialIcons from "../../components/MaterialIcons";
import GlobalContext from "../../Context/GlobalContext";
import "./progothon.css";
import progothonBG from "../../images/progothon.jpg";
import filecoin from "../../images/filecoin.png";
import solana from "../../images/solana.png";
import replit from "../../images/replit.png";
import Accordian from "../../Layout/Accordian/Accordian";
import Row, { Col } from "../../Layout/Responsive";
import ScrllToTop from "../../components/ScrollToTop/ScrllToTop";

const Progothon = () => {
	const { setHeaderStyle } = useContext(GlobalContext);
	const [asideBar, setAsideBar] = useState({
		style: {
			position: "unset",
			top: 0,
			left: 0,
			backgroundColor: "var(--pink)",
			color: "var(--white)",
		},
		index: "01",
		title: "About",
	});
	const [scheduleId, setScheduleId] = useState(0);
	const vh = window.innerHeight / 100;
	const faqs = [
		{
			question: "How many participants per team are allowed?",
			answer: "Maximum 3 participants in each team.",
		},
		{
			question: "Can a team consist of students from different colleges?",
			answer: "No, each member must be from the same college.",
		},
		{
			question: "Are there any restrictions on branches?",
			answer: "No, participants can be from any branch.",
		},
		{
			question:
				"Does each team member in a team be from the same year of college?",
			answer: "No, the team can be made up of members from different years.",
		},
		{
			question: "How long will this Prog-a-thon run?",
			answer: "Its duration is 48 hours.",
		},
		{
			question: "Will Prog-a-thon be conducted online or offline?",
			answer: "It is an offline/In-Person Hackathon.",
		},
	];
	const schedule = [
		{
			date: "27",
			month: "Sept",
			day: "Tuesday",
			time: "15.00 - 17.00",
			description:
				"Distribution of IDs to all participants and event coordinators.",
			color: "brown",
		},
		{
			date: "27-28",
			month: "Sept",
			day: "Tuesday-Wednesday",
			time: "17.00 - 20.00",
			description: "First day of Prog-a-thon",
			color: "blue",
		},
		{
			date: "28-29",
			month: "Sept",
			day: "Wednesday-Thursday",
			time: "17.00 - 20.00",
			description: "Second day of Prog-a-thon",
			color: "blue",
		},
		{
			date: "29",
			month: "Sept",
			day: "Thursday",
			time: "9.00 - 11.00",
			description:
				"Demonstration of each team's solution and results declaration",
			color: "green",
		},
	];
	const sponsors = [
		{
			image: filecoin,
			name: "FileCoin",
			link: "https://filecoin.io/",
		},
		{
			image: solana,
			name: "Solana",
			link: "https://solana.com/",
		},
		{
			image: replit,
			name: "Replit",
			link: "https://replit.com/",
		},
	];
	const rules = [
		"The number of members on each participating team is limited to three.",
		"It is a 48-hour In-Person hackathon.",
		"The panel of judges will focus on innovative solutions, technical aspects, working demonstrations, and FAQs.",
		"Each team will have 15 minutes to demonstrate their innovative solutions.",
	];
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://apply.devfolio.co/v2/sdk.js";
		script.async = true;
		script.defer = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);
	useEffect(() => {
		setHeaderStyle({
			color: "var(--white)",
		});
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 100 * vh && window.scrollY < 150 * vh) {
				setAsideBar((p) => ({
					...p,
					index: "01",
					title: "About",
					style: {
						...p.style,
						position: "fixed",
						backgroundColor: "var(--pink)",
						color: "var(--white)",
					},
				}));
			} else if (
				window.scrollY >= 150 * vh &&
				window.scrollY < 250 * vh
			) {
				setAsideBar((p) => ({
					...p,
					index: "02",
					title: "Rules",
					style: {
						...p.style,
						position: "fixed",
						backgroundColor: "var(--indigo)",
						color: "var(--white)",
					},
				}));
			} else if (
				window.scrollY >= 250 * vh &&
				window.scrollY < 350 * vh
			) {
				setAsideBar((p) => ({
					...p,
					index: "03",
					title: "Schedule",
					style: {
						...p.style,
						position: "fixed",
						backgroundColor: "var(--green)",
						color: "var(--white)",
					},
				}));
			} else if (
				window.scrollY >= 350 * vh &&
				window.scrollY < 450 * vh
			) {
				setAsideBar((p) => ({
					...p,
					index: "04",
					title: "Sponsors",
					style: {
						...p.style,
						position: "fixed",
						backgroundColor: "var(--blue)",
						color: "var(--white)",
					},
				}));
			} else if (
				window.scrollY >= 450 * vh &&
				window.scrollY < 525 * vh
			) {
				setAsideBar((p) => ({
					...p,
					index: "05",
					title: "F.A.Q.s",
					style: {
						...p.style,
						position: "fixed",
						backgroundColor: "var(--yellow)",
						color: "var(--black)",
					},
				}));
			} else {
				setAsideBar((p) => ({
					...p,
					style: {
						...p.style,
						position: "unset",
					},
				}));
			}
		});
	}, [setHeaderStyle, vh]);

	return (
		<main className="progothon">
			<section
				className="progothon-hero"
				style={{
					backgroundImage: `url(${progothonBG})`,
				}}
			>
				<div className="progothon-hero-container">
					<h1>Prog-o-thon</h1>
					<h3>For the students, by the students</h3>
					<div className="progothon-hero-btn">
						<div
							className="apply-button"
							data-hackathon-slug="YOUR-HACKATHON-SLUG"
							data-button-theme="light"
							style={{ height: " 44px", width: "312px" }}
						></div>
						<button
							className="progothon-hero-btn"
							onClick={() => {
								window.scrollTo(0, window.innerHeight);
							}}
						>
							<MaterialIcons>expand_more</MaterialIcons>
							<span>Know More</span>
						</button>
					</div>
				</div>
			</section>
			<main className="progothon-body">
				<aside className="progothon-aside" style={asideBar.style}>
					<div className="progothon-aside-container">
						<span>{asideBar.index}. </span>
						<span>{asideBar.title}</span>
					</div>
				</aside>
				<section className="progothon-body-content">
					<div className="progothon-body-section">
						<h1>About Prog-o-thon</h1>
						<p>
							In conjunction with the Technical Fest 2022, the
							Indian Institute of Information Technology Una will
							host the first-ever biggest hackathon,
							‘Prog-a-thon’.
							<br />
							Prog-a-thon is a hackathon that aims to solve
							institute-specific problems such as problem
							statements for attendance systems and other
							real-world issues. It is the intent of this
							hackathon to solve real-world problems as well as to
							help students gain teamwork experience, knowledge,
							and motivation to solve problems in their technical
							careers ahead.
						</p>
					</div>
					<div className="progothon-body-section">
						<h1>Rules</h1>
						<p>
							<ul>
								{rules.map((rule, id) => (
									<li key={id}>{rule}</li>
								))}
							</ul>
						</p>
					</div>
					<div className="progothon-body-section">
						<h1>Schedule</h1>
						<p>
							<div className="progothon-body-schedule">
								<div className="progothon-body-schedule__day">
									{schedule[scheduleId].day}
								</div>
								<div className="progothon-body-schedule__date">
									<span
										style={{
											color: `var(--${schedule[scheduleId].color})`,
										}}
									>
										{schedule[scheduleId].date}
									</span>
									<span>{schedule[scheduleId].month}</span>
								</div>
								<div className="progothon-body-schedule__time">
									<span>{schedule[scheduleId].time}</span>
								</div>
								<div className="progothon-body-schedule__p">
									<span
										style={{
											color: `var(--${schedule[scheduleId].color})`,
										}}
									>
										{schedule[scheduleId].description}
									</span>
								</div>
								<div className="progothon-body-schedule-btns">
									<button
										style={{
											border: `2px solid var(--${schedule[scheduleId].color})`,
											color: `var(--${schedule[scheduleId].color})`,
										}}
										onClick={() =>
											setScheduleId((p) =>
												p === 0
													? schedule.length - 1
													: p - 1
											)
										}
									>
										<MaterialIcons>
											chevron_left
										</MaterialIcons>
									</button>
									<button
										style={{
											border: `2px solid var(--${schedule[scheduleId].color})`,
											color: `var(--${schedule[scheduleId].color})`,
										}}
										onClick={() =>
											setScheduleId(
												(p) => (p + 1) % schedule.length
											)
										}
									>
										<MaterialIcons>
											chevron_right
										</MaterialIcons>
									</button>
								</div>
							</div>
						</p>
					</div>
					<div className="progothon-body-section">
						<h1>Our Sponsors</h1>
						<p className="progothon-sponsors">
							<Row>
								{sponsors.map((sponsor, id) => (
									<Col key={id} lg={50} md={50} sm={100}>
										<a
											href={sponsor.link}
											target="_blank"
											rel="noreferrer"
											className="progothon-sponsor"
										>
											<img
												src={sponsor.image}
												alt={sponsor.name}
											/>
										</a>
									</Col>
								))}
							</Row>
						</p>
					</div>
					<div className="progothon-body-section">
						<h1>Frequnetly Asked Questions</h1>
						<p className="progothon-faqs">
							{faqs.map((faq, id) => (
								<Accordian
									summary={faq.question}
									details={
										<>
											<div>Question: {faq.question}</div>
											<div>Answer: {faq.answer}</div>
										</>
									}
									key={id}
								/>
							))}
						</p>
					</div>
				</section>
			</main>
			<ScrllToTop />
		</main>
	);
};

export default Progothon;
