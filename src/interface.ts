export interface IResponse {
	status: string,
	data: Array<IProject>
}

export interface IProject {
	id: number,
	title: string,
	description: string,
	course: string,
	link: {
		github: string,
		live: string
	}
}