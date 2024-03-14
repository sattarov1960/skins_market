import {InventoryItemI} from "@/interface/components/inventoryItem";

export interface CreateTradeI {
    email: string
    paymentMethodId: number
    promocode: string
    itemsGive: InventoryItemI[];
    itemsReceive: InventoryItemI[];
    gameId: number
    price: number
}