"use client"
import exchange_trade_url from "@/public/exchange_trade_url.svg"
import close_popup from "@/public/close_popup.svg"
import Link from "next/link"
import styles from "@/layout/components/popUp/error/styles.module.css";
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
        <section>
            <Image src={exchange_trade_url} alt=""/>
            <Image className={styles.error_trade_close_icon} src={close_popup} alt=""/>
            <h1>Изменение TRADE-URL</h1>
            <p>Для обмена в Steam вам необходимо указать ссылку на трейд.</p>
            <Link href={""}>Узнать свой Trade url</Link>
            <input value={tradeUrl} onChange={(e) => changeTradeUrl(e)} type="text"/>
            <button>Сохранить</button>
        </section>
    )
}

export default changeTradeUrl;