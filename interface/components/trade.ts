
export interface TradeCI {
    id: string;
    tradeType: string;
    tradeStatus: number;
    tradeActiveFor: number;
    tradeLink: string | null;

    sellerTimeReg: string;
    sellerName: string;
    sellerImg: string;
    sellerGiveItemsImg: string[] | null;

    buyerTimeReg: number;
    buyerName: string;
    buyerImg: string;
    buyerGiveItemsImg: string[] | null;
}