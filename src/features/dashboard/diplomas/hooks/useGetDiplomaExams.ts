"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchDiplomaExamsById } from "../api/diplomaExams.api";

export default function useGetDiplomaExams({ diplomaId }: { diplomaId: string }) {
  return useQuery({
    queryKey: ["diplomaExams", diplomaId],
    queryFn: async () => {
      return fetchDiplomaExamsById({ diplomaId });
    },
  });
}
