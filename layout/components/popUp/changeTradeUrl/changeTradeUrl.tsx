"use client"
import exchange_trade_url from "@/public/exchange_trade_url.svg"
import close_popup from "@/public/close_popup.svg"
import Link from "next/link"
import styles from "@/layout/components/popUp/changeTradeUrl/changeTradeUrl.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {useTranslations} from "next-intl";

function changeTradeUrl(){
    const t = useTranslations()
    const [tradeUrl, setTradeUrl] = useState<string>("")
    const changeTradeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTradeUrl(e.target.value)
    }
    const saveTradeUrl = async () => {
        const toastId = toast(t("Сохраняем TRADE-URL"), {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            isLoading: true
        });
        try{
            const response = await axios.post(`${process.env.api}/save_trade_url`, {
                tradeUrl: tradeUrl
            }, {
                withCredentials: true
            })
            if (response.data.status){
                toast.update(toastId, {
                    render: t("TRADE-URL успешно сохранен"),
                    type: toast.TYPE.SUCCESS,
                    isLoading: false,
                    autoClose: 5000
                });
            }
        }
        catch (e) {
            toast.update(toastId, {
                render: t("Произошла ошибка при сохранении TRADE-URL"),
                type: toast.TYPE.ERROR,
                isLoading: false,
                autoClose: 5000
            });
        }
    }
    return (
        <section className={styles.change_url_wrap}>
            <Image className={styles.change_url_icon} src={exchange_trade_url} alt=""/>
            <Image className={styles.error_trade_close_icon} src={close_popup} alt=""/>
            <h1 className={styles.change_url_h1}>Изменение TRADE-URL</h1>
            <p className={styles.change_url_p}>Для обмена в Steam вам необходимо указать <br/> ссылку на трейд. <Link className={styles.change_url_p_underline} href={"https://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_access_url"} target={"_blank"}>Узнать свой Trade URL</Link></p>
            <input placeholder={"Введите ссылку на трейд"} className={styles.change_url_input} value={tradeUrl} onChange={(e) => changeTradeUrl(e)} type="text"/>
            <button className={styles.change_url_btn}>
                <p className={styles.change_url_btn_p}>Сохранить</p>
            </button>
        </section>
    )
}

export default changeTradeUrl;