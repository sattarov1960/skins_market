import axios from "axios";
import {GetStatusTradeI, StatusTradeI} from "@/interface/components/statusTrade";


export const getStatusTrade = async ({tradeId}: GetStatusTradeI) => {
    try{
        const resp = await axios.get<StatusTradeI>(`${process.env.api}/status_trade?trade_id=${tradeId}`, {withCredentials: true})
        return resp.data
    }
    catch (e) {
        console.log(`Error getting exchange status: ${e}`)
        throw e
    }
}