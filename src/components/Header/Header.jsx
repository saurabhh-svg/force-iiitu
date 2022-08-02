import React from "react";
import { Link } from "react-router-dom";
import favicon from "../../images/favicon.png";
import navLinks from "../../utils/navigation";
import "./header.css";

const Header = ({ style }) => {
	return (
		<header className="header" style={style}>
			<div className="header-left">
				<div className="header-left-image">
					<img src={favicon} alt="FORCE-IIITU" />
				</div>
				<div className="header-left-content">
					<span className="header-left-content__name">FORCE</span>
					<span className="header-left-content__subtitle">
						Forum for computer engineers
					</span>
				</div>
			</div>
			<div className="header-right">
				<nav className="header-right-nav header-nav">
					<ul className="header-nav-ul">
						{navLinks.map((navLink, id) => (
							<li key={id}>
								<Link to={navLink.link}>{navLink.text}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
