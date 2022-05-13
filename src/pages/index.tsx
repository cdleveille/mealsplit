import type { NextPage } from "next";
import React from "react";

import HeadContent from "../components/HeadContent";
import Main from "../components/Main";

const Home: NextPage = () => {
	return (
		<>
			<HeadContent />
			<Main />
		</>
	);
};

export default Home;
