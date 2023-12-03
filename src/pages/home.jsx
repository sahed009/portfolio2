import React from "react";
import Navbar from "../components/navbar";
import Heroheader from "../components/heroheader";
import Footer from "../components/footer";

const home = () => {
	return (
		<div className="h-full bg-black text-white overflow-hidden">
			<div className="relative">
				<div className="absolute right-0 md:top-16 md:right-40 rounded-full p-10 animate-pulse ">
					<img
						src={require("../assets/cube.png")}
						alt=""
						className="max-w-[48px]  h-auto"
					/>
				</div>

                <div className="absolute right-0 top-[550px] md:top-[400px] md:right-10 rounded-full p-10 animate-spin">
					<img
						src={require("../assets/abstract-shape.png")}
						alt=""
						className="max-w-[48px]  h-auto"
					/>
				</div>
			</div>
			<Navbar />
			<div className="container">
				<Heroheader />
			</div>
            
			<hr className="border border-[#70C878] mt-20" />
			<Footer />
		</div>
	);
};

export default home;
