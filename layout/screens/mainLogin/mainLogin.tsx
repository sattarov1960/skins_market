"use client"
import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css"
import Image from "next/image";
import {useTranslations} from "next-intl";
import {Inventory} from "@/layout/screens/mainLogin/components/inventory/inventory";
import {Withdraw} from "@/layout/screens/mainLogin/components/withdraw/withdraw";
import {Statistics} from "@/layout/screens/mainLogin/components/statistics";
import {LastSales} from "@/layout/components/lastSales/lastSales";
import {DescriptionMarket} from "@/layout/components/descriptionMarket/descriptionMarket";
import {useState} from "react";
import {useWithdrawMainStore} from "@/storage/client/withdrawMain";
import {useTradeStore} from "@/storage/client/trade";
import axios from "axios";
import {toast} from "react-toastify";


export function MainLogin() {
    const [isOpenTradePopUp, setIsOpenTradePopUp] = useState<boolean>(false)
    const createTrade = async () => {
        setIsOpenTradePopUp(true)
        try{
            const tradeId = await createTradeRequest()
            if (!tradeId){
                return
            }
            let isTradePending = true
            while (isTradePending){
                const status = await pendingTrade({tradeId: tradeId})
                if (status.finish){
                    isTradePending = false
                }
            }
        }
        catch (e){
            setIsOpenTradePopUp(false)
        }
    }
    const pendingTrade = async ({tradeId}: {tradeId: string}) => {
        try{
            const resp = await axios.post(`${process.env.api}/pending_trade`, {tradeId: tradeId}, {withCredentials: true})
            if (resp.data.status){
                return resp.data
            }
        }
        catch (e){
            console.log(`Error getting exchange status: ${e}`)
            toast.error("Ошибка получения статуса обмена", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            })
        }
        return false
    }

    const createTradeRequest = async () => {
        try{
            const resp = await axios.post(`${process.env.api}/create_trade`, {}, {withCredentials: true})
            if (resp.data.status){
                return resp.data.id
            }
        }
        catch (e){
            console.log(`Error create trade request: ${e}`)
            toast.error("Ошибка создания обмена", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true

            })
        }
        return false
    }
    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <div className={styles.inventory_and_recieve}>
                    <Inventory/>
                    <Withdraw createTrade={createTrade}/>
                </div>
                <Image src="/smoke_mainPart.webp" width={318} height={627} alt="дым" className={styles.smoke_mainPart}/>
            </section>
            <Statistics/>
            <LastSales/>
            <DescriptionMarket/>
            <Image src="/smoke_detailInformation.webp" width={162} height={869} alt="дым" className={styles.smoke_detailInformation}/>
        </main>
    );
}