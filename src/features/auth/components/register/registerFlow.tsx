"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema, TRegisterFormData } from "../../schemas/register.schema";
import Step1Email from "./steps/Step1Email";
import { confirmEmailVerification, sendEmailVerification } from "../../api/register.api";

const RegisterFlow = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [generalError, setGeneralError] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    setError,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const handleNextStep = async () => {
    setGeneralError("");

    if (step === 1) {
      if (!(await trigger("email"))) return;
      setIsSubmitting(true);
      try {
        const res = await sendEmailVerification({ email: getValues("email") });
        if (!res.status) {
          setError("email", { message: res.message || "failed to send email verification" });
          return;
        }
        setStep(2);
      } catch (e) {
        setError("email", { message: "failed process" });
      } finally {
        setIsSubmitting(false);
      }
    } else if (step === 2) {
      if (!(await trigger("email"))) return;
      setIsSubmitting(true);
      try {
        const res = await confirmEmailVerification({
          email: getValues("email"),
          code: getValues("otp"),
        });
        if (!res.status) {
          setError("otp", { message: res.message || "invalid opt code" });
          return;
        }
        setIsEmailVerified(true);
      } catch (e) {
        setError("otp", { message: "invalid otp code catch" });
      } finally {
        setIsSubmitting(false);
      }
    } else if (step === 3) {
      if (!(await trigger(["firstName", "lastName", "username", "phone"]))) return;
      if (!isEmailVerified) {
        setStep(2);
        return;
      }
      setStep(4);
    }
  };

  const finalSubmit = (data: TRegisterFormData) => {};

  const loading = isSubmitting;
  return (
    <form
      onSubmit={handleSubmit(finalSubmit)}
      className="max-auto w-full max-w-lg rounded-lg bg-white p-6"
    >
      <h2 className="mb-10 font-mono text-3xl font-bold">Create Account</h2>

      {step === 1 && (
        <Step1Email
          registerField={register("email")}
          error={errors.email?.message}
          loading={loading}
          onNext={handleNextStep}
        />
      )}
    </form>
  );
};

export default RegisterFlow;
