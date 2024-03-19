import { create } from "zustand";
import {PartnerStoreI} from "@/storage/interface/partner";


export const usePartnerStore = create<PartnerStoreI>((set) => ({
    maxEarning: 0,
    averageInvited: 0,
    totalEarnings: 0,
    totalInvited: 0,
    setAverageInvited: (averageInvited) => set({averageInvited}),
    setMaxEarning: (maxEarning) => set({maxEarning}),
    setTotalEarnings: (totalEarnings) => set({totalEarnings}),
    setTotalInvited: (totalInvited) => set({totalInvited})
}))