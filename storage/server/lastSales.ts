"use client";

import {FC, useRef} from "react"
import {LastItemProps} from "@/interface/components/lastItem";
import {useLastSalesStore} from "@/storage/client/lastSales";

interface LastSalesPropsI{
    items: LastItemProps[]
}

export const StoreInitializerLastSales: FC<LastSalesPropsI> = ({items}) => {
    const initialized = useRef(false)
    if (!initialized.current){
        useLastSalesStore.setState({
            items: items
        })
        initialized.current = true
    }
    return null
}