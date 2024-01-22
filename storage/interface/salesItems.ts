import {SalesItemRowI} from "@/interface/components/salesItem";

export interface SalesItemsI{
    items: SalesItemRowI[]
    setItems: (items: SalesItemRowI[]) => void
}
