"use client"
import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css"
import Image from "next/image";
import {Inventory} from "@/layout/screens/mainLogin/components/inventory/inventory";
import {Withdraw} from "@/layout/screens/mainLogin/components/withdraw/withdraw";
import {Statistics} from "@/layout/screens/mainLogin/components/statistics";
import {LastSales} from "@/layout/components/lastSales/lastSales";
import {DescriptionMarket} from "@/layout/components/descriptionMarket/descriptionMarket";
import React, {useEffect, useState} from "react";
import {PopUp} from "@/layout/popUp/popUp";
import Trade from "@/layout/popUp/trade/trade";
import {useTradeStore} from "@/storage/client/trade";
import { Error } from "@/layout/popUp/error/error"
import {useTranslations} from "next-intl";
import {toast} from "react-toastify";
import axios from "axios";
import Success from "@/layout/popUp/success/success";
import { useRef } from 'react';

export function MainLogin() {
    const [isOpenTradePopUp, setIsOpenTradePopUp] = useState<boolean>(false)
    const tradeStore = useTradeStore()
    const t = useTranslations()
    const audioRef = useRef<HTMLAudioElement>(null);

    const loadActiveTrade = async () => {
        try{
            const resp = await axios.get(`${process.env.api}/active_trade`, {withCredentials: true})
            if (resp.data.status){
                tradeStore.setEmail(resp.data.email)
                tradeStore.setPromocode(resp.data.promocode)
                tradeStore.setEmail(resp.data.email)
                tradeStore.setPaymentMethodId(resp.data.paymentMethodId)
                tradeStore.setItemsGive(resp.data.itemsGive)
                tradeStore.setPrice(resp.data.price)
                tradeStore.setTradeInfo(resp.data.tradeInfo)
                setIsOpenTradePopUp(true)
            }
            else if (!resp.data.status && resp.data.msg === "No trades found"){
                console.log("Нет активных обменов")
            }
            else{
                console.log(`Error getting active trade`)
                tradeStore.setIsError(true)
                tradeStore.setTradeInfo({errMsg: "Ошибка получения активного обмена", status: false})
            }
        }
        catch (e) {
            console.log(`Error getting active trade: ${e}`)
            toast.error(t("Ошибка получения активного обмена"), {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            })
        }
    }
    useEffect(() => {
        loadActiveTrade()
    }, [])
    useEffect(() => {
        if (audioRef.current && tradeStore.headerMsg === "Обмен отменён!"){
            audioRef.current.play()
        }
    }, [tradeStore.headerMsg]);
    return (
        <main className={styles.main}>
            <audio ref={audioRef} style={{width: "0px", height: "0px"}} src='/alarm.mp3'/>
            <section className={styles.basic_part}>
                <div className={styles.inventory_and_recieve}>
                    <Inventory/>
                    <Withdraw createTrade={() => setIsOpenTradePopUp(true)}/>
                </div>
                <Image src="/smoke_mainPart.webp" width={318} height={627} alt="дым" className={styles.smoke_mainPart}/>
            </section>
            <Statistics/>
            <LastSales/>
            <DescriptionMarket/>
            <Image src="/smoke_detailInformation.webp" width={162} height={869} alt="дым"
                   className={styles.smoke_detailInformation}/>
            <PopUp isOpen={isOpenTradePopUp}>
                <Trade isOpen={isOpenTradePopUp} setOpen={setIsOpenTradePopUp}/>
            </PopUp>
            <PopUp isOpen={tradeStore.isError} close={() => tradeStore.setIsError(false)}>
                <Error setOpen={tradeStore.resetTrade} msg={t(tradeStore.tradeInfo.errMsg || "Непредвиденная ошибка")}
                       headerMsg={t(tradeStore.headerMsg || "Ошибка создания трейда!")}
                       btnText={t("Вернутся на главную")} link="/"/>
            </PopUp>
            <PopUp isOpen={tradeStore.isSuccess} close={() => tradeStore.setIsSuccess(false)}>
                <Success setOpen={tradeStore.resetTrade}/>
            </PopUp>
        </main>
    );
}