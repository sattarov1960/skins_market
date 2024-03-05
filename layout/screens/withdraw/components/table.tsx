"use client"
import styles from "@/layout/screens/withdraw/styles/withdraw.module.css";
import {WithdrawItem, WithdrawItemMobile} from "@/layout/screens/withdraw/components/item";
import {WithdrawItemData} from "@/interface/components/withdrawItemData";
import {useTranslations} from "next-intl";

export const Table = ({items}: {items: WithdrawItemData[]}) => {
    const t = useTranslations()
    return (
        <div className={styles.profile_rightPart_mainBlock}>
            <table className={styles.profile_rightPart_mainBlock_table}>
                <thead className={styles.table_thead}>
                <tr className={styles.profile_rightPart_mainBlock_table_header_items}>
                    <th className={`${styles.profile_rightPart_mainBlock_table_header_item} ${styles.profile_rightPart_mainBlock_table_header_frstItem}`}>
                        #
                    </th>
                    <th className={styles.profile_rightPart_mainBlock_table_header_item}>
                        {t("Сумма")}
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
                {items.map((item, index) => <WithdrawItem key={index} date={item.date} id={item.id}
                                                         status={item.status} payment={item.payment}
                                                         amount={item.amount}/>)}
                </tbody>
            </table>
            <div className={styles.profile_rightPart_mainBlock_mobilePart}>
                <ul>
                    {items.map((item, index) => <WithdrawItemMobile key={index} date={item.date} id={item.id}
                                                                   status={item.status} payment={item.payment}
                                                                   amount={item.amount}/>)}
                </ul>
            </div>
        </div>
    )
}