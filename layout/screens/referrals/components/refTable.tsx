"use client"
import styles from "@/layout/screens/referrals/styles/referrals.module.css";
import Image from "next/image";
import {RefTableItem} from "@/layout/screens/referrals/components/refTableItem";
import {useReferralsStore} from "@/storage/client/referrals";
import {useTranslations} from "next-intl";

export const RefTable = () => {
    const refStore = useReferralsStore()
    const t = useTranslations()
    return (
        <table className={styles.profile_rightPart_mainBlock_table}>
            <thead className={styles.table_thead}>
            <tr>
                <th className={`${styles.profile_rightPart_mainBlock_table_header_item} ${styles.profile_rightPart_mainBlock_table_header_frstItem}`}>
                    #
                </th>
                <th className={styles.profile_rightPart_mainBlock_table_header_item}>
                    Steam
                </th>
                <th className={styles.profile_rightPart_mainBlock_table_header_item}>
                    SteamID
                </th>
                <th className={styles.profile_rightPart_mainBlock_table_header_item}>
                    {t("Дата")}
                </th>
                <th className={styles.profile_rightPart_mainBlock_table_header_item}>
                    {t("Обменяно")}
                </th>
                <th className={styles.profile_rightPart_mainBlock_table_header_item}>
                    {t("Заработано")}
                </th>
            </tr>
            </thead>
            <tbody>
            {refStore.items.map((item, index) => <RefTableItem key={index} id={item.id} date={item.date} cost={item.cost} earned={item.earned} steamIcon={item.steamIcon} steamId={item.steamId} steamUserName={item.steamUserName}/>)}
            </tbody>
        </table>
    )
}