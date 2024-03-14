import {createTrade} from "@/utilities/trade/createTrade";
import {getStatusTrade} from "@/utilities/trade/getStatusTrade";
import {StatusTradeI} from "@/interface/components/statusTrade";

export const sell = async () => {
    let trade;
    console.debug("Начинаю создавать обмена")
    try{
        trade = await createTrade({email: "", paymentMethodId: 0, promocode: "", itemsReceive: [], itemsGive: [], gameId: 0})
        if (!trade.status) {
            console.log(`Ошибка при создании обмена errMsg=${trade.errMsg}`)
            return false
        }
        else{
            console.log(`Успешно создал обмена steamOfferId=${trade.steamOfferId} tradeId=${trade.tradeId} botName=${trade.botName} amount=${trade.amount} paymentInfo=${trade.paymentInfo} gameId=${trade.appId} paymentMethodId=${trade.paymentMethodId}`)
        }
    }
    catch (e){
        console.log(`Ошибка (Exception) при создании обмена error=${e}`)
        return false
    }
    console.log("Начинаю получать статус обмена")
    let statusTrade: StatusTradeI = {status: true, statusTrade: "", finish: false};
    while (!statusTrade.finish){
        try{
            statusTrade = await getStatusTrade({tradeId: trade.tradeId})
            if (!statusTrade.status) {
                console.log(`Получил статус не удовлетворительный статус обмена, пропускаю дальнейшую обработку status=${statusTrade.status} statusTrade=${statusTrade.statusTrade} finish=${statusTrade.finish}`)
                continue
            }
            console.log(`Получил удовлетворительный статус обмена, начинаю обработку данных status=${statusTrade.status} statusTrade=${statusTrade.statusTrade} finish=${statusTrade.finish}`)
            switch (statusTrade.statusTrade) {
                case "active":
                    console.log(`Обмена активен, продолжаю ожидание`)
                    break
                case "accepted":
                    console.log(`Обмена принят, завершаю обработку`)
                    return true
                case "declined":
                    console.log(`Обмена отклонен, завершаю обработку`)
                    return false
            }
        }
        catch (e) {
            console.log(`Ошибка при получении статуса обмена error=${e}`)
        }
    }
}