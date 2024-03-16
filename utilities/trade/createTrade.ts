import axios from "axios";
import {TradeInfoI} from "@/interface/components/tradeInfo";
import {CreateTradeI} from "@/interface/components/createTrade";


export const createTrade = async ({email, gameId, itemsGive, itemsReceive, paymentMethodId, promocode, price, sbpBank, wallet}: CreateTradeI) => {
    let sendItemsGive = itemsGive.map((item) => item.id)
    let sendItemsReceive = itemsReceive.map((item) => item.id)
    const resp = await axios.post<TradeInfoI>(`${process.env.api}/sell`, {
        email: email,
        gameId: gameId,
        itemsGive: sendItemsGive,
        itemsReceive: sendItemsReceive,
        paymentMethodId: paymentMethodId,
        promocode: promocode,
        price: price,
        sbpBank: sbpBank,
        wallet: wallet
    }, {withCredentials: true})
    return resp.data
}