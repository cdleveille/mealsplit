export interface IParticipant {
	id: string;
	name: string;
	amount: number;
}

export interface IMeal {
	participants: IParticipant[];
	total: number;
	prorated: boolean;
}

export interface IResponse<T = any> {
	status: number;
	data: T;
}

export type CalcResult = IResponse<IParticipant[]>;
