import { user as UserType } from "../types/user";

declare module "next-auth" {
  interface User {
    user: UserType;
    token: string;
  }
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: UserType;
    token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: UserType;
    token: string;
  }
}

declare module "next-auth" {
  interface JWT {
    user: UserType;
    token: string;
  }
}
