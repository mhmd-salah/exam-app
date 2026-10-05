import z from "zod";
import { loginSchema } from "../schemas/login.schema";
import { User } from "./user";

export type LoginFields = z.infer<typeof loginSchema>;

export interface LoginResponse {
  user: User;
  token: string;
}
