import { create } from "zustand";
import {WithdrawItemsI} from "@/storage/interface/withdraw";


export const useWithdrawItemsStore = create<WithdrawItemsI>((set) => ({
    items: [],
    setItems: (items) => set({ items }),
}));