export const validateBinanceId = (binanceId: string) => {
    if (!isNaN(Number(binanceId))){
        const length = binanceId.toString().length
        return length < 8 || length > 12;
    }
    return true
}