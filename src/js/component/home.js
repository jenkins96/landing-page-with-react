import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<div className="container">
				<Jumbotron />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}
