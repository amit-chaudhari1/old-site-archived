import React from "react";
import { ScaleFade } from "@chakra-ui/react";

const PageTransition = ({ children }) => {
	return (
		<ScaleFade reverse in>
			{children}
		</ScaleFade>
	);
};

export default PageTransition;
