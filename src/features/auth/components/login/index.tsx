"use client";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
import useLogin from "../../hooks/useLogin";
import { loginSchema } from "../../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFields } from "../../types/auth";
import { Input } from "@base-ui/react/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Button } from "@/shared/components/ui/button";

export default function LoginForm() {
  const { mutate: login, isPending } = useLogin();

  const [show, setShow] = useState(false);

  const locale = useLocale();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFields> = (values) => {
    login(values);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="font-mono">
      {/* Username field */}
      <FieldGroup className="mt-2.5">
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => {
            console.log(field, fieldState);
            return (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input
                  {...field}
                  id="username"
                  aria-invalid={fieldState.invalid}
                  placeholder="user123"
                  autoComplete="username"
                  className={"border-2 border-gray-200 px-2 py-2 text-sm placeholder:text-gray-400"}
                />
                {/* error */}

                <div className="min-h-5">
                  {fieldState.invalid && fieldState.error && (
                    <FieldError errors={[fieldState.error]} className="-mt-1.5" />
                  )}
                </div>
              </Field>
            );
          }}
        ></Controller>
      </FieldGroup>

      {/* password */}
      <FieldGroup className="mt-3">
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              {/* Label */}
              <FieldLabel htmlFor="password">Password</FieldLabel>

              {/* Input */}
              <div className="relative">
                <Input
                  {...field}
                  id="password"
                  type={show ? "text" : "password"}
                  aria-invalid={fieldState.invalid}
                  placeholder="******"
                  autoComplete="current-password"
                  className="w-full border-2 border-gray-200 px-2 py-2 pr-10 text-sm placeholder:text-gray-400"
                />

                <button
                  type="button"
                  onClick={() => setShow((prev) => !prev)}
                  className="absolute top-1/2 right-3 -translate-y-1/2"
                >
                  {show ? (
                    <EyeOff size={16} className="text-gray-400" />
                  ) : (
                    <Eye size={16} className="text-gray-400" />
                  )}
                </button>
              </div>

              {/* Error */}
              <div className="min-h-5">
                {fieldState.invalid && fieldState.error && (
                  <FieldError errors={[fieldState.error]} className="-mt-1.5" />
                )}
              </div>
            </Field>
          )}
        />
      </FieldGroup>

      {/* Forget password */}
      <Link
        href={`/${locale}/forget-password`}
        className="mt-2.5 flex justify-end font-mono text-sm font-medium text-blue-600"
      >
        forget your password ?
      </Link>

      {/* Submit button */}
      <Button
        type="submit"
        disabled={isPending || (form.formState.isSubmitted && !form.formState.isValid)}
        className="mt-10 w-full bg-blue-600 py-5 font-mono"
      >
        Login
      </Button>
    </form>
  );
}
