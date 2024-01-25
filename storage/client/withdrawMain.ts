import { create } from "zustand";
import {WithdrawItemsI} from "@/storage/interface/withdraw";
import {WithdrawMainI} from "@/storage/interface/withdrawMain";


export const useWithdrawMainStore = create<WithdrawMainI>((set) => ({
    activePaymentSystem: "",
    wallet: "",
    email: "",
    workingPaymentSystem: {
        "MIR": true,
        "SBP": true,
        "Qiwi": true,
        "BTC": true,
        "USDT TRC20": true
    },
    setWallet: (wallet) => set({ wallet }),
    setEmail: (email) => set({ email }),
    setActivePaymentSystem: (paymentSystem) => set({ activePaymentSystem: paymentSystem }),
}));