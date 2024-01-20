"use client"

import styles from "@/layout/screens/sales/styles/sales.module.css";
import {useTranslations} from "next-intl";
import {useSalesStore} from "@/storage/client/sales";
import {WithdrawItem} from "@/layout/screens/withdraw/components/item";
import {SalesItem} from "@/layout/screens/sales/components/item";

export const Table = () => {
    const t = useTranslations()
    const salesStore = useSalesStore()
    return (
        <table className={styles.profile_rightPart_mainBlock_table}>
            <thead>
                <tr>
                    <th className={`${styles.profile_rightPart_mainBlock_table_header_frstItem} ${styles.profile_rightPart_mainBlock_table_header_item}`}>
                        #
                    </th>
                    <th className={styles.profile_rightPart_mainBlock_table_header_item}>
                        {t("Сумма")}
                    </th>
                    <th className={styles.profile_rightPart_mainBlock_table_header_item}>
                        {t("Скины")}
                    </th>
                    <th className={styles.profile_rightPart_mainBlock_table_header_item}>
                        {t("Способ выплаты")}
                    </th>
                    <th className={styles.profile_rightPart_mainBlock_table_header_item}>
                        {t("Статус")}
                    </th>
                    <th className={styles.profile_rightPart_mainBlock_table_header_item}>
                        {t("Дата")}
                    </th>
                </tr>
            </thead>
            <tbody>
                {salesStore.items.map((item, index) => <SalesItem date={item.date} id={item.id} status={item.status} payment={item.payment} amount={item.amount} key={index} images={item.images}/>)}
            </tbody>
        </table>
    )
}