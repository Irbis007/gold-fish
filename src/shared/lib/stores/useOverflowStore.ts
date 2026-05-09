import { create } from "zustand";

type OverflowStore = {
  isOverflowActive: boolean;
  setIsOverflowActive: (value: boolean) => void;
};

export const useOverflowStore = create<OverflowStore>((set) => ({
  isOverflowActive: false,
  setIsOverflowActive: (value) => set({ isOverflowActive: value }),
}));
