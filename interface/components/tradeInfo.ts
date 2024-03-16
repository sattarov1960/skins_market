import {ErrorCreateTrade} from "@/interface/types/errorCreateTrade";

export interface TradeInfoI{
    status: boolean
    steamOfferId?: string,
    tradeId?: string,
    botName?: string,
    price?: number,
    paymentInfo?: string,
    appId?: number,
    paymentMethodId?: number
    botImage?: string
    errMsg: ErrorCreateTrade | undefined
    timeRegistrationBot?: string
}
