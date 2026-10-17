import { Button } from "@/shared/components/ui/button";
import { Label } from "@/shared/components/ui/label";
import { Input } from "@base-ui/react/input";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  registerField: UseFormRegisterReturn;
  error?: string;
  loading: boolean;
  onNext?: () => void;
}

const Step1Email = ({ registerField, error, loading, onNext }: IProps) => {
  return (
    <div className="w-full">
      <div className="space-y-4 font-mono">
        <Label className="text-base">Email</Label>
        <Input
          type="email"
          placeholder="name@example.com"
          {...registerField}
          className="w-full border-2 border-gray-200 px-2 py-2 pr-10 text-sm placeholder:text-gray-400"
        />
        {error && <p className="-mt-3 text-sm text-red-500">{error}</p>}
      </div>
      <Button
        type="button"
        className="mt-5 w-full bg-blue-600 py-2 font-mono"
        disabled={loading}
        onClick={onNext}
      >
        {loading ? "OTP Sending" : "Next"}
      </Button>
    </div>
  );
};

export default Step1Email;
