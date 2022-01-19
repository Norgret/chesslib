
export class API {
	static baseURL = '127.0.0.1:3000';

	static get() {
		return fetch(`${API.baseURL}`, {
			method: 'GET',
			// body: body ? JSON.stringify(body) : "",
			headers: {
				'content-type': 'application/json'
			}
		});
	}

	static post() {
		return fetch(`${API.baseURL}`, {
			method: 'POST',
			// body: body ? JSON.stringify(body) : "",
			headers: {
				'content-type': 'application/json'
			}
		});
	}
}