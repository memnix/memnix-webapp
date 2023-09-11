import { ENDPOINTS } from "./endpoints";
import { baseUrl } from "./utils";
import { ApiResponse, IUser, LoginResponse } from "~/utils/api";
import { useUserStore } from "~/stores/userStore";

export async function login(
  email: string,
  password: string,
): Promise<LoginResponse | null> {
  const { data, status } = await useFetch<LoginResponse>(
    ENDPOINTS.Security.login,
    {
      method: "POST",
      baseURL: baseUrl,
      body: {
        email,
        password,
      },
    },
  );

  if (!data || status.value !== "success") {
    return null;
  }

  return data.value;
}

export async function getUser(
  token: string,
): Promise<ApiResponse<IUser> | null> {
  const { data, status } = await useFetch<ApiResponse<IUser>>(
    ENDPOINTS.Users.me,
    {
      method: "GET",
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  );

  if (!data || status.value !== "success") {
    return null;
  }

  return data.value;
}

export async function isConnectionValid(token: string): Promise<boolean> {
  const userStore = useUserStore();

  const user = await getUser(token);
  if (!user) {
    return false;
  }

  userStore.user = user.data;
  return true;
}
