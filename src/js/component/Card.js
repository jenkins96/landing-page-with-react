// Importing React && PropType
import React from "react";
import PropType from "prop-types";
// Card Component
const Card = props => {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src={props.image}
				alt="Card image cap"></img>
			<div className="card-body">
				<h4 className="card-title">{props.title}</h4>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};
Card.PropType = {
	image: PropType.string,
	title: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string
};
// Exporting Component
export default Card;
