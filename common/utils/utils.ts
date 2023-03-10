export const baseUrl = "http://127.0.0.1:1815/v2"

export function post(url: string, body?: object) {
	return fetch(baseUrl + url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*"
		},
		body: JSON.stringify(body)
	})
}

export function getWithToken(url, token) {
	return fetch(baseUrl + url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + token
		}
	})
}

export function get(url) {
	return fetch(baseUrl + url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*"
		}
	})
}
