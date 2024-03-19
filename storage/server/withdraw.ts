"use client";

import {FC, useRef} from "react"
import {useWithdrawItemsStore} from "@/storage/client/withdraw";
import {WithdrawItemData} from "@/interface/components/withdrawItemData";

interface withdrawPropsI{
    items: WithdrawItemData[]
}

export const StoreInitializerWithdrawItems: FC<withdrawPropsI> = ({items}) => {
    const initialized = useRef(false)
    if (!initialized.current){
        useWithdrawItemsStore.setState({
            items: items
        })
        initialized.current = true
    }
    return null
}