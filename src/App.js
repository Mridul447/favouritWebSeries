import React from "react";
import Card from "./Cards";
import Data from "./Data";
import "./App.css";

function eachCard(val) {
	return (
		<Card
			imgsrc={val.imgsrc}
			title={val.title}
			link={val.link}
			description={val.description}
		/>
	);
}
function App() {
	return (
		<>
			<h1 className="neons">Favourite Web-Series Collections</h1>

			<div className="container">{Data.map(eachCard)}</div>
		</>
	);
}

export default App;
