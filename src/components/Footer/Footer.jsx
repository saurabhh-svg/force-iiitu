import React, { useState } from "react";
import "./footer.css";
import banner from "../../images/banner2.jpg";
import socials from "../../utils/socials";
import navLinks from "../../utils/navigation";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Footer = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		message: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((p) => ({ ...p, [name]: value }));
	};
	const handleSubmit = (e) => {
		e?.preventDefault();
		console.log(user);
		setUser({
			name: "",
			email: "",
			message: "",
		});
	};
	return (
		<footer
			className="footer"
			style={{
				backgroundImage: `linear-gradient(
			to top,
			rgba(46, 49, 65, 0.75),
			rgba(46, 49, 65, 0.75)
		),
		url(${banner})`,
			}}
		>
			<div className="footer-head">Get In Touch</div>
			<div className="footer-body">
				<div className="footer-body-left">
					<form className="footer-form" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Type your full name"
							required
							autoFocus
							name="name"
							value={user.name}
							onChange={handleChange}
						/>
						<input
							type="email"
							placeholder="Email Address"
							required
							name="email"
							value={user.email}
							onChange={handleChange}
						/>
						<textarea
							type="text"
							placeholder="Type your message here"
							required
							rows={5}
							name="message"
							value={user.message}
							onChange={handleChange}
						></textarea>
						<Button
							type="submit"
							text="Send Message"
							color="white"
						/>
					</form>
				</div>
				<div className="footer-body-right">
					<div className="footer-body-right-socials"></div>
					{socials.map((social, id) => (
						<div className="footer-body-right-social" key={id}>
							<div className="footer-body-right-social__icon">
								{social.icon}
							</div>
							<a
								href={social.link}
								target="_blank"
								className="footer-body-right-social__linktext"
								rel="noreferrer"
							>
								{social.linkText}
							</a>
						</div>
					))}
				</div>
			</div>
			<div className="footer-foot">
				<div className="footer-foot-made">
					<span>Made with ❤ by Development team.</span>
				</div>
				<div className="footer-foot-nav">
					<nav>
						{navLinks.map((nav) => (
							<Link to={nav.link}>{nav.text}</Link>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
	/* return (
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
	); */
};

export default Footer;
