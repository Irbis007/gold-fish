import { useId } from "react";

type Props = {
  label?: string;
  placeholder?: string;
  size?: "small" | "medium";
} & (
  | {
      type: "text";
      value: string;
      onChange?: (value: string) => void;
      min?: undefined;
      max?: undefined;
    }
  | {
      type: "number";
      value: number;
      onChange?: (value: number) => void;
      min?: number;
      max?: number;
    }
);

export function Input({
  value,
  onChange,
  type,
  label,
  placeholder,
  size = "medium",
  min,
  max,
}: Props) {
  const inputId = useId();
  const sizeClasses = size === "medium" ? "px-5 py-3" : "w-16 h-7 px-2 py1";
  return (
    <div
      className={`flex ${size === "medium" ? "flex-col" : "flex-row items-center"} gap-2`}
    >
      <label htmlFor={`input-${inputId}`}>{label}</label>
      <input
        id={`input-${inputId}`}
        type={type}
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          if (type === "number") {
            if (max && +value > max) {
              onChange?.(max);
            } else if (min && +value < min) {
              onChange?.(min);
            } else {
              onChange?.(+value);
            }
          } else {
            onChange?.(value);
          }
        }}
        placeholder={placeholder}
        className={`rounded-lg border border-gray-300 appearance-hide ${sizeClasses}`}
        min={min}
        max={max}
      />
    </div>
  );
}
