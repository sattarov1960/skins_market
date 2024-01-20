import {SalesItemI} from "@/interface/components/salesItem";

export interface SalesItemsI{
    items: SalesItemI[]
    setItems: (items: SalesItemI[]) => void
}
