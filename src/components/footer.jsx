import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const footer = () => {
	return (
		<div className="text-white w-full text-center py-8">
			<FontAwesomeIcon
				icon={faCopyright}
				className="text-[#70C878] mr-3 text-2xl"
			/>
			2023 Saheduzzaman. All rights reserved.
			<br />
			Unauthorized use of any materials on this website may violate
			copyright, trademark, and other laws.
		</div>
	);
};

export default footer;
