"use client"
import success from "@/public/success_trade.svg"
import close_popup from "@/public/close_popup.svg"
import Link from "next/link";
import Image from "next/image";
import styles from "@/layout/components/popUp/success/styles.module.css"
import {useTranslations} from "next-intl";

function Success(){
    const t = useTranslations()
    return (
        <section className={styles.success_trade_wrap}>
            <Image className={styles.success_trade_img} src={success} alt=""/>
            <Image className={styles.success_trade_close_icon} src={close_popup} alt=""/>
            <h1 className={styles.success_trade_h1}>{t("Операция успешна!")}</h1>
            <p className={styles.success_trade_p}>{t("Спасибо за продажу Деньги придут ")}<br/>{t(" на ваш счет в течении 24 часов")}</p>
            <Link href="/" className={styles.success_trade_button}>
                <span className={styles.success_trade_button_text}>{t("Вернутся на главную")}</span>
            </Link>
        </section>
    )
}
export default Success