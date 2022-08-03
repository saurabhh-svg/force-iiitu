import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import GlobalContext from "../../Context/GlobalContext";
import socials from "../../utils/socials";
import "./contact.css";

const Contact = () => {
	const { setHeaderStyle } = useContext(GlobalContext);
	useEffect(() => {
		setHeaderStyle({
			color: "var(--black)",
		});
	}, [setHeaderStyle]);

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
		<main className="contact">
			<section className="contact-mail">
				<h1>Send Us A Message</h1>
				<form onSubmit={handleSubmit}>
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
						variant="outline"
						color="black"
					/>
				</form>
			</section>
			<section className="contact-socials">
				<h1>Get In Touch</h1>
				<div className="contact-socials-container">
					{socials.map((social, id) => (
						<a
							href={social.link}
							title={social.text + "/" + social.username}
							className="contact-social"
							key={id}
						>
							<div>{social.icon}</div>
							<span>{social.username}</span>
						</a>
					))}
				</div>
			</section>
		</main>
	);
};

export default Contact;
