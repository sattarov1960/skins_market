"use client";

import {FC, useRef} from "react"
import {PartnerI} from "@/interface/components/partner";
import {usePartnerStore} from "@/storage/client/partner";


export const StoreInitializerPartner: FC<PartnerI> = ({maxEarning, totalEarnings, totalInvited, averageInvited}) => {
    const initialized = useRef(false)
    if (!initialized.current){
        usePartnerStore.setState({
            averageInvited: averageInvited,
            totalInvited: totalInvited,
            totalEarnings: totalEarnings,
            maxEarning: maxEarning
        })
        initialized.current = true
    }
    return null
}