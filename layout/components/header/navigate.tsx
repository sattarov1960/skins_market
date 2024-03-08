"use client"
import styles from "@/layout/components/header/header.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useTranslations} from "next-intl";
import {useUserStore} from "@/storage/client/user";

export const Navigate = () => {
    const t = useTranslations()
    const userStore = useUserStore()
    const scrollInto = () => {
        const element = document.querySelector('#reviews')
        if (!element) return
        element.scrollIntoView({
            behavior: 'smooth',
        })
    }
    const pathname = usePathname()
    return (
        <div className={styles.nav_midBlock}>
            <ul className={styles.nav_midBlock_items}>
                <li className={`${styles.nav_midBlock_item} ${styles.nav_midBlock_item_frst} ${pathname.endsWith("/ru") || pathname.endsWith("/en") || pathname.endsWith("/") ? styles.nav_midBlock_item_active : null}`}>
                    <Link href="/">{t("Главная")}</Link>
                    {pathname.endsWith("/ru") || pathname.endsWith("/en") || pathname.endsWith("/") ?
                        <div className={styles.nav_midBlock_item_active_line}/> : null}
                </li>
                {userStore.auth ??
                    <li className={`${styles.nav_midBlock_item} ${pathname.endsWith("/#reviews") ? styles.nav_midBlock_item_active : null}`}>
                        <Link href="/" onClick={scrollInto}>{t("Отзывы")}</Link>
                        {pathname.endsWith("#reviews") ? <div className={styles.nav_midBlock_item_active_line}/> : null}
                    </li>}
                <li className={`${styles.nav_midBlock_item} ${pathname.endsWith("/how") ? styles.nav_midBlock_item_active : null}`}>
                    <Link href="/how">{t("Помощь")}</Link>
                    {pathname.endsWith("/how") ? <div className={styles.nav_midBlock_item_active_line}/> : null}
                </li>
                <li className={`${styles.nav_midBlock_item} ${pathname.endsWith("/faq") ? styles.nav_midBlock_item_active : null}`}>
                    <Link href="/faq">FAQ</Link>
                    {pathname.endsWith("/faq") ? <div className={styles.nav_midBlock_item_active_line}/> : null}
                </li>
                <li className={`${styles.nav_midBlock_item} ${pathname.endsWith("/contact") ? styles.nav_midBlock_item_active : null}`}>
                    <Link href="/contact">{t("Контакты")}</Link>
                    {pathname.endsWith("/contact") ? <div className={styles.nav_midBlock_item_active_line}/> : null}
                </li>
                <li className={`${styles.nav_midBlock_item} ${pathname.endsWith("/partner") ? styles.nav_midBlock_item_active : null}`}>
                    <Link href="/partner">{t("Партнерка")}</Link>
                    {pathname.endsWith("/partner") ? <div className={styles.nav_midBlock_item_active_line}/> : null}
                </li>
            </ul>
        </div>
    )
}