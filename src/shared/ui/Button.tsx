import type { MouseEvent, ReactNode } from "react";

type Props = {
  title: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  size?: "small" | "medium" | "large";
  outlined?: boolean;
  icon?: ReactNode;
  classes?: string;
  disabled?: boolean;
};

export function Button({
  title,
  onClick,
  size = "medium",
  outlined,
  icon,
  classes,
  disabled,
}: Props) {
  const sizeClasses =
    size === "large"
      ? "w-[170px] h-[37px] md:w-[310px] md:h-[70px] text-base md:text-2xl"
      : size === "medium"
        ? "h-fit py-2 px-8"
        : "w-[165px] h-[38px]";

  const outlinedClasses = outlined
    ? `border-2 ${disabled ? "border-zinc-4 text-zinc-400 cursor-not-allowed" : "border-accent text-accent hover:bg-[#f8e8d5]"} `
    : "text-white bg-gradient-to-b from-[#F9A43F] to-[#FB791B] hover:bg-gradient-to-l";

  return (
    <button
      className={`flex justify-center items-center gap-2 rounded-lg text-nowrap ${sizeClasses} ${outlinedClasses} ${classes}`}
      onClick={onClick}
    >
      {title}
      {icon}
    </button>
  );
}
