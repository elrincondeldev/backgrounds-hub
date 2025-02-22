import { create } from "zustand";

export interface backgroundStore {
  backgroundName: string;
  setBackgroundName: (backgroundName: string) => void;
}

export const useBackgroundStore = create<backgroundStore>((set) => ({
  backgroundName: "",
  setBackgroundName: (backgroundName) => set({ backgroundName }),
}));
