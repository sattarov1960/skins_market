"use client"
import exchange_trade_url from "@/public/exchange_trade_url.svg"
import close_popup from "@/public/close_popup.svg"
import Link from "next/link"
import styles from "@/layout/popUp/changeTradeUrl/changeTradeUrl.module.css";
import Image from "next/image";
import {Dispatch, SetStateAction, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {useTranslations} from "next-intl";
import {validateTradeLink} from "@/utilities/validate/tradeLink";
import {useUserStore} from "@/storage/client/user";

function ChangeTradeUrl({close, setTradeLink}: {close: Dispatch<SetStateAction<boolean>>, setTradeLink: any}){
    const t = useTranslations()
    const userStore = useUserStore()
    const [tradeUrl, setTradeUrl] = useState<string>(userStore.tradeLink || "")
    const changeTradeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTradeUrl(e.target.value)
    }
    const saveTradeUrl = async (e: any) => {
        e.preventDefault();
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
            const isValidTradeUrl = validateTradeLink(tradeUrl)
            if (!isValidTradeUrl){
                toast.update(toastId, {
                    render: `${t("Некорректный")} TRADE-URL`,
                    type: toast.TYPE.ERROR,
                    isLoading: false,
                    autoClose: 5000
                });
                return;
            }
            const response = await axios.post(`${process.env.api}/save_user_profile`,
                {tradeLink: tradeUrl, email: null, telegramUserName: null},
                {withCredentials: true})
            if (response.data.status){
                toast.update(toastId, {
                    render: `TRADE-URL ${t("успешно сохранен")}`,
                    type: toast.TYPE.SUCCESS,
                    isLoading: false,
                    autoClose: 5000
                });
                setTradeLink(tradeUrl)
                close(false)
            }
            else{
                toast.update(toastId, {
                    render: `${t("Произошла ошибка при сохранении")} TRADE-URL`,
                    type: toast.TYPE.ERROR,
                    isLoading: false,
                    autoClose: 5000
                });
            }
        }
        catch (e) {
            toast.update(toastId, {
                render: `${t("Произошла ошибка при сохранении")} TRADE-URL`,
                type: toast.TYPE.ERROR,
                isLoading: false,
                autoClose: 5000
            });
        }
    }
    return (
        <form onSubmit={(e) => saveTradeUrl(e)} className={styles.change_url_wrap}>
            <Image className={styles.change_url_icon} src={exchange_trade_url} alt=""/>
            <Image className={styles.error_trade_close_icon} src={close_popup} alt="" onClick={() => close(false)}/>
            <h1 className={styles.change_url_h1}>{t("Изменение")}TRADE-URL</h1>
            <p className={styles.change_url_p}>{t("Для обмена в Steam вам необходимо указать")}<br/>{t("ссылку на трейд")} <Link className={styles.change_url_p_underline} href={"https://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_access_url"} target={"_blank"}>{t("Узнать свой")}Trade URL</Link></p>
            <input required={true} placeholder={"Введите ссылку на трейд"} className={styles.change_url_input} value={tradeUrl} onChange={(e) => changeTradeUrl(e)} type="text"/>
            <button type="submit" className={styles.change_url_btn}>
                <p className={styles.change_url_btn_p}>{t("Сохранить")}</p>
            </button>
        </form>
    )
}

export default ChangeTradeUrl;