"use client";

import {FC, useRef} from "react"
import {useReferralsStore} from "@/storage/client/referrals";
import {RefTableItemI} from "@/interface/components/refTableItem";

interface ReferralsPropsI{
    totalEarned: number
    totalInvited: number
    totalCostSalesReferrals: number
    referralBalance: number
    referralCode: string
    inviteLink: string
    items: RefTableItemI[]
}

export const StoreInitializerReferrals: FC<ReferralsPropsI> = ({totalEarned,
                                                                referralBalance,
                                                                referralCode,
                                                                totalInvited,
                                                                totalCostSalesReferrals,
                                                                inviteLink,
                                                                items}) => {
    const initialized = useRef(false)
    if (!initialized.current){
        useReferralsStore.setState({
            totalEarned: totalEarned,
            totalInvited: totalInvited,
            totalCostSalesReferrals: totalCostSalesReferrals,
            referralBalance: referralBalance,
            referralCode: referralCode,
            inviteLink: inviteLink,
            items: items
        })
        initialized.current = true
    }
    return null
}