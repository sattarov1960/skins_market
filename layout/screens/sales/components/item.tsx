"use client"

import React from 'react';
import styles from "@/layout/screens/sales/styles/sales.module.css";
import {SalesItemI} from "@/interface/components/salesItem";
import {useTranslations} from "next-intl";
import Image from "next/image";

export const SalesItem = ({ id, amount, payment, status, date, images }: SalesItemI) => {
    const t = useTranslations()
    let statusColor;
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
    function formatCurrency(value: number) {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    }
    return (
        <>
            <tr className={styles.profile_rightPart_mainBlock_table_body_stubItem}>
                <td></td>
            </tr>
            <tr className={styles.profile_rightPart_mainBlock_table_body_item}>
                <td className={`${styles.profile_rightPart_mainBlock_table_body_subItem} ${styles.profile_rightPart_mainBlock_table_body_subFrstItem}`}>
                    <p className={`${styles.profile_rightPart_mainBlock_table_body_subItem_text}`}>
                        {id}
                    </p>
                </td>
                <td className={styles.profile_rightPart_mainBlock_table_body_subItem}>
                    <div className={styles.profile_rightPart_mainBlock_table_body_subItem_sumBlock}>
                        <p className={styles.profile_rightPart_mainBlock_table_body_subItem_text}>
                            {formatCurrency(amount)}
                        </p>
                    </div>
                </td>
                <td className={`${styles.profile_rightPart_mainBlock_table_body_subItem} ${styles.profile_rightPart_mainBlock_table_body_subItem_skins}`}>
                    <div className={styles.profile_rightPart_mainBlock_table_body_subItem_skinsBlock}>
                        {images.map((img, index) => <Image src={img} alt="gun" key={index}/>)}
                    </div>
                </td>
                <td className={styles.profile_rightPart_mainBlock_table_body_subItem}>
                    <div className={styles.profile_rightPart_mainBlock_table_body_subItem_paymentMethodBlock}>
                        <p className={styles.profile_rightPart_mainBlock_table_body_subItem_paymentMethodBlock_text}>
                            {t(payment)}
                        </p>
                    </div>
                </td>
                <td className={styles.profile_rightPart_mainBlock_table_body_subItem}>
                    <div className={`${styles.profile_rightPart_mainBlock_table_body_subItem_statusBlock} ${statusColor}`}>
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
        </>
    );
};
