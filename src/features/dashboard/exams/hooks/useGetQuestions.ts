"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchQuestions } from "../api/questions.api";

export default function useGetQuestions(id: string) {
  return useQuery({
    queryKey: ["questions", id],
    queryFn: async () => {
      return fetchQuestions(id);
    },

    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    staleTime: 1000 * 60 * 5,
  });
}
