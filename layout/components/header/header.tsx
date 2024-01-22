'use client'
import styles from "@/layout/components/header/header.module.css"
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'
import { useState } from "react";
import { useWalletStore } from "@/storage/client/wallet";
import {useLocale, useTranslations} from "next-intl";



function Language() {
    let activePath
    let activeName
    const locale = useLocale()
    const [isChecked, setIsChecked] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const changeLanguage = (language: string) => {
        router.push(pathname.replace("/" + locale, "/" + language));
    };


    const handleChange = () => {
        setIsChecked(!isChecked);
    };
    switch (locale){
        case "ru":
            activeName = "RU"
            activePath = "/ru_icon.svg"
            break
        case "en":
            activeName = "EN"
            activePath = "/en_icon.svg"
            break
        default:
            activeName = "RU"
            activePath = "/ru_icon.svg"
    }
    return (
        <section className={styles.box}>
            <div className={styles.nav_languageBlock} onClick={handleChange}>
                <Image src={activePath} width={18} height={19} alt="флаг" className={styles.ru}/>
                <p className={styles.nav_languageBlock_text}>
                    {activeName}
                </p>
                <Image src="/arrow_bot.svg" width={11} height={12} alt="стрелочка"/>
            </div>
            {isChecked ? <div className={styles.nav_languageBlock_addElement}>
                <ul>
                    <li className={`${styles.nav_languageBlock_addElement_item} ${activeName === "RU" ? styles.nav_languageBlock_addElement_item_active : null}`} onClick={() => changeLanguage("ru")}>
                        <Image src="/ru_dark_icon.svg" width={122} height={18} alt="ru" className={styles.nav_languageBlock_addElement_item_flag}/>
                            <p className={styles.nav_languageBlock_addElement_item_subText}>
                                RU
                            </p>
                    </li>
                    <li className={`${styles.nav_languageBlock_addElement_item} ${activeName === "EN" ? styles.nav_languageBlock_addElement_item_active : null}`} onClick={() => changeLanguage("en")}>
                        <Image src="/en_icon.svg" width={122} height={18} className={styles.nav_languageBlock_addElement_item_flag} alt="en" />
                            <p className={styles.nav_languageBlock_addElement_item_text}>
                                EN
                            </p>
                    </li>
                </ul>
            </div> : null}
        </section>
    );
}

function Wallet() {
    const storeWallet = useWalletStore()
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <section className={styles.box}>
            <div className={styles.nav_currencyBlock} onClick={handleChange}>
                <Image src="/wallet_icon.svg" width={18} height={18} alt="кошелек" className={styles.wallet_icon}/>
                <p className={styles.nav_currencyBlock_text}>
                    {storeWallet.activeName}
                </p>
                <Image src="/arrow_bot.svg" width={11} height={12} alt="стрелочка"/>
            </div>
            {isChecked ? <div className={styles.nav_currencyBlock_addElement}>
                <ul>
                    <li className={`${styles.nav_currencyBlock_addElement_item} ${storeWallet.activeName == "RUB" ? styles.nav_currencyBlock_addElement_item_active : null} ${styles.nav_currencyBlock_addElement_frstItem} `} onClick={() => storeWallet.setActiveName("RUB")}>
                        <p className={styles.nav_currencyBlock_addElement_item_text}>
                            ₽
                        </p>
                        <p className={styles.nav_currencyBlock_addElement_item_text}>
                            RUB
                        </p>
                    </li>
                    <li className={`${styles.nav_currencyBlock_addElement_item} ${storeWallet.activeName == "UAH" ? styles.nav_currencyBlock_addElement_item_active : null}`} onClick={() => storeWallet.setActiveName("UAH")}>
                        <p className={styles.nav_currencyBlock_addElement_item_text}>
                            ₴
                        </p>
                        <p className={`${styles.nav_currencyBlock_addElement_item_text} ${styles.nav_currencyBlock_addElement_item_scndText}`}>
                            UAH
                        </p>
                    </li>
                    <li className={`${styles.nav_currencyBlock_addElement_item} ${storeWallet.activeName == "KZT" ? styles.nav_currencyBlock_addElement_item_active : null}`} onClick={() => storeWallet.setActiveName("KZT")}>
                        <p className={styles.nav_currencyBlock_addElement_item_text}>
                            ₸
                        </p>
                        <p className={`${styles.nav_currencyBlock_addElement_item_text} ${styles.nav_currencyBlock_addElement_item_scndText}`}>
                            KZT
                        </p>
                    </li>
                </ul>
            </div> : null}
        </section>
    )
}


export function Header() {
    const t = useTranslations()
    const pathname = usePathname()

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.nav_leftBlock}>
                    <Image src="/logo.svg" width={122} height={18} alt="лого" className={styles.logo}/>
                    <hr className={styles.nav_line}/>
                    <Language/>
                    <Wallet/>
                </div>
                <div className={styles.nav_midBlock}>
                    <ul className={styles.nav_midBlock_items}>
                        <li className={`${styles.nav_midBlock_item} ${styles.nav_midBlock_item_frst} ${pathname.endsWith("/ru") || pathname.endsWith("/en") || pathname.endsWith("/") ? styles.nav_midBlock_item_active : null}`}>
                            <Link href="/">{t("Главная")}</Link>
                            {pathname.endsWith("/ru") || pathname.endsWith("/en") || pathname.endsWith("/") ?
                                <div className={styles.nav_midBlock_item_active_line}/> : null}
                        </li>
                        <li className={`${styles.nav_midBlock_item} ${pathname.endsWith("/#reviews") ? styles.nav_midBlock_item_active : null}`}>
                            <Link href="/#reviews">{t("Отзывы")}</Link>
                            {pathname.endsWith("#reviews") ? <div className={styles.nav_midBlock_item_active_line}/> : null}
                        </li>
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
            </nav>
            <div className={styles.nav_rightBlock}>
                <Link href={`${process.env.api}/login`} className={styles.nav_rightBlock_button}>
                    <Image src="/stem_icon.svg" width={24} height={24} alt="стим" className={styles.steam_icon}/>
                    <p className={styles.nav_rightBlock_button_text}>
                        {t("Войти через Steam")}
                    </p>
                    <p className={styles.nav_rightBlock_button_text_mobile}>
                        {t("Войти")}
                    </p>
                </Link>
                <Image src="/burgerMenu_icon.svg" width={24} height={24} alt="меню" className={styles.burgerMenu_icon}/>
            </div>
        </header>
);
}