import { getWithToken } from "./utils"
import { ENDPOINTS } from "./endpoints"
import {ApiResponse,  IDeckList} from "../types/api";

export async function getOwnedDeck(token):  Promise<ApiResponse<IDeckList>> {
	const res = await getWithToken(ENDPOINTS.Decks.owned, token)
	if (!res.ok) {
		throw new Error(await res.text())
	}
	return res.json()
}

export async function getLearningDeck(token): Promise<ApiResponse<IDeckList>> {
	const res = await getWithToken(ENDPOINTS.Decks.learning, token)
	return res.json()
}
