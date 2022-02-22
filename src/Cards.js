import React from "react";
import "./Cards.css";
function Card(props) {
	return (
		<>
			<div className="cards">
				<div className="card-img">
					<img src={props.imgsrc} alt="imageNetflix" />
				</div>
				<div className="card-detail">
					<div className="card-info">
						<h2 className="title">{props.title} </h2>
						<p className="description">{props.description}</p>
					</div>
					<div className="button">
						<a href={props.link} target="_blank">
							{" "}
							Click Here
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
