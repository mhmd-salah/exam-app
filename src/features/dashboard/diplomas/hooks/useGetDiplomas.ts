"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchDiplomas } from "../api/diplomas.api";

export default function useGetDiplomas() {
  return useInfiniteQuery({
    queryKey: ["diplomas"],
    queryFn: fetchDiplomas,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
  });
}
