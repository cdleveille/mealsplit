import type { NextApiRequest, NextApiResponse } from "next";
import { IMeal, IMealCalcResult, IParticipant, IParticipantCalcResult } from "../../types/abstract";

const handler = (req: NextApiRequest, res: NextApiResponse<IMealCalcResult | string>) => {
	try {
		if (!isValidRequestBody(req.body)) return res.status(400).send("Error: Invalid request body!");

		const results = getCalculationResults(req.body);
		res.status(200).json(results);
	} catch (error: unknown) {
		res.status(500).send(`Error: ${error}`);
	}
};

const isValidRequestBody = (meal: IMeal): boolean => {
	if (isEmpty(meal.participants) || isEmpty(meal.total)) return false;

	meal.participants.map((participant) => {
		if (isEmpty(participant.name) || isEmpty(participant.amount)) return false;
	});

	return true;
};

const getCalculationResults = (meal: IMeal): IMealCalcResult => {
	const participants: IParticipantCalcResult[] = [];

	const subtotal = getSubtotal(meal.participants);

	const extra = meal.total - subtotal;
	const evenSplitExtraAmount = extra / meal.participants.length;

	meal.participants.map((participant) => {
		const proratedExtraAmount = extra * (participant.amount / subtotal);

		participants.push({
			name: participant.name,
			amount: participant.amount,
			proratedAmount: +(participant.amount + proratedExtraAmount).toFixed(2),
			evenSplitAmount: +(participant.amount + evenSplitExtraAmount).toFixed(2)
		} as IParticipantCalcResult);
	});

	return { participants, total: meal.total } as IMealCalcResult;
};

const getSubtotal = (participants: IParticipant[]): number => {
	if (participants.length === 1) return participants[0].amount;
	return participants[0].amount + getSubtotal(participants.slice(1));
};

const isEmpty = (value: any): boolean => {
	return [undefined, null, "", 0].includes(value);
};

export default handler;
