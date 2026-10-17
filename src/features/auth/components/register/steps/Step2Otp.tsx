import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/shared/components/ui/input-otp";
import { TRegisterFormData } from "@/features/auth/schemas/register.schema";
import { Label } from "@/shared/components/ui/label";
import { Button } from "@base-ui/react/button";
import React from "react";
import { Control, Controller, FieldValues, UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  registerField: UseFormRegisterReturn;
  error?: string;
  loading: boolean;
  control: Control<TRegisterFormData>;
  onNext: () => void;
}

const Step2Otp = ({ registerField, error, loading, control, onNext }: IProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4">
      <Controller
        control={control}
        name="otp"
        render={({ field, fieldState }) => (
          <div>
            <Label className="mb-2 text-[1.4rem] font-bold text-blue-600">Verify OTP</Label>
            <p className="mb-2 text-sm text-gray-500">
              Please enter the 6-digits code we have sent to:
            </p>
            <p></p>
            <InputOTP maxLength={6} value={field.value} onChange={field.onChange}>
              <InputOTPGroup className="space-x-4">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            {fieldState.error && <p className="text-sm text-red-500">{fieldState.error.message}</p>}
          </div>
        )}
      />
      <Button type="button" onClick={onNext} className="w-full bg-blue-600 py-2 text-white">
        {!loading ? "Verify" : "Check OTP Code"}
      </Button>
    </div>
  );
};

export default Step2Otp;
