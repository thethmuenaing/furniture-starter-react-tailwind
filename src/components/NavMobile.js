import React from "react";

//import data
import { navigation } from "../data";

const NavMobile = () => {
	return (
		<nav className="bg-white h-full w-full shadow-2xl">
			<ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
				{navigation.map((item, index) => {
					return (
						<li key={index}>
							<a className="text-xl font-medium capitalize" href="#header">
								{item.name}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default NavMobile;
