'use client'
import styles from "@/layout/components/footer/footer.module.css"
import Image from "next/image";
import Link from "next/link";
import {usePathname} from 'next/navigation'
import {useTranslations} from "next-intl";
import {useMetaStore} from "@/storage/client/meta";
import {secondsToWord, TimePassedToString} from "@/utilities/time";

export function Footer() {
    const metaStore = useMetaStore()
    const t = useTranslations()
    const pathname = usePathname()
    const {timePassedString, wordPassed} = TimePassedToString(metaStore.timeWorking)
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_statisticPart}>
                <ul className={styles.footer_statisticPart_items}>
                    <li className={styles.footer_statisticPart_item}>
                        <p className={styles.footer_statisticPart_item_mainText}>
                            {timePassedString}+
                        </p>
                        <hr className={styles.footer_statisticPart_item_line}/>
                        <span className={styles.footer_statisticPart_item_subText}>
                            {t(wordPassed).replace(" назад", "").replace(" back", "")} {t("работы")}
                        </span>
                    </li>
                    <li className={styles.footer_statisticPart_item}>
                        <p className={styles.footer_statisticPart_item_mainText}>
                            {metaStore.countSales}+
                        </p>
                        <hr className={styles.footer_statisticPart_item_line}/>
                        <span className={styles.footer_statisticPart_item_subText}>
                            {t("Продано предметов")}
                        </span>
                    </li>
                    <li className={styles.footer_statisticPart_item}>
                        <p className={styles.footer_statisticPart_item_mainText}>
                            {metaStore.countUsers}+
                        </p>
                        <hr className={styles.footer_statisticPart_item_line}/>
                        <span className={styles.footer_statisticPart_item_subText}>
                            {t("Счастливых клиентов")}
                        </span>
                    </li>
                    <li className={styles.footer_statisticPart_item}>
                        <p className={styles.footer_statisticPart_item_mainText}>
                            {metaStore.countReviews}+
                        </p>
                        <hr className={styles.footer_statisticPart_item_line}/>
                        <span className={styles.footer_statisticPart_item_subText}>
                            {t("Позитивных отзывов")}
                        </span>
                    </li>
                    <li className={styles.footer_statisticPart_item}>
                        <p className={styles.footer_statisticPart_item_mainText}>
                            ~1
                        </p>
                        <hr className={styles.footer_statisticPart_item_line}/>
                        <span className={styles.footer_statisticPart_item_subText}>
                            {t("Минуту занимает сделка")}
                        </span>
                    </li>
                </ul>
                <hr className={styles.footer_line}/>
            </div>
            <div className={styles.footer_links}>
                <Image src="/logo.svg" width={122} height={18} alt="лого" className={`${styles.footer_logo} ${styles.footer_logo_mobile}`}/>
                <div className={styles.footer_nav_wrap}>
                    <ul className={styles.footer_links_leftBlock_items}>
                        <li className={`${styles.footer_links_leftBlock_item} ${styles.footer_links_leftBlock_frstItem}`}>
                            <Image src="/logo.svg" width={122} height={18} alt="лого" className={styles.footer_logo}/>
                        </li>
                        <div className={styles.footer_links_leftBlock_navItem}>
                            <li className={`${styles.footer_links_leftBlock_item} ${pathname.endsWith("/ru") || pathname.endsWith("/en") || pathname.endsWith("/") ? styles.footer_links_leftBlock_item_active : null}`}>
                                <Link href="/">{t("Главная")}</Link>
                            </li>
                            <li className={`${styles.footer_links_leftBlock_item} ${pathname.endsWith("/#reviews") ? styles.footer_links_leftBlock_item_active : null}`}>
                                <Link href="/#reviews">{t("Отзывы")}</Link>
                            </li>
                            <li className={`${styles.footer_links_leftBlock_item} ${pathname.endsWith("/how") ? styles.footer_links_leftBlock_item_active : null}`}>
                                <Link href="/how">{t("Помощь")}</Link>
                            </li>
                            <li className={`${styles.footer_links_leftBlock_item} ${pathname.endsWith("/faq") ? styles.footer_links_leftBlock_item_active : null}`}>
                                <Link href="/faq">FAQ</Link>
                            </li>
                            <li className={`${styles.footer_links_leftBlock_item} ${pathname.endsWith("/contact") ? styles.footer_links_leftBlock_item_active : null}`}>
                                <Link href="/contact">{t("Контакты")}</Link>
                            </li>
                            <li className={`${styles.footer_links_leftBlock_item} ${pathname.endsWith("/partner") ? styles.footer_links_leftBlock_item_active : null}`}>
                                <Link href="/partner">{t("Партнерка")}</Link>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className={styles.footer_nav_wrap}>
                    <ul className={styles.footer_links_rightBlock_items}>
                        <li className={`${styles.footer_links_rightBlock_item} ${styles.footer_links_rightBlock_frstItem}`}>
                            <Image src="/mastercard_icon.svg" width={39} height={24} alt="карта"
                                   className={styles.mastercard_icon}/>
                        </li>
                        <li className={styles.footer_links_rightBlock_item}>
                            <Image src="/visa_icon.svg" width={69} height={23} alt="карта"
                                   className={styles.visa_icon}/>
                        </li>
                        <li className={styles.footer_links_rightBlock_item}>
                            <Image src="/bitcoin_icon.svg" width={87} height={24} alt="биток"
                                   className={styles.bitcoin_icon}/>
                        </li>
                        <li className={`${styles.footer_links_rightBlock_item} ${styles.footer_links_rightBlock_specialItem}`}>
                            <hr className={styles.footer_links_rightBlock_item_line}/>
                        </li>
                        {/*<li className={`${styles.footer_links_rightBlock_item} ${styles.footer_links_rightBlock_frstItem}`}>*/}
                        {/*    <a href="https://t.me/CS_SELL_SUPPORT">*/}
                        {/*        <Image src="/steam_footerIcon.svg" width={29} height={28} alt="стим"*/}
                        {/*               className={styles.steam_footerIcon}/>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        {/*<li className={`${styles.footer_links_rightBlock_item} ${styles.footer_links_rightBlock_socialNetworkItem}`}>*/}
                        {/*    <a href="https://t.me/CS_SELL_SUPPORT">*/}
                        {/*        <Image src="/vk_footerIcon.svg" width={31} height={20} alt="вк"*/}
                        {/*               className={styles.vk_footerIcon}/>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        <li className={`${styles.footer_links_rightBlock_item} ${styles.footer_links_rightBlock_socialNetworkItem}`}>
                            <a href="https://t.me/CS_SELL_SUPPORT">
                                <Image src="/tg_footerIcon.svg" width={25} height={24} alt="тг"
                                       className={styles.tg_footerIcon}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}