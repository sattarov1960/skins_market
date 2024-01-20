import styles from "@/layout/screens/withdraw/styles/withdraw.module.css";
import {WithdrawItemData} from "@/interface/components/withdrawItemData";
import {useTranslations} from "next-intl";


export const WithdrawItem = ({date, payment, id, status, amount}: WithdrawItemData) => {
    let statusColor;
    const t = useTranslations()
    switch (status){
        case "success":
            statusColor = styles.profile_rightPart_mainBlock_table_body_subItem_statusBlock_success
            break
        case "pending":
            statusColor = styles.profile_rightPart_mainBlock_table_body_subItem_statusBlock_pending
            break
        case "error":
            statusColor = styles.profile_rightPart_mainBlock_table_body_subItem_statusBlock_error
            break
    }
    return (
        <>
            <tr>
                <td className={`${styles.profile_rightPart_mainBlock_table_body_subItem} ${styles.profile_rightPart_mainBlock_table_body_subFrstItem}`}>
                    <p className={styles.profile_rightPart_mainBlock_table_body_subItem_text}>
                        #{id}
                    </p>
                </td>
                <td className={styles.profile_rightPart_mainBlock_table_body_subItem}>
                    <div className={styles.profile_rightPart_mainBlock_table_body_subItem_sumBlock}>
                        <p className={styles.profile_rightPart_mainBlock_table_body_subItem_text}>
                            {amount}₽
                        </p>
                    </div>
                </td>
                <td className={styles.profile_rightPart_mainBlock_table_body_subItem}>
                    <div
                        className={styles.profile_rightPart_mainBlock_table_body_subItem_paymentMethodBlock}>
                        <p className={styles.profile_rightPart_mainBlock_table_body_subItem_paymentMethodBlock_text}>
                            {t(payment)}
                        </p>
                    </div>
                </td>
                <td className={styles.profile_rightPart_mainBlock_table_body_subItem}>
                    <div
                        className={`${styles.profile_rightPart_mainBlock_table_body_subItem_statusBlock} ${statusColor}`}>
                        <p className={styles.profile_rightPart_mainBlock_table_body_subItem_statusBlock_text}>
                            {t(status)}
                        </p>
                    </div>
                </td>
                <td className={`${styles.profile_rightPart_mainBlock_table_body_subItem} ${styles.profile_rightPart_mainBlock_table_body_subLastItem}`}>
                    <p className={styles.profile_rightPart_mainBlock_table_body_subItem_text}>
                        {date}
                    </p>
                </td>
            </tr>
            <tr className={styles.profile_rightPart_mainBlock_table_body_stubItem}>
                <td>
                </td>
            </tr>
        </>
    )
}
export const WithdrawItemMobile = ({date, payment, id, status, amount}: WithdrawItemData) => {
    let statusColor;
    const t = useTranslations()
    switch (status){
        case "success":
            statusColor = styles.profile_rightPart_mainBlock_table_body_subItem_statusBlock_success
            break
        case "pending":
            statusColor = styles.profile_rightPart_mainBlock_table_body_subItem_statusBlock_pending
            break
        case "error":
            statusColor = styles.profile_rightPart_mainBlock_table_body_subItem_statusBlock_error
            break
    }
    return (
        <li>
            <div className={styles.profile_rightPart_mainBlock_mobilePart_item_header}>
                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                    #{id}
                </p>
                <div
                    className={styles.profile_rightPart_mainBlock_mobilePart_item_header_paymentBlock}>
                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                        {t(payment)}
                    </p>
                </div>
                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                    {date}
                </p>
            </div>
            <div className={styles.profile_rightPart_mainBlock_mobilePart_item_footer}>
                <div
                    className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_priceBlock}>
                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_priceBlock_text}>
                        {amount}₽
                    </p>
                </div>
                <div className={`${styles.profile_rightPart_mainBlock_mobilePart_item_footer_statusBlock} ${statusColor}`}>
                    <p>
                        {t(status)}
                    </p>
                </div>
            </div>
        </li>
    )
}