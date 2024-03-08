"use client";

import {FC, useRef} from "react"
import {usePaymentsStore} from "@/storage/client/payments";
import {PaymentStoreI} from "@/storage/interface/payment";

export const StoreInitializerPayment: FC<PaymentStoreI> = ({usdtTrc20, activeCard, cards, qiwi}) => {
    const initialized = useRef(false)
    if (!initialized.current){
        usePaymentsStore.setState({
            qiwi: qiwi,
            cards: cards,
            activeCard: activeCard,
            usdtTrc20: usdtTrc20
        })
        initialized.current = true
    }
    return null
}