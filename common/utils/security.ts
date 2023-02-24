// Create a login request to the server
//
// @param {string} email
// @param {string} password
// @returns {Promise<{token: string}>}
import { post } from "./utils"
import { ENDPOINTS } from "./endpoints"

export async function login(email, password) {
	const res = await post(ENDPOINTS.Security.login, { email, password })
	if (res.ok) {
		return res.json()
	}
	throw new Error(await res.text())
}
