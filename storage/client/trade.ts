import { create } from "zustand";
import {TradeSI} from "@/storage/interface/trade";


export const useTradeStore = create<TradeSI>((set) => ({
    id: "",
    tradeType: "",
    tradeStatus: 0,
    tradeActiveFor: 0,
    tradeLink: null,
    sellerTimeReg: "",
    sellerName: "",
    sellerImg: "",
    sellerGiveItemsImg: null,
    buyerTimeReg: 0,
    buyerName: "",
    buyerImg: "",
    buyerGiveItemsImg: null,
    setTradeData : (tradeData) => set(tradeData),
}));