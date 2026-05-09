import { useEffect, useRef, useState } from "react";
import { FAQTab } from "./FAQTab";
import { CharacteristicsTab } from "./CharacteristicsTab";
import { DescriptionTab } from "./DescriptionTab";
import { RulesTab } from "./RulesTab";

const tabButtons = [
  "Description",
  "Characteristics",
  "Rules",
  "Question and Answer",
];

export function Tabulation() {
  const [activeTab, setActiveTab] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeTabRef = useRef<HTMLButtonElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tabCur = activeTabRef.current;
    const lineCur = lineRef.current;
    const conCur = containerRef.current;

    if (!tabCur || !lineCur || !conCur) return;

    const left =
      tabCur.getBoundingClientRect().left - conCur.getBoundingClientRect().left;
    lineCur.style = `width: ${tabCur.offsetWidth + 16}px; left: ${left}px`;
  }, [activeTabRef, lineRef, activeTab]);
  return (
    <div className="pr-4 py-2 mt-16 w-full">
      <div
        ref={containerRef}
        className="relative flex justify-between items-center border-b border-zinc-200"
      >
        {tabButtons.map((item, i) => (
          <button
            key={i}
            ref={activeTab === i ? activeTabRef : null}
            onClick={() => setActiveTab(i)}
          >
            {item}
          </button>
        ))}
        <div
          ref={lineRef}
          className="absolute h-0.5 bg-black bottom-0 transition-all translate-y-1/2 -translate-x-1"
        ></div>
      </div>

      {activeTab === 0 && <DescriptionTab />}
      {activeTab === 1 && <CharacteristicsTab />}
      {activeTab === 2 && <RulesTab />}
      {activeTab === 3 && <FAQTab />}
    </div>
  );
}
