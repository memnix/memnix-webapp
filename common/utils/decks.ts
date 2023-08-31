import type {ApiResponse, IDeckList} from "../types/api"
import { ENDPOINTS } from "./endpoints"
import { getWithToken } from "./utils"

export async function getOwnedDeck(
	token: string
): Promise<ApiResponse<IDeckList>> {
	const res = await getWithToken(ENDPOINTS.Decks.owned, token)
	if (!res.ok) {
		throw new Error(await res.text())
	}
	return res.json()
}

export async function getLearningDeck(
	token: string
): Promise<ApiResponse<IDeckList>> {
	const res = await getWithToken(ENDPOINTS.Decks.learning, token)
	return res.json()
}
