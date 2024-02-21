"use client"
import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css";
import exchange_trade_url from "@/public/exchange_trade_url.svg";
import Image from "next/image";
import {useTranslations} from "next-intl";

export const LoadingInventory = () => {
    const t = useTranslations()
    return (
        <div className={styles.inventoryBlock_loading_inventory_wrap}>
            <Image className={styles.inventoryBlock_loading_inventory_icon} src={exchange_trade_url} alt="rolling"/>
            <h1 className={styles.inventoryBlock_loading_inventory_text}>{t("Загрузка инвентаря")}</h1>
            <h2 className={styles.inventoryBlock_loading_inventory_h2}>{t("Обычно инвентарь загружается за 10-15 секунд, но иногда это занимает до 5 минут")}</h2>
        </div>
    )
}