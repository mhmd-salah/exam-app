"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchDiplomaExamsById } from "../api/diplomaExams.api";

export default function useGetDiplomaExams({ id }: { id: string }) {
  return useQuery({
    queryKey: ["diplomaExams", id],
    queryFn: async () => {
      return fetchDiplomaExamsById({ id });
    },
  });
}
