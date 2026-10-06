import { Field, FieldError } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface IFormInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: string;
  error?: string;
}

export const FormInput = <T extends FieldValues>({
  control,
  name,
  label,
  type = "text",
  placeholder,
}: IFormInputProps<T>) => {
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState }) => (
      <Field data-invalid={fieldState.invalid}>
        <Label htmlFor={label}>{label}</Label>
        <Input {...field} type={type} placeholder={placeholder} />
        <div className="min-h-5">
          {fieldState.invalid && fieldState.error && (
            <FieldError errors={[fieldState.error]} className="-mt-1.5" />
          )}
        </div>
      </Field>
    )}
  ></Controller>;
};
