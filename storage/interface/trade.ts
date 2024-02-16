import {TradeCI} from "@/interface/components/trade";

export interface TradeSI extends TradeCI {
    setTradeData: (tradeData: TradeCI) => void;
}