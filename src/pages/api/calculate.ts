import type { NextApiRequest, NextApiResponse } from "next";

import { CalcResult } from "../../types/abstract";

const handler = (req: NextApiRequest, res: NextApiResponse<CalcResult>) => {
	res.status(200).json({
		status: 200,
		data: [
			{
				id: "123",
				name: "Chris",
				amount: 15
			}
		]
	});
};

export default handler;
