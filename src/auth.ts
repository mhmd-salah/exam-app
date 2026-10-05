import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { loginSchema } from "./features/auth/schemas/login.schema";
import { login } from "./features/auth/api/login.api";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
    error: "/login",
  },

  session: {
    strategy: "jwt",
  },

  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        username: {},
        password: {},
      },

      // async authorize(credentials) {
      //   const result = loginSchema.safeParse({
      //     username: credentials?.username,
      //     password: credentials?.password,
      //   });

      //   if (!result.success) {
      //     throw new Error("Invalid username or password");
      //   }

      //   const data = await login(result.data);

      //   if (!data?.status || !data.payload) {
      //     throw new Error(data?.message || "Login failed");
      //   }

      //   return {
      //     id: data.payload.user.id,
      //     name: data.payload.user.username,
      //     user: data.payload.user,
      //     token: data.payload.token,
      //   };
      // },

      async authorize(credentials) {
        console.log("1️⃣ credentials:", credentials);

        const result = loginSchema.safeParse({
          username: credentials?.username,
          password: credentials?.password,
        });

        console.log("2️⃣ validation:", result);

        if (!result.success) {
          console.log("❌ ZOD ERROR:", result.error);
          throw new Error("Invalid username or password");
        }

        try {
          const data = await login(result.data);

          console.log("3️⃣ API DATA:", data);

          if (!data?.status || !data.payload) {
            console.log("❌ API LOGIN FAILED:", data);
            throw new Error(data?.message || "Login failed");
          }

          console.log("4️⃣ LOGIN SUCCESS");

          return {
            id: data.payload.user.id,
            name: data.payload.user.username,
            user: data.payload.user,
            token: data.payload.token,
          };
        } catch (error) {
          console.log("🔥 AUTHORIZE ERROR:", error);
          throw error;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user.user;
        token.token = user.token;
      }

      return token;
    },

    async session({ session, token }) {
      if (token.user) {
        session.user = token.user;
      }

      if (!session.token && token.token) {
        session.token = token.token;
      }

      return session;
    },
  },
};
