export interface IMeal {
	participants: IParticipant[];
	total: number;
}

export interface IParticipant {
	name: string;
	amount: number;
}

export interface IMealCalcResult extends IMeal {
	participants: IParticipantCalcResult[];
}

export interface IParticipantCalcResult extends IParticipant {
	proratedAmount: number;
	evenSplitAmount: number;
}
