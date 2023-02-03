import React from "react";

export default function Bucketlist() {

    const handleCardEnter = (e) => {
        e.currentTarget.classList.add("card-open");
      };
    
      const handleCardLeave = (e) => {
        e.currentTarget.classList.remove("card-open");
      };

    return (
        <>
		  <div className="banner bucketlist coming-soon">

		<span className="bucketlistslogan"><div className="suitcase"><i className="fa-solid fa-suitcase"></i></div><h2>Onto the Next <br></br>Adventure...</h2></span>
<div className="polaroid-banner card" onMouseEnter={handleCardEnter}   onMouseLeave={handleCardLeave}>
	<div className="card-left">
		<img
			src={process.env.PUBLIC_URL + `/images/ruthsuitcase.jpeg`}
			alt="Ruth on the next adventure with a suitcase"
		/>
		<h2 className="travel_title2">Coming soon</h2>
	</div>   
	<div className="card-right">
		<h2 className="">Places to Visit</h2>
		<ul>
			<li><span className="fi fi-cl"></span> Chile</li>
			<li><span className="fi fi-pe"></span> Peru</li>
			<li><span className="fi fi-bo"></span> Bolivia</li>
			<li><span className="fi fi-co"></span> Colombia</li>
			<li><span className="fi fi-au"></span> Australia</li>
		</ul>
	</div>   
</div>
</div>
</>
    );

}