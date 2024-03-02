"use client"

import React from 'react';
import styles from "@/layout/screens/sales/styles/sales.module.css";
import {SalesItemRowI} from "@/interface/components/salesItem";
import {useTranslations} from "next-intl";
import Image from "next/image";
import {CustomTooltip} from "@/layout/components/customTitle/customTitle";
import Link from "next/link";
import {getRarityColor} from "@/utilities/rerityColor";
import {formatCurrency} from "@/utilities/formatCyrrency";

export const SalesItem = ({ id, amount, payment, status, date, items }: SalesItemRowI) => {
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
                        {items.slice(0, 3).map((item, index) =>
                            <CustomTooltip key={index}
                                           tooltipText={`${item.marketHashName} - ${formatCurrency(item.cost)}`}>
                                <div
                                    className="relative w-[63px] h-[63px] overflow-hidden inline-block transform scale-100 transition duration-500 hover:scale-150 hover:brightness-150">
                                    <Link
                                        href={`https://steamcommunity.com/market/listings/${item.gameId}/${item.marketHashName}`}>
                                        <div style={{
                                            backgroundColor: getRarityColor(item.rarity),
                                            opacity: 0.68,
                                            filter: 'blur(8px)',
                                            width: '50%',
                                            height: '50%',
                                            flexShrink: 0,
                                            borderRadius: "9999px",
                                            position: "absolute",
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)'
                                        }}>
                                        </div>
                                        <Image
                                            src={`https://community.steamstatic.com/economy/image/${item.image}/360fx360f`}
                                            alt={item.marketHashName}
                                            layout="fill"
                                            objectFit="cover"
                                            objectPosition="center"
                                            quality={100}
                                        />
                                    </Link>
                                </div>
                            </CustomTooltip>
                        )}
                        {items.length > 3 &&
                            <div className={styles.profile_rightPart_mainBlock_table_body_subItem_skinsBlock_quantity} onClick={() => alert("Еще не реализовано")}>
                                <p className={styles.profile_rightPart_mainBlock_table_body_subItem_skinsBlock_quantity_text}>
                                    +{items.length - 3}
                                </p>
                            </div>}
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


export const SalesItemMobile = ({ id, amount, payment, status, date, items }: SalesItemRowI) => {
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
    return (
        <li className={styles.profile_rightPart_mainBlock_mobilePart_item_wrap}>
            <div className={styles.profile_rightPart_mainBlock_mobilePart_item_header}>
                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                    #{id}
                </p>
                <div className={styles.profile_rightPart_mainBlock_mobilePart_item_header_paymentBlock}>
                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                        {t(payment)}
                    </p>
                </div>
                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                    {date}
                </p>
            </div>
            <div className={styles.profile_rightPart_mainBlock_mobilePart_item_main}>
                {items.slice(0, 3).map((item, index) =>
                    <CustomTooltip key={index}
                                   tooltipText={`${item.marketHashName} - ${formatCurrency(item.cost)}`}>
                        <div
                            className="relative w-[63px] h-[63px] overflow-hidden inline-block transform scale-100 transition duration-500 hover:scale-150 hover:brightness-150">
                            <Link
                                href={`https://steamcommunity.com/market/listings/${item.gameId}/${item.marketHashName}`}>
                                <div style={{
                                    backgroundColor: getRarityColor(item.rarity),
                                    opacity: 0.68,
                                    filter: 'blur(8px)',
                                    width: '50%',
                                    height: '50%',
                                    flexShrink: 0,
                                    borderRadius: "9999px",
                                    position: "absolute",
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }}>
                                </div>
                                <Image
                                    src={`https://community.steamstatic.com/economy/image/${item.image}/360fx360f`}
                                    alt={item.marketHashName}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                    quality={100}
                                />
                            </Link>
                        </div>
                    </CustomTooltip>
                )}
                {items.length > 3 &&
                    <div className={styles.profile_rightPart_mainBlock_mobilePart_item_main_sumBlock}>
                        <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_sumBlock_text}>
                            +{items.length - 3}
                        </p>
                    </div>}

            </div>
            <div className={styles.profile_rightPart_mainBlock_mobilePart_item_footer}>
                <div className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_priceBlock}>
                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_priceBlock_text}>
                        {formatCurrency(amount)}
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