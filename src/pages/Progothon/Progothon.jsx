import React, { useContext, useEffect } from "react";
import MaterialIcons from "../../components/MaterialIcons";
import GlobalContext from "../../Context/GlobalContext";
import "./progothon.css";
import progothonBG from "../../images/progothon.jpg";

const Progothon = () => {
	const { setHeaderStyle } = useContext(GlobalContext);
	useEffect(() => {
		setHeaderStyle({
			color: "var(--white)",
		});
	}, [setHeaderStyle]);

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
		</main>
	);
};

export default Progothon;
