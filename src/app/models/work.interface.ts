export interface Work {
	id			: number;
	alias		: string;
	title		: string;
	description	: string;
	imgs		: string[];
	technology	: Technology[]
}

export interface Technology {
	name : string;
	icon : string;
}
