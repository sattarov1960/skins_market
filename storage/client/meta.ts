
import { create } from "zustand";


export const useMetaStore = create<MetaStoreI>((set) => ({
    countReviews: 0,
    countSales: 0,
    countUsers: 0,
    medianPrice: 0,
    timeTrade: 0,
    status: false,
    timeWorking: 0,
    totalPrice: 0,
    setMeta: (meta) => set(meta)
}))