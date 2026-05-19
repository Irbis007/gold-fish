import { logoOrange } from "@shared/assets";

export function LoyaltyCard() {
  const borderGradient = "to-[#ABB1B1] from-[#EEF1F1]";
  const bgGradient = "from-accent-black/70 to-accent-black";
  const discount = 10;
  return (
    <div className="p-2 bg-accent-black rounded-2xl max-w-[445px] w-full h-[252px]">
      <div
        className={`w-full h-full bg-gradient-to-r p-1.5 ${borderGradient} rounded-xl`}
      >
        <div
          className={`flex flex-col justify-center items-center w-full h-full rounded-lg bg-gradient-to-b  ${bgGradient}`}
        >
          <img src={logoOrange} alt="logo orange" />
          <div className="font-bold text-4xl text-[#EEF1F1]">-{discount}%</div>
        </div>
      </div>
    </div>
  );
}
