import React from "react";
import wave from "../../images/wave.svg";
import "./footer.css";
import forceFullLogo from "../../images/force-logo.png";
import socials from "../../utils/socials";
import navLinks from "../../utils/navigation";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer" style={{ backgroundImage: `url(${wave})` }}>
			<div className="footer-left">
				<img src={forceFullLogo} alt="FORCE full logo" />
			</div>
			<div className="footer-right">
				<div className="footer-right-top">
                <div className="footer-right-top-left">
                <ul>
                    {
                        navLinks.map((navLink,id)=>(
                            <li key={id}>
                                <Link to={navLink.link}>{navLink.text}</Link>
                            </li>
                        ))
                    }
                </ul>
                </div>
                <div className="footer-right-top-right">
					<span className="footer-right-top-text">
						<span>We Strive to success</span>
					</span>
                    </div>
				</div>
				<div className="footer-right-bottom">
					{socials.map((social, id) => (
						<a
							href={social.link}
							title={social.text + "/" + social.username}
							key={id}
							target="_blank"
							rel="noreferrer"
						>
							{social.icon}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
