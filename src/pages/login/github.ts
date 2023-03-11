import { ENDPOINTS } from "@common/utils/endpoints"
import { baseUrl } from "@common/utils/utils"

export async function get({ redirect }) {
	return redirect(baseUrl + ENDPOINTS.Security.github, 302)
}
