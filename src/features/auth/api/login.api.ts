import { IApiResponse } from "@/shared/types/api";
import { LoginFields, LoginResponse } from "../types/auth";
import { API_BASE, HEADERS } from "@/shared/constants/api.constants";

export const login = async (credential: LoginFields) => {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: {
      ...HEADERS.jsonBody,
    },
    body: JSON.stringify(credential),
  });

  const payload: IApiResponse<LoginResponse> = await response.json();

  if (!response.ok) {
    throw new Error(payload.message || "login failed");
  }

  return payload;
};
