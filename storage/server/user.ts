"use client";

import {FC, useRef} from "react"
import {UserStoreI} from "@/storage/interface/user";
import {useUserStore} from "@/storage/client/user";

export const StoreInitializerUser: FC<UserStoreI> = ({auth,
                                                      email,
                                                      steamIcon,
                                                      steamUserName,
                                                      totalSales,
                                                      tradeLink,
                                                      telegramUserName}) => {
    const initialized = useRef(false)
    if (!initialized.current){
        useUserStore.setState({
            auth: auth,
            email: email,
            steamIcon: steamIcon,
            steamUserName: steamUserName,
            totalSales: totalSales,
            tradeLink: tradeLink,
            telegramUserName: telegramUserName})
        initialized.current = true
    }
    return null
}