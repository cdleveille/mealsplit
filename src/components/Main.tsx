import React from "react";

import { Button } from "@mui/material";

import { Config } from "../helpers/config";
import { IMeal } from "../types/abstract";

const testMeal: IMeal = {
	participants: [
		{ name: "Person 1", amount: 15.15 },
		{ name: "Person 2", amount: 10 },
		{ name: "Person 3", amount: 20 }
	],
	total: 60
};

const calculate = async () => {
	const res = await fetch(`${Config.DOMAIN}/api/calculate`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(testMeal)
	});

	const data = await res.json();
	console.log(res, data);
};

export const Main: React.FC = () => {
	return (
		<main>
			<Button
				className="button"
				variant="outlined"
				onClick={async () => {
					await calculate();
				}}
			>
				Calculate
			</Button>
		</main>
	);
};

export default Main;
