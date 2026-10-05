import { useMutation } from "@tanstack/react-query";
import { LoginFields } from "../types/auth";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "@/i18n/navigation";

export default function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (fields: LoginFields) => {
      const result = await signIn("credentials", {
        username: fields.username,
        password: fields.password,
        redirect: false,
        callbackUrl: "/diplomas",
      });

      if (!result?.ok) {
        throw new Error(result?.error || "invalid username or password");
      }

      const session = await getSession();

      return {
        result,
        role: session?.user?.role,
      };
    },
    onSuccess: (result) => {
      const isAdmin = result.role === "ADMIN" || result.role === "SUPER_ADMIN";
      const targetUrl = isAdmin ? "/dashboard" : "/diplomas";

      if (typeof window !== "undefined") {
        window.location.assign(targetUrl);
      }

      router.replace(targetUrl);
    },
  });
}
