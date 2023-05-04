


const BASE_URL ='http://localhost:3000'

export const fetchProject = async () => {
	const res = await fetch(`${BASE_URL}/project`)
	if (!res.ok) {
		throw new Error(`Could not get data, reason: ${res.status} ${res.statusText}`)
	}
	return await res.json()
}