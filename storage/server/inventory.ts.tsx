"use client";

import {FC, useRef} from "react"
import {useInventoryStore} from "@/storage/client/inventory";



export const StoreInitializerInventory: FC<appIdI> = ({appId}) => {
    const initialized = useRef(false)
    if (!initialized.current){
        useInventoryStore.setState({activeGame: appId})
        initialized.current = true
    }
    return null
}
