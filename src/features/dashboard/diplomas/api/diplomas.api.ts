

import { getSession } from "next-auth/react";
import { API_BASE } from "@/shared/constants/api.constants";







interface IProps{
  pageParam:number
}

export async function fetchDiplomas({ pageParam = 1 }: IProps) {
  const session = await getSession()

  const token =  session?.token
  
  const res = await fetch(`${API_BASE}/diplomas?page=${pageParam}&limit=12`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token&& {Authorization:`Bearer ${token}`})
    }
  })

  if (!res.ok) {
    throw new Error("Failed fetch Diplomas from server")
  }
  
  return res.json()
  
}