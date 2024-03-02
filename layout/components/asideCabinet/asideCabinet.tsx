"use client"
import styles from "@/layout/components/asideCabinet/asideCabinet.module.css"
import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'
import {useUserStore} from "@/storage/client/user";
import {useState} from "react";

export const AsideCabinet = () => {
    const t = useTranslations()
    const userStore = useUserStore()
    const pathname = usePathname();

    const [hoveredItem, setHoveredItem] = useState('');

    const handleMouseEnter = (item: string) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem('');
    };

    function formatCurrency(value: number) {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 2
        }).format(value);
    }
    return (
        <div>
            <div className={styles.profile_leftPart_headerBlock}>
                <Image src={`https://avatars.steamstatic.com/${userStore.steamIcon}_full.jpg`} width={88} height={88} alt="аватар"
                       className={styles.peopleAvatar_profile}/>
                <div className={styles.profile_leftPart_sub_headerBlock}>
                    <p className={styles.profile_leftPart_sub_headerBlock_nameText}>
                        {userStore.steamUserName}
                    </p>
                    <span className={styles.profile_leftPart_sub_headerBlock_priceText}>
                  {t("Сделок на")}{formatCurrency(userStore.totalSales)}
                  </span>
                </div>
            </div>
            <div className={styles.profile_leftPart_mainBlock}>
                <ul>
                    <li className={`${styles.profile_leftPart_mainBlock_item} ${pathname.endsWith("/profile") ? styles.profile_leftPart_mainBlock_item_active : null}`} onMouseEnter={() => handleMouseEnter('/profile')} onMouseLeave={handleMouseLeave}>
                        <Link href={"/profile"} className={styles.profile_left_part_link}>
                            <Image src={`/profileCircle_icon_${pathname.endsWith("/profile") || hoveredItem === "/profile" ? "white" : "gray"}.svg`} width={24} height={24} alt="Icon"/>
                            <p className={styles.profile_leftPart_mainBlock_item_text}>
                                {t("Профиль")}
                            </p>
                        </Link>
                    </li>
                    <li className={`${styles.profile_leftPart_mainBlock_item} ${pathname.endsWith("/payments") ? styles.profile_leftPart_mainBlock_item_active : null}`} onMouseEnter={() => handleMouseEnter('/payments')} onMouseLeave={handleMouseLeave}>
                        <Link href={"/payments"} className={styles.profile_left_part_link}>
                            <Image src={`/cards_icon_${pathname.endsWith("/payments") || hoveredItem === "/payments" ? "white" : "gray"}.svg`} width={24} height={24} alt="Cards"/>
                            <p className={styles.profile_leftPart_mainBlock_item_text}>
                                {t("Платежные реквизиты")}
                            </p>
                        </Link>
                    </li>
                    <li className={`${styles.profile_leftPart_mainBlock_item} ${pathname.endsWith("/sales") ? styles.profile_leftPart_mainBlock_item_active : null}`} onMouseEnter={() => handleMouseEnter('/sales')} onMouseLeave={handleMouseLeave}>
                        <Link href={"/sales"} className={styles.profile_left_part_link}>
                            <Image src={`/walletCheck_${pathname.endsWith("/sales") || hoveredItem === "/sales" ? "white" : "gray"}_icon.svg`} width={24} height={24} alt="Wallet"/>
                            <p className={styles.profile_leftPart_mainBlock_item_text}>
                                {t("Мои продажи")}
                            </p>
                        </Link>
                    </li>
                    <li className={`${styles.profile_leftPart_mainBlock_item} ${pathname.endsWith("/withdraw") ? styles.profile_leftPart_mainBlock_item_active : null}`} onMouseEnter={() => handleMouseEnter('/withdraw')} onMouseLeave={handleMouseLeave}>
                        <Link href={"/withdraw"} className={styles.profile_left_part_link}>
                            <Image src={`/emptyWalletChange_${pathname.endsWith("/withdraw") || hoveredItem === "/withdraw" ? "white" : "gray"}_icon.svg`} width={24} height={24} alt="Wallet"/>
                            <p className={styles.profile_leftPart_mainBlock_item_text}>
                                {t("Мои выводы")}
                            </p>
                        </Link>
                    </li>
                    <li className={`${styles.profile_leftPart_mainBlock_item} ${pathname.endsWith("/referrals") ? styles.profile_leftPart_mainBlock_item_active : null}`} onMouseEnter={() => handleMouseEnter('/referrals')} onMouseLeave={handleMouseLeave}>
                        <Link href={"/referrals"} className={styles.profile_left_part_link}>
                            <Image src={`/share_${pathname.endsWith("/referrals") || hoveredItem === "/referrals" ? "white" : "gray"}_icon.svg`} width={24} height={24} alt="Share"/>
                            <p className={styles.profile_leftPart_mainBlock_item_text}>
                                {t("Реферальная система")}
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}