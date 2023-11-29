'use client'
import styles from "@/layout/components/header/header.module.css"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import {useState} from "react";



function Language() {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <section className={styles.box}>
            <div className={styles.nav_languageBlock} onClick={handleChange}>
                <Image src="/ru_icon.svg" width={18} height={19} alt="флаг" className={styles.ru}/>
                <p className={styles.nav_languageBlock_text}>
                    RU
                </p>
                <Image src="/arrow_bot.svg" width={11} height={12} alt="стрелочка"/>
            </div>
            {isChecked ? <div className={styles.nav_languageBlock_addElement}>
                <ul>
                    <li className={styles.nav_languageBlock_addElement_item} tabIndex={1}>
                        <Image src="/ru_dark_icon.svg" width={122} height={18} alt="ru" className={styles.nav_languageBlock_addElement_item_flag}/>
                            <p className={styles.nav_languageBlock_addElement_item_subText}>
                                RU
                            </p>
                    </li>
                    <li className={styles.nav_languageBlock_addElement_item} tabIndex={2}>
                        <Image src="/en_icon.svg" width={122} height={18} className={`${styles.nav_languageBlock_addElement_item_flag} ${styles.nav_languageBlock_addElement_item_flagEN}`} alt="en" />
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
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <section className={styles.box}>
            <div className={styles.nav_currencyBlock} onClick={handleChange}>
                <Image src="/wallet_icon.svg" width={18} height={18} alt="кошелек" className={styles.wallet_icon}/>
                <p className={styles.nav_currencyBlock_text}>
                    RUB
                </p>
                <Image src="/arrow_bot.svg" width={11} height={12} alt="стрелочка"/>
            </div>
            {isChecked ? <div className={styles.nav_currencyBlock_addElement}>
                <ul>
                    <li className={`${styles.nav_currencyBlock_addElement_item} ${styles.nav_currencyBlock_addElement_frstItem}`}>
                        <p className={styles.nav_currencyBlock_addElement_item_text}>
                            ₽
                        </p>
                        <p className={`${styles.nav_currencyBlock_addElement_item_text} ${styles.nav_currencyBlock_addElement_item_scndText}`}>
                            RUB
                        </p>
                    </li>
                    <li className={`${styles.nav_currencyBlock_addElement_item}`}>
                        <p className={`${styles.nav_currencyBlock_addElement_item_text} ${styles.nav_currencyBlock_addElement_item_lightText}`}>
                            ₴
                        </p>
                        <p className={`${styles.nav_currencyBlock_addElement_item_text} ${styles.nav_currencyBlock_addElement_item_lightText} ${styles.nav_currencyBlock_addElement_item_scndText}`}>
                            UAH
                        </p>
                    </li>
                    <li className={styles.nav_currencyBlock_addElement_item}>
                        <p className={`${styles.nav_currencyBlock_addElement_item_text} ${styles.nav_currencyBlock_addElement_item_lightText}`}>
                            ₸
                        </p>
                        <p className={`${styles.nav_currencyBlock_addElement_item_text} ${styles.nav_currencyBlock_addElement_item_lightText} ${styles.nav_currencyBlock_addElement_item_scndText}`}>
                            KZT
                        </p>
                    </li>
                </ul>
            </div> : null}
        </section>
    )
}


export function Header() {
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
                            <Link href="/">Главная</Link>
                            {pathname.endsWith("/ru") || pathname.endsWith("/en") || pathname.endsWith("/") ?
                                <div className={styles.nav_midBlock_item_active_line}/> : null}
                        </li>
                        <li className={`${styles.nav_midBlock_item} ${pathname.endsWith("/#reviews") ? styles.nav_midBlock_item_active : null}`}>
                            <Link href="/#reviews">Отзывы</Link>
                            {pathname.endsWith("#reviews") ? <div className={styles.nav_midBlock_item_active_line}/> : null}
                        </li>
                        <li className={`${styles.nav_midBlock_item} ${pathname.endsWith("/how") ? styles.nav_midBlock_item_active : null}`}>
                            <Link href="/how">Помощь</Link>
                            {pathname.endsWith("/how") ? <div className={styles.nav_midBlock_item_active_line}/> : null}
                        </li>
                        <li className={`${styles.nav_midBlock_item} ${pathname.endsWith("/faq") ? styles.nav_midBlock_item_active : null}`}>
                            <Link href="/faq">FAQ</Link>
                            {pathname.endsWith("/faq") ? <div className={styles.nav_midBlock_item_active_line}/> : null}
                        </li>
                        <li className={`${styles.nav_midBlock_item} ${pathname.endsWith("/contact") ? styles.nav_midBlock_item_active : null}`}>
                            <Link href="/contact">Контакты</Link>
                            {pathname.endsWith("/contact") ? <div className={styles.nav_midBlock_item_active_line}/> : null}
                        </li>
                        <li className={`${styles.nav_midBlock_item} ${pathname.endsWith("/partner") ? styles.nav_midBlock_item_active : null}`}>
                            <Link href="/partner">Партнерка</Link>
                            {pathname.endsWith("/partner") ? <div className={styles.nav_midBlock_item_active_line}/> : null}
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={styles.nav_rightBlock}>
                <button className={styles.nav_rightBlock_button}>
                    <Image src="/stem_icon.svg" width={24} height={24} alt="стим" className={styles.steam_icon}/>
                    <p className={styles.nav_rightBlock_button_text}>
                        Войти через Steam
                    </p>
                    <p className={styles.nav_rightBlock_button_text_mobile}>
                        Войти
                    </p>
                </button>
                <Image src="/burgerMenu_icon.svg" width={24} height={24} alt="меню" className={styles.burgerMenu_icon}/>
            </div>
        </header>
);
}