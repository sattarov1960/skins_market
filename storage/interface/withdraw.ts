import {WithdrawItemData} from "@/interface/components/withdrawItemData";

export interface WithdrawItemsI{
    items: WithdrawItemData[]
    setItems: (items: WithdrawItemData[]) => void
}