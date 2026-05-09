import { create } from "zustand";

type BlogThemes = {
  themes: {
    title: string;
    isSelected: boolean;
  }[];
  onChange: (idx: number, selected: boolean) => void;
};

export const useBlogThemes = create<BlogThemes>((set, get) => ({
  themes: [
    {
      title: "Magic: the Cathering",
      isSelected: true,
    },
    {
      title: "Warhammer 40000",
      isSelected: false,
    },
    {
      title: "School of Magic",
      isSelected: false,
    },
    {
      title: "Necromunda",
      isSelected: false,
    },
    {
      title: "Infinity",
      isSelected: false,
    },
    {
      title: "Board games",
      isSelected: false,
    },
    {
      title: "Education",
      isSelected: false,
    },
    {
      title: "Game reviews",
      isSelected: false,
    },
    {
      title: "Dust 1947",
      isSelected: false,
    },
    {
      title: "Star Wars X-Wing",
      isSelected: false,
    },
  ],
  onChange: (idx, selected) => {
    const oldThemes = get().themes.map((item) => ({
      ...item,
      isSelected: false,
    }));
    const foundTheme = oldThemes.find((_, i) => i === idx);
    if (!foundTheme) return;
    const newThemes: BlogThemes["themes"] = [
      ...oldThemes.slice(0, idx),
      { ...foundTheme, isSelected: selected },
      ...oldThemes.slice(idx + 1, oldThemes.length),
    ];

    set({
      themes: newThemes,
    });
  },
}));
