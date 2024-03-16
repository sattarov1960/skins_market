"use client";

import {FC, useRef} from "react"
import {useMetaStore} from "@/storage/client/meta";


export const StoreInitializerMeta: FC<MetaI> = ({status,
                                                    totalPrice,
                                                    countSales,
                                                    countUsers,
                                                    countReviews,
                                                    timeTrade,
                                                    timeWorking,
                                                    medianPrice}) => {
    const initialized = useRef(false)
    if (!initialized.current){
        useMetaStore.setState({
            medianPrice: medianPrice,
            countReviews: countReviews,
            timeWorking: timeWorking,
            countUsers: countUsers,
            countSales: countSales,
            totalPrice: totalPrice,
            status: status,
            timeTrade: timeTrade
        })
        initialized.current = true
    }
    return null
}