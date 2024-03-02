"use client"
import {PopUp} from "@/layout/components/popUp/popUp";
import styles from "./styles/trade.module.css"
import TradePopUp from "@/layout/components/popUp/trade/trade";

export function Trade({id}: {id: string | undefined}) {
    return (
        <main className={styles.main_trade_wrap}>
            <PopUp isOpen={true} close={() => null}>
                <TradePopUp/>
            </PopUp>
        </main>

    )
}