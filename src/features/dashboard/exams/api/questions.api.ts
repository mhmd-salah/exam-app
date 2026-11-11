"use client";
import { API_BASE } from "@/shared/constants/api.constants";
import { getSession } from "next-auth/react";
import { HEADERS } from "@/shared/constants/api.constants";
import { IApiResponse } from "@/shared/types/api";
import { TApiQuestionsPayload } from "../types/questions.types";

export async function fetchQuestions(id: string): Promise<IApiResponse<TApiQuestionsPayload>> {
  const session = await getSession();
  const token = session?.token;

  const res = await fetch(`${API_BASE}/questions/exam/${id}`, {
    method: "GET",
    headers: {
      ...HEADERS.jsonBody,
      ...(token && HEADERS.authorization(token)),
    },
  });

  if (!res.ok) {
    throw new Error("Failed fetch Questions ");
  }

  const data = (await res.json()) as Promise<IApiResponse<TApiQuestionsPayload>>;
  return data;
}
