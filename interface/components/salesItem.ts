import {paymentT} from "@/interface/types/payment";
import {statusT} from "@/interface/types/status";
import {rarityT} from "@/interface/types/rarity";

export interface SalesItemI{
    marketHashName: string
    cost: number
    image: string;
    gameId: number;
    rarity: rarityT
}

export interface SalesItemRowI{
    id: number;
    amount: number;
    payment: paymentT;
    status: statusT;
    date: string;
    items: SalesItemI[]
}