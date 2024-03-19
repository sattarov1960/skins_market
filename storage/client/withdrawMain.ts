import { create } from "zustand";
import {WithdrawMainI} from "@/storage/interface/withdrawMain";


export const useWithdrawMainStore = create<WithdrawMainI>((set) => ({
    activePaymentSystem: "",
    wallet: "",
    email: "",
    promotionalCode: "",
    sbpBank: "",
    workingPaymentSystem: {},
    setWorkingPaymentSystem: (workingPaymentSystem) => set({ workingPaymentSystem: workingPaymentSystem }),
    setWallet: (wallet) => set({ wallet: wallet }),
    setEmail: (email) => set({ email: email }),
    setActivePaymentSystem: (paymentSystem) => set({ activePaymentSystem: paymentSystem }),
    setPromotionalCode: (promotionalCode) => set({ promotionalCode: promotionalCode }),
    setSbpBank: (sbpBank) => set({ sbpBank: sbpBank }),
}));