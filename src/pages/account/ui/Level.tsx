type Props = {
  icon: string;
  title: string;
  needsExperience: string;
  status: "received" | "in progress" | "closed";
};

export function Level({ icon, title, needsExperience, status }: Props) {
  return (
    <div
      className={`flex items-end justify-between w-full ${status === "closed" && "opacity-35"}`}
    >
      <div className="flex justify-center items-center w-16 h-16 rounded-lg shadow-lg bg-white">
        <img src={icon} alt="level icon" />
      </div>
      <div className="ml-4 grow">
        <div className="font-bold text-1.5xl">{title}</div>
        <div className="text-1.5xl">{status}</div>
      </div>
      <div className="font-bold text-1.5xl">{needsExperience}</div>
    </div>
  );
}
