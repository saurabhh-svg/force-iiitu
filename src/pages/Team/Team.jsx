import React, { useContext, useEffect } from "react";
import Card from "../../components/Card/Card";
import GlobalContext from "../../Context/GlobalContext";
import group from "../../images/group.svg";
import Row, { Col } from "../../Layout/Responsive";
import team from "../../utils/team";
import "./team.css";

const Team = () => {
	const { setHeaderStyle } = useContext(GlobalContext);
	useEffect(() => {
		window.scrollTo(0, 0);
		setHeaderStyle({ color: "var(--black)" });
	}, [setHeaderStyle]);
	return (
		<main className="team">
			<section className="team-hero">
				<div className="team-hero-head">
					<span>Meet Our Team</span>
					<span>
						Our expert team is made up of creatives with technical
						knowhow, strategists who think outside the box and
						people who push beyond innovation.
					</span>
				</div>
				<div className="team-hero-body">
					<img src={group} alt="Group" />
				</div>
			</section>
			<section className="team-people">
				{team.map((group, id) => (
					<div className="team-group" key={id}>
						<h2>{group.title}</h2>
						<Row>
							{group.members.map((person, index) => (
								<Col lg={33} md={50} sm={100} key={index}>
									<Card {...person} />
								</Col>
							))}
						</Row>
					</div>
				))}
			</section>
		</main>
	);
};

export default Team;
