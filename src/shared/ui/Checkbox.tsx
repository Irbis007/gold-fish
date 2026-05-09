import { useId } from "react";

type Props = {
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: string;
};

export function Checkbox({ checked, onChange, label }: Props) {
  const checkboxId = `checkbox-${useId()}`;
  return (
    <div className="flex items-center gap-5">
      <input
        className="cursor-pointer"
        type="checkbox"
        id={checkboxId}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className="cursor-pointer select-none" htmlFor={checkboxId}>
        {label}
      </label>
    </div>
  );
}
