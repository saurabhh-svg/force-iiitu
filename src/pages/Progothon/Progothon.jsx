import React, { useContext, useEffect, useState } from "react";
import MaterialIcons from "../../components/MaterialIcons";
import GlobalContext from "../../Context/GlobalContext";
import "./progothon.css";
import progothonBG from "../../images/progothon.jpg";
import Accordian from "../../Layout/Accordian/Accordian";

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
			question: "How to register for the event?",
			answer: "For registering in the event you need to go to the website of Cybernauts and click on register.You will be redirected to the application form.",
		},
		{
			question: "How can I apply for project lead?",
			answer: "For applying as a project lead you need to register for the event and submit your project idea.The selection will be based on certain criteria.",
		},
		{
			question: "What will be the selection criteria for the event?",
			answer: "There is no selection criteria for the participants but the project leads will be selected on the basis of their project ideas ,skillset , knowledge of domain , and experience.",
		},
		{
			question: "When will the contribution period begin?",
			answer: "The contribution period will begin from 2nd half of October.",
		},
		{
			question: "How long will be the contribution period?",
			answer: "The contribution period will be 2 months long i.e. from October To December",
		},
	];
	const schedule = [
		{
			date: "27",
			month: "Sept",
			day: "Tuesday",
			time: "15.00 - 17.00",
			description:
				"ID distribution for participants and coordinators / Venue allocation / Slot distribution",
			color: "brown",
		},
		{
			date: "27-28",
			month: "Sept",
			day: "Tuesday-Wednesday",
			time: "17.00 - 20.00",
			description: "First Day for event",
			color: "blue",
		},
		{
			date: "28-29",
			month: "Sept",
			day: "Wednesday-Thursday",
			time: "17.00 - 20.00",
			description: "Second Day for event",
			color: "blue",
		},
		{
			date: "29",
			month: "Sept",
			day: "Thursday",
			time: "9.00 - 11.00",
			description: "Demo + Result",
			color: "green",
		},
	];
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
					title: "Schedule",
					style: {
						...p.style,
						position: "fixed",
						backgroundColor: "var(--green)",
						color: "var(--white)",
					},
				}));
			} else if (
				window.scrollY >= 250 * vh &&
				window.scrollY < 325 * vh
			) {
				setAsideBar((p) => ({
					...p,
					index: "03",
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
			</section>
			<main className="progothon-body">
				<aside className="progothon-aside" style={asideBar.style}>
					<span>{asideBar.index}</span>
					<span>{asideBar.title}</span>
				</aside>
				<section className="progothon-body-content">
					<div className="progothon-body-section">
						<h1>About Prog-o-thon</h1>
						<p>
							Prog-o-thon is an initiative by the Technical Clubs
							of IIIT Una to allow students to experience the
							power of open source. It is a 2 month program where
							the ideas submitted by you will be selected and the
							participants will be given chance to work on them
							with awesome mentors
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
						<h1>Frequnetly Asked Questions</h1>
						<p>
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
		</main>
	);
};

export default Progothon;
