import Head from "next/head";
import React from "react";

export const HeadContent: React.FC = () => {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="There is no such thing as a free lunch!" />
			<meta name="theme-color" content="#FFFFFF"></meta>
			<link rel="icon" href="/favicon.ico" />
			<title>MealSplit</title>
		</Head>
	);
};

export default HeadContent;
