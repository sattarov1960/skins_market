export interface TradeInfoI{
    status: boolean
    steamOfferId?: string,
    tradeId?: string,
    botName?: string,
    price?: number,
    paymentInfo?: string,
    appId?: number,
    paymentMethodId?: number
    errMsg: string | undefined
}
