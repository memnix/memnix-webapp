import { ENDPOINTS } from "@common/utils/endpoints"
import { baseUrl } from "@common/utils/utils"

export async function get({
	redirect
}: {
	redirect: (url: string, status?: number) => void
}) {
	return redirect(baseUrl + ENDPOINTS.Security.github, 302)
}
