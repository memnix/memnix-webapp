import { ApiResponse, IUser } from "../types/api"
import { ENDPOINTS } from "./endpoints"
import { getWithToken } from "./utils"

export async function getMe(token): Promise<ApiResponse<IUser>> {
	const res = await getWithToken(ENDPOINTS.Users.me, token)
	if (res.ok) {
		return res.json()
	}
	throw new Error(await res.text())
}
