import { useId } from "react";

type Props = {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  resizable?: boolean;
};

export function Textarea({
  value,
  onChange,
  label,
  placeholder,
  resizable,
}: Props) {
  const inputId = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={`input-${inputId}`}>{label}</label>
      <textarea
        id={`input-${inputId}`}
        value={value}
        onChange={(e) => {
          onChange?.(e.target.value);
        }}
        placeholder={placeholder}
        className={`h-28 px-5 py-3 rounded-lg border border-gray-300 resize-none ${resizable && "resize"}`}
      />
    </div>
  );
}
