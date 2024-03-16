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
    isError: false,
    isSuccess: false,
    isNeedCreateTrade: false,
    headerMsg: "",
    sbpBank: "",
    wallet: "",
    setGameId: (gameId: number) => set({gameId}),
    setEmail: (email: string) => set({email}),
    setItemsGive: (itemsGive: InventoryItemI[]) => set({itemsGive}),
    setItemsReceive: (itemsReceive: InventoryItemI[]) => set({itemsReceive}),
    setPaymentMethodId: (paymentMethodId: number) => set({paymentMethodId}),
    setPromocode: (promocode: string) => set({promocode}),
    setTradeInfo: (tradeInfo) => set({tradeInfo}),
    setStatusTrade: (statusTrade) => set({statusTrade}),
    setPrice: (price) => set({price}),
    setIsError: (isError) => set({isError}),
    setIsNeedCreateTrade: (isNeedCreateTrade) => set({isNeedCreateTrade}),
    setIsSuccess: (isSuccess) => set({isSuccess}),
    setHeaderMsg: (headerMsg:  "" | "Обмен отменён!") => set({headerMsg}),
    setSBPBank: (sbpBank: string) => set({sbpBank}),
    setWallet: (wallet: string) => set({wallet}),
    resetTrade: (value?: any) => set({
        statusTrade: {
            statusTrade: "",
            status: false,
            finish: false
        },
        tradeInfo: {
            tradeId: "",
            status: false,
            paymentMethodId: 0,
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
        isError: false,
        isSuccess: false,
        isNeedCreateTrade: false,
        headerMsg: "",
        sbpBank: "",
        wallet: ""
    })
}));