import { getWithToken } from "./utils"
import { ENDPOINTS } from "./endpoints"
import { ApiResponse, IUser } from "../types/api"

export async function getMe(token): Promise<ApiResponse<IUser>> {
	const res = await getWithToken(ENDPOINTS.Users.me, token)
	if (res.ok) {
		return res.json()
	}
	throw new Error(await res.text())
}
