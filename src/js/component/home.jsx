import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const stylesLine = {	width: "4px",
						height: "15px"}
const Home = () => {
	return (
		<div className="container-fluid vh-100">
			<div className="bg-dark" style={stylesLine}></div>
		</div>
	);
};

export default Home;
