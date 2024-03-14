import {TradeInfoI} from "@/interface/components/tradeInfo";
import {StatusTradeI} from "@/interface/components/statusTrade";
import {CreateTradeI} from "@/interface/components/createTrade";
import {InventoryItemI} from "@/interface/components/inventoryItem";

export interface TradeSI extends CreateTradeI {
    statusTrade: StatusTradeI
    tradeInfo: TradeInfoI
    setEmail: (email: string) => void;
    setPaymentMethodId: (paymentMethodId: number) => void;
    setPromocode: (promocode: string) => void;
    setItemsGive: (itemsGive: InventoryItemI[]) => void;
    setItemsReceive: (itemsReceive: InventoryItemI[]) => void;
    setTradeInfo: (tradeInfo: TradeInfoI) => void;
    setStatusTrade: (statusTrade: StatusTradeI) => void;
    setGameId: (gameId: number) => void;
    setPrice: (price: number) => void;
}