import { API_BASE, HEADERS } from "@/shared/constants/api.constants";
import { IApiResponse } from "@/shared/types/api";
import { getSession } from "next-auth/react";
import { TDiplomaExamsPayload } from "../types/diplomaExams.types";

interface IProps {
  id: string;
}

export async function fetchDiplomaExamsById({
  id,
}: IProps): Promise<IApiResponse<TDiplomaExamsPayload>> {
  const session = await getSession();
  const token = session?.token;

  const res = await fetch(`${API_BASE}/diplomas/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token && HEADERS.authorization(token)),
    },
  });

  if (!res.ok) {
    throw new Error("Failed fetch diploma exams from server");
  }

  const data = (await res.json()) as IApiResponse<TDiplomaExamsPayload>;
  return data;
}
