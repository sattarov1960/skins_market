import { create } from "zustand";
import {SalesItemsI} from "@/storage/interface/salesItems";


export const useSalesStore = create<SalesItemsI>((set) => ({
    items: [],
    setItems: (items) => set({items})
}));
