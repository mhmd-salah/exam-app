import { useMutation } from "@tanstack/react-query";
import { TRegisterBody } from "../types/register";
import { register } from "../api/register.api";

export default function useRegister() {
  return useMutation({
    mutationFn: async (body: TRegisterBody) => {
      const res = await register(body);
      if (!res.status) {
        throw new Error(res.message || "Register failed");
      }
      return res;
    },
  });
}
