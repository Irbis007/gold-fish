import { useId } from "react";

type Props = {
  label?: string;
  isSelected: boolean;
  onChange: (val: boolean) => void;
  group: string;
  labelClasses?: string
};

export const Radio = ({ label, isSelected, onChange, group, labelClasses }: Props) => {
  const id = `radio-${useId()}`;
  return (
    <div className="flex items-center gap-2">
      <input
        radioGroup={group}
        type="radio"
        id={id}
        className="peer hidden"
        checked={isSelected}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
      <div
        className="relative after:w-2 after:block after:h-3 after:border-b-2 after:border-r-2 after:absolute
          after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-2/3 after:rotate-45
          w-5 h-5 rounded-md border after:border-transparent peer-checked:after:border-[#F9A43F] cursor-pointer"
        onClick={() => onChange(!isSelected)}
      ></div>
      <label htmlFor={id} className={`select-none cursor-pointer ${labelClasses}`}>
        {label}
      </label>
    </div>
  );
};
