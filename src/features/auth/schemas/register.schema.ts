import z from "zod";

export const registerSchema = z
  .object({
    email: z.string().email("invalid email"),
    otp: z.string().min(4, "otp must be grater than 4 character"),
    firstName: z.string().min(2, "first name is required"),
    lastName: z.string().min(2, "last name is required"),
    username: z.string().min(3, "invalid username"),
    phone: z.string().min(10, "invalid phone number"),
    password: z.string().min(6, "invalid password"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password unmatched",
    path: ["confirmPassword"],
  });

export type TRegisterFormData = z.infer<typeof registerSchema>;
