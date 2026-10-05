export const API_BASE = (
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://exam-app.elevate-bootcamp.cloud/api"
).replace(/\/+$/, "");

export const HEADERS = {
  jsonBody: {
    "Content-Type": "application/json",
  },
  authorization: (token: string) => ({
    Authorization: `Bearer ${token}`,
  }),
};
