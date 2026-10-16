import { TRegisterFormData } from "../schemas/register.schema";
import { User } from "./user";

export type TSendEmailVerificationBody = {
  email: string;
};

export type TSendEmailVerificationResponse = TSendEmailVerificationBody;

export type TConfirmEmailVerificationBody = {
  email: string;
  code: string;
};

export type TConfirmEmailVerificationResponse = {
  message: string;
};

export type TRegisterBody = Omit<TRegisterFormData, "otp">;

export type TRegisterResponse = {
  user: User;
  token: string;
};
