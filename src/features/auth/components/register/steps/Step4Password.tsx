import { TRegisterFormData } from "@/features/auth/schemas/register.schema";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  fields: {
    password: UseFormRegisterReturn;
    confirmPassword: UseFormRegisterReturn;
  };
  errors: FieldErrors<TRegisterFormData>;
  generalError?: string;
  loading: boolean;
}

export default function Step4Password({ fields, generalError, errors, loading }: IProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label>Password</Label>
        <Input {...fields.password} type="password" placeholder="*********" />
        {errors.password && <div className="text-sm text-red-600">{errors.password.message}</div>}
      </div>
      <div>
        <Label>Confirm Password</Label>
        <Input {...fields.confirmPassword} type="password" placeholder="*********" />
        {errors.confirmPassword && (
          <div className="text-sm text-red-600">{errors.confirmPassword.message}</div>
        )}
      </div>

      {generalError && (
        <p className="text-center text-sm font-medium text-red-600">{generalError}</p>
      )}
      <Button type="submit" className="w-full">
        {loading ? "Loading" : "Register"}
      </Button>
    </div>
  );
}
