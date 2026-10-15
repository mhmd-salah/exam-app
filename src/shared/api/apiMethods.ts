import { API_BASE } from "../constants/api.constants";
import { IApiResponse } from "../types/api";

export async function Post<TBody, TResponse>(
  endpoint: string,
  body: TBody
): Promise<IApiResponse<TResponse>> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const result = await response.json();

  if (!response.ok) {
    return {
      status: false,
      message: result?.message ?? "Request failed",
      code: response.status,
    };
  }
  return {
    status: true,
    message: result?.message ?? "Request Successful",
    payload: result,
  };
}
