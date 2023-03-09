import { baseUrl } from "@common/utils/utils"
import { ENDPOINTS } from "@common/utils/endpoints"

export async function get({ redirect }) {
	return redirect(baseUrl + ENDPOINTS.Security.discord, 302)
}
