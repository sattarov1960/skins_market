import axios from "axios";
import {GetStatusTradeI, StatusTradeI} from "@/interface/components/statusTrade";


export const getStatusTrade = async ({tradeId}: GetStatusTradeI) => {
    try{
        const resp = await axios.post<StatusTradeI>(`${process.env.api}/status_trade`, {tradeId: tradeId}, {withCredentials: true})
        return resp.data
    }
    catch (e) {
        console.log(`Error getting exchange status: ${e}`)
        throw e
    }
}