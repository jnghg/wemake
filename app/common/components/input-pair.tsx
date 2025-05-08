import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { type InputHTMLAttributes } from "react";
import { Textarea } from "./ui/textarea";

export default function InputPair({
  label,
  description,
  textArea = false,
  ...rest
}: {
  label: string;
  description: string;
  textArea?: boolean;
} & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>) {
  return (
    <div className="space-y-2 flex flex-col">
      <Label className="flex flex-col" htmlFor={rest.name}>
        {label}
        <small className="text-muted-foreground">{description}</small>
      </Label>

      {textArea ? (
        <Textarea rows={8} className="resize-none" {...rest} />
      ) : (
        <Input {...rest} />
      )}
    </div>
  );
}
