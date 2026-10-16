import { TRegisterFormData } from "@/features/auth/schemas/register.schema";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  fields: {
    firstName: UseFormRegisterReturn;
    lastName: UseFormRegisterReturn;
    username: UseFormRegisterReturn;
    phone: UseFormRegisterReturn;
  };
  errors?: FieldErrors<TRegisterFormData>;
  onNext: () => void;
}

export default function Step3Profile({ fields, errors, onNext }: IProps) {
  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label className="mb-2">First Name</Label>
          <Input {...fields.firstName} placeholder={"Sarah"} />
          {errors?.firstName && <p className="text-sm text-red-600">{errors.firstName.message}</p>}
        </div>
        <div>
          <Label className="mb-2">Last Name</Label>
          <Input {...fields.lastName} placeholder="Ahmed" />
          {errors?.lastName && <p className="text-sm text-red-600">{errors.lastName.message}</p>}
        </div>
      </div>
      <div>
        <Label className="mb-2">Username</Label>
        <Input {...fields.username} placeholder="user123" />
        {errors?.username && <p className="text-sm text-red-600">{errors.username.message}</p>}
      </div>
      <div>
        <Label className="mb-2">Phone Number</Label>
        <Input {...fields.phone} placeholder="10123456" />
        {errors?.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
      </div>
      <Button type="button" className="w-full" onClick={onNext}>
        Next
      </Button>
    </div>
  );
}
