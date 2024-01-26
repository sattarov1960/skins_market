import {LastItemProps} from "@/interface/components/lastItem";

export interface LastSalesI{
    items: LastItemProps[]
    setItems: (items: LastItemProps[]) => void
}