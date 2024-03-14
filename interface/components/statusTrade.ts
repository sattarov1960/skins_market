export interface GetStatusTradeI {
    tradeId: string
}

export interface StatusTradeI{
    status: boolean
    statusTrade: "declined" | "accepted" | "active" | ""
    finish: boolean
}
