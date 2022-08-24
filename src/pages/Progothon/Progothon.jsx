import React, { useContext, useEffect, useState } from "react";
import MaterialIcons from "../../components/MaterialIcons";
import GlobalContext from "../../Context/GlobalContext";
import "./progothon.css";
import progothonBG from "../../images/progothon.jpg";

const Progothon = () => {
	const { setHeaderStyle } = useContext(GlobalContext);
	const vh = window.innerHeight / 100;
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
				</section>
			</main>
		</main>
	);
};

export default Progothon;
