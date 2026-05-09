import { create } from "zustand";

type FiltersValues = {
  priceRange: number[];
  playersCount: number[];
  isWithDiscount: boolean;
  selectedAges: Record<string, boolean>;
  availability: Record<string, boolean>;
};

// type Key = keyof clearFilters;

type FiltersStore = FiltersValues & {
  onChangeValByKey: <
    Key extends keyof FiltersValues,
    Val extends FiltersValues[Key],
  >(
    key: Key,
    val: Val,
  ) => void;
  clearFilters: () => void;
};

const defaultValues: FiltersValues = {
  priceRange: [0, 100],
  playersCount: [0, 7],
  isWithDiscount: false,
  selectedAges: {},
  availability: {},
};

export const useFiltersStore = create<FiltersStore>((set) => ({
  ...defaultValues,
  onChangeValByKey: (key, val) => {
    set({ [key]: val });
  },

  clearFilters: () => {
    set(defaultValues);
  },
}));
