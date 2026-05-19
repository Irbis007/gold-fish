import { create } from "zustand";

type MenuStore = {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
};

export const useMenuStore = create<MenuStore>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (val) => set({ isMenuOpen: val }),
}));
