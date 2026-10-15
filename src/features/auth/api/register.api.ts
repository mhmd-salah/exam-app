import {
  TConfirmEmailVerificationBody,
  TConfirmEmailVerificationResponse,
  TRegisterBody,
  TRegisterResponse,
  TSendEmailVerificationBody,
  TSendEmailVerificationResponse,
} from "../types/register";
import { Post } from "@/shared/api/apiMethods";

export const sendEmailVerification = (body: TSendEmailVerificationBody) =>
  Post<TSendEmailVerificationBody, TSendEmailVerificationResponse>(
    "/auth/send-email-verification",
    body
  );

export const confirmEmailVerification = (body: TConfirmEmailVerificationBody) =>
  Post<TConfirmEmailVerificationBody, TConfirmEmailVerificationResponse>(
    "/auth/confirm-email-verification",
    body
  );

export const register = (body: TRegisterBody) =>
  Post<TRegisterBody, TRegisterResponse>("/auth/register", body);
