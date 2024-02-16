"use client"
import {PopUp} from "@/layout/components/popUp/popUp";
import styles from "./styles/trade.module.css"
import SuccessPopUp from "@/layout/components/popUp/success/success";
import TradePopUp from "@/layout/components/popUp/trade/trade";
import ErrorPopUp from "@/layout/components/popUp/error/error";
import Withdraw from "@/layout/components/popUp/withdraw/withdraw";

export function Trade({id}: {id: string | undefined}) {
    return (
        <main className={styles.main_trade_wrap}>
            <PopUp isOpen={true} close={() => null}>
                <TradePopUp/>
            </PopUp>
        </main>

    )
}