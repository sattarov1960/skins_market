import {TradeInfoI} from "@/interface/components/tradeInfo";
import {StatusTradeI} from "@/interface/components/statusTrade";
import {CreateTradeI} from "@/interface/components/createTrade";
import {InventoryItemI} from "@/interface/components/inventoryItem";

export interface TradeSI extends CreateTradeI {
    statusTrade: StatusTradeI
    tradeInfo: TradeInfoI
    isError: boolean
    isSuccess: boolean
    isNeedCreateTrade: boolean
    setEmail: (email: string) => void;
    sbpBank: string;
    headerMsg: "" | "Обмен отменён!"
    wallet: string
    setPaymentMethodId: (paymentMethodId: number) => void;
    setPromocode: (promocode: string) => void;
    setItemsGive: (itemsGive: InventoryItemI[]) => void;
    setItemsReceive: (itemsReceive: InventoryItemI[]) => void;
    setTradeInfo: (tradeInfo: TradeInfoI) => void;
    setStatusTrade: (statusTrade: StatusTradeI) => void;
    setGameId: (gameId: number) => void;
    setPrice: (price: number) => void;
    setIsError: (isError: boolean) => void;
    setIsSuccess: (isSuccess: boolean) => void;
    setIsNeedCreateTrade: (isNeedCreateTrade: boolean) => void;
    setHeaderMsg: (headerMsg:  "" | "Обмен отменён!") => void;
    setSBPBank: (sbpBankName: string) => void;
    setWallet: (wallet: string) => void;
    resetTrade: (value?: any) => void;
}