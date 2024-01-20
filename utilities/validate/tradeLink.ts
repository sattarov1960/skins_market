export function validateTradeLink(tradeLink: string) {
    return tradeLink.includes("steamcommunity.com/tradeoffer/new/?partner=") && tradeLink.includes("&token=");
}