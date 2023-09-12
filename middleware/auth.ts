import { isConnectionValid } from "~/utils/security";

export default defineNuxtRouteMiddleware(async () => {
  const token = useCookie("jwt-token")?.value;
  if (token && (await isConnectionValid(token))) {
    return navigateTo("/dashboard");
  }
});
