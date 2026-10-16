"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema, TRegisterFormData } from "../../schemas/register.schema";
import Step1Email from "./steps/Step1Email";
import { confirmEmailVerification, sendEmailVerification } from "../../api/register.api";
import Step2Otp from "./steps/Step2Otp";
import Step3Profile from "./steps/Step3Profile";
import useRegister from "../../hooks/useRegister";
import Step4Password from "./steps/Step4Password";

const RegisterFlow = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [generalError, setGeneralError] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(true);

  const {
    register,
    handleSubmit,
    trigger,
    setError,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const registerMutation = useRegister();

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
      } catch {
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
        setStep(3);
        console.log(step);
      } catch {
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

  const finalSubmit = (data: TRegisterFormData) => {
    setGeneralError("");
    const { otp, ...registerData } = data;
    registerMutation.mutate(registerData, {
      onSuccess: () => {
        window.location.href = "/login";
      },
      onError: (e) => {
        const msg = e.message || "failed register";
        if (msg.includes("username")) {
          setStep(3);
          setError("username", { message: msg });
        } else if (msg.includes("email")) {
          setStep(1);
          setError("email", { message: msg });
        } else {
          setGeneralError(msg);
        }
      },
    });
  };

  const loading = isSubmitting || registerMutation.isPending;
  return (
    <form
      onSubmit={handleSubmit(finalSubmit)}
      className="max-auto w-full max-w-lg rounded-lg bg-white p-6"
    >
      <h2 className="mb-10 font-mono text-3xl font-bold">Create Account</h2>
      <div className="flex flex-col items-center justify-center">
        {step === 1 && (
          <Step1Email
            registerField={register("email")}
            error={errors.email?.message}
            loading={loading}
            onNext={handleNextStep}
          />
        )}
        {step === 2 && (
          <Step2Otp
            registerField={register("otp")}
            error={errors.otp?.message}
            loading={loading}
            control={control}
            onNext={handleNextStep}
          />
        )}
        {step === 3 && (
          <Step3Profile
            fields={{
              firstName: register("firstName"),
              lastName: register("lastName"),
              username: register("username"),
              phone: register("phone"),
            }}
            errors={errors}
            onNext={handleNextStep}
          />
        )}
        {step === 4 && (
          <Step4Password
            fields={{
              password: register("password"),
              confirmPassword: register("confirmPassword"),
            }}
            errors={errors}
            loading={isSubmitting}
          />
        )}
      </div>
    </form>
  );
};

export default RegisterFlow;
