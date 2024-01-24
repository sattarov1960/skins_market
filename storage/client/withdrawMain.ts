import { create } from "zustand";
import {WithdrawItemsI} from "@/storage/interface/withdraw";
import {WithdrawMainI} from "@/storage/interface/withdrawMain";


export const useWithdrawMainStore = create<WithdrawMainI>((set) => ({
    activePaymentSystem: "Cards",
    setActivePaymentSystem: (paymentSystem) => set({ activePaymentSystem: paymentSystem }),
    workingPaymentSystem: {
        "Cards": false,
        "Qiwi": false,
        "Bitcoin": false,
        "SBP": false,
        "USDT TRC20": false
    }
}));