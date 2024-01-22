"use client"

import styles from "@/layout/screens/sales/styles/sales.module.css";
import {useTranslations} from "next-intl";
import {useSalesStore} from "@/storage/client/sales";
import {SalesItem, SalesItemMobile} from "@/layout/screens/sales/components/item";

export const Table = () => {
    const t = useTranslations()
    const salesStore = useSalesStore()
    return (
        <div className={styles.profile_rightPart_mainBlock}>
            <table className={styles.profile_rightPart_mainBlock_table}>
                <thead className={styles.table_thead}>
                    <tr>
                        <td className={`${styles.profile_rightPart_mainBlock_table_header_item}`}>
                            #
                        </td>
                        <td className={styles.profile_rightPart_mainBlock_table_header_item}>
                            {t("Сумма")}
                        </td>
                        <td className={styles.profile_rightPart_mainBlock_table_header_item}>
                            {t("Скины")}
                        </td>
                        <td className={styles.profile_rightPart_mainBlock_table_header_item}>
                            {t("Способ выплаты")}
                        </td>
                        <td className={styles.profile_rightPart_mainBlock_table_header_item}>
                            {t("Статус")}
                        </td>
                        <td className={styles.profile_rightPart_mainBlock_table_header_item}>
                            {t("Дата")}
                        </td>
                    </tr>
                </thead>
                <tbody>
                {salesStore.items.map((item, index) => <SalesItem date={item.date} id={item.id} status={item.status} payment={item.payment} amount={item.amount} key={index} items={item.items}/>)}
                </tbody>
            </table>
            <div className={styles.profile_rightPart_mainBlock_mobilePart}>
                <ul className={styles.profile_rightPart_mainBlock_mobilePart_items}>
                    {salesStore.items.map((item, index) => <SalesItemMobile date={item.date} id={item.id} status={item.status} payment={item.payment} amount={item.amount} key={index} items={item.items}/>)}
                </ul>
            </div>
        </div>
    )
}