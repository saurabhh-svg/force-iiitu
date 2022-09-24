import React from "react";

const Achievement = ({ title, image, participants }) => {
	return (
		<div className="achievement">
			<div className="achievement-image">
				<img src={image} alt={title} />
			</div>
			<div className="achievement-head">{title}</div>
			<div className="achievement-participants">
				{participants.map((person, id) => (
					<span key={id}>{person}</span>
				))}
			</div>
		</div>
	);
};

export default Achievement;
