import {statusT} from "@/interface/types/status";
import {paymentT} from "@/interface/types/payment";

export interface WithdrawItemData {
    date: string,
    payment: paymentT,
    id: string,
    status: statusT,
    amount: number
}
