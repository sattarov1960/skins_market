import { create } from "zustand";


export const useWalletStore = create<CurrencyI>((set) => ({
    activeName: "RUB",
    setActiveName: (name: string) => set({ activeName: name }),
}));