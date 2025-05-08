import type { SelectHTMLAttributes } from "react";
import { useState } from "react";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function SelectPair({
  label,
  name,
  required,
  description,
  placeholder,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  description?: string;
  placeholder?: string;
  options: { label: string; value: string }[];
} & SelectHTMLAttributes<HTMLSelectElement>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2 flex flex-col">
      <Label className="flex flex-col" onClick={() => setOpen(true)}>
        {label}
        <small className="text-muted-foreground">{description}</small>
      </Label>

      <Select
        open={open}
        onOpenChange={setOpen}
        name={name}
        required={required}
      >
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
