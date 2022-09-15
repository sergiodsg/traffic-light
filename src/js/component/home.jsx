import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [light, setLight] = useState(undefined)
	const [isPurple, setIsPurple]=useState(false)
	const handleOn = (newLight)=>{
		light == newLight ? setLight(undefined) : setLight(newLight);
	}

	const handleChange = ()=>{
		let colors = ["red","yellow","green","purple"]
		let i = 0
		setInterval(()=>{
			isPurple ? setLight(colors[i%4]) : setLight(colors[i%3]);
			i++
		},1000)
	}

	return (
		<div className="text-center">
			<div className="stick"></div>
			<div className={isPurple ? "traffic-light traffic-light-with-purple" : "traffic-light"}>
				<div className={light == "red" ? "lights red on-red" : "lights red obscured" } onClick={()=>{handleOn("red")}}></div>
				<div className={light == "yellow" ? "lights yellow on-yellow" : "lights yellow obscured"} onClick={()=>{handleOn("yellow")}}></div>
				<div className={light == "green" ? "lights green on-green" : "lights green obscured"} onClick={()=>{handleOn("green")}}></div>
				{isPurple && <div className={light == "purple" ? "lights purple on-purple" : "lights purple obscured"} onClick={()=>{handleOn("purple")}}></div>}
			</div>
			<button onClick={()=>handleChange()}>Change</button>
			<button onClick={()=>setIsPurple(!isPurple)}>Add Or Delete</button>
		</div>
	);
};

export default Home;