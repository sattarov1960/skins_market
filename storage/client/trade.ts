import { create } from "zustand";
import {TradeSI} from "@/storage/interface/trade";
import {InventoryItemI} from "@/interface/components/inventoryItem";


export const useTradeStore = create<TradeSI>((set) => ({
    statusTrade: {
        statusTrade: "",
        status: false,
        finish: false
    },
    tradeInfo: {
        tradeId: "",
        status: false,
        paymentMethodId: 0,
        amount: 0,
        botName: "",
        appId: 0,
        errMsg: "",
        paymentInfo: "",
        steamOfferId: ""
    },
    price: 0,
    paymentMethodId: 0,
    itemsGive: [],
    promocode: "",
    itemsReceive: [],
    gameId: 0,
    email: "",
    setGameId: (gameId: number) => set({gameId}),
    setEmail: (email: string) => set({email}),
    setItemsGive: (itemsGive: InventoryItemI[]) => set({itemsGive}),
    setItemsReceive: (itemsReceive: InventoryItemI[]) => set({itemsReceive}),
    setPaymentMethodId: (paymentMethodId: number) => set({paymentMethodId}),
    setPromocode: (promocode: string) => set({promocode}),
    setTradeInfo: (tradeInfo) => set({tradeInfo}),
    setStatusTrade: (statusTrade) => set({statusTrade}),
    setPrice: (price) => set({price})
}));