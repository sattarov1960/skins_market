"use client";

import {FC, useRef} from "react"
import {SalesItemRowI} from "@/interface/components/salesItem";
import {useSalesStore} from "@/storage/client/sales";

interface salesPropsI{
    items: SalesItemRowI[]
}

export const StoreInitializerSales: FC<salesPropsI> = ({items}) => {
    const initialized = useRef(false)
    if (!initialized.current){
        useSalesStore.setState({
            items: items
        })
        initialized.current = true
    }
    return null
}