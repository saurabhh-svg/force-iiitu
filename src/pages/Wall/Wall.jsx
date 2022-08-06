import React, { useContext, useEffect } from "react";
import GlobalContext from "../../Context/GlobalContext";
import Dots from "../../images/Dots";
import events from "../../utils/events";
import Card from "./Card";
import "./wall.css";
import "../Home/home.css";

const Wall = () => {
	const { setHeaderStyle } = useContext(GlobalContext);
	useEffect(() => {
		setHeaderStyle({
			color: "var(--black)",
		});
	}, [setHeaderStyle]);

	return (
		<main className="wall">
			<section className="wall-events">
				<div
					className="wall-head wall-events-head"
					data-aos="fade-right"
				>
					<h1>
						Our Legacy
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="wall-events-body">
					{events.map((event, id) => (
						<Card {...event} key={id} />
					))}
				</div>
			</section>
		</main>
	);
};

export default Wall;
