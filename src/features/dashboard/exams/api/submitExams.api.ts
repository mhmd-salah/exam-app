import { API_BASE } from "@/shared/constants/api.constants";
import { IApiResponse } from "@/shared/types/api";
import { getSession } from "next-auth/react";

export interface ISubmitExamPayload {
  examId: string;
  answers: {
    questionId: string;
    answerId: string;
  }[];
  startedAt: string;
}

export async function submitExam(
  payload: ISubmitExamPayload
): Promise<IApiResponse<{ score: string }>> {
  const session = await getSession();
  const token = session?.token;

  const res = await fetch(`${API_BASE}/submissions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to submit exam");
  }

  const data: IApiResponse<{ score: string }> = await res.json();
  return data;
}
