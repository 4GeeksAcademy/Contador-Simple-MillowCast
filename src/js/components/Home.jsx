import React, { useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Digit from "./Digit";
//create your first component
const Home = ({five, four, three, two, one}) => {
	
	return (
		<div className="counters d-flex fs-2 justify-content-center bg-dark text-success">
			<div className="clock mx-2 border border-secundary-subtle">
				<i className="fa-solid fa-clock"><img src="/src/img/clock.gif" alt="" /></i>
			</div>
			<Digit digit={five} />
			<Digit digit={four} />
			<Digit digit={three} />
			<Digit digit={two} />
			<Digit digit={one} />
			
		</div>
	);
};

export default Home;