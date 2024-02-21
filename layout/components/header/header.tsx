'use client'
import styles from "@/layout/components/header/header.module.css"
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {useUserStore} from "@/storage/client/user";
import linear_menu from "@/public/linear_menu.svg";
import {HeaderMenu} from "@/layout/components/header/headerMenu";
import {Language} from "@/layout/components/header/language";
import {Wallet} from "@/layout/components/header/wallet";
import {Navigate} from "@/layout/components/header/navigate";


export function Header() {
    const t = useTranslations()
    const userStore = useUserStore()

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.nav_leftBlock}>
                    <Link href="/">
                        <Image src="/logo.svg" width={122} height={18} alt="лого" className={styles.logo}/>
                    </Link>
                    <hr className={styles.nav_line}/>
                    <Language/>
                    <Wallet/>
                </div>
                <Navigate/>
            </nav>
            {userStore.auth ? <div className={styles.nav_rightBlock}>
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
            </div> : <div className={styles.user_wrap}>
                <Link href="/profile">
                    <Image className={styles.user_icon} src={`https://avatars.steamstatic.com/${userStore.steamIcon}_full.jpg`} alt="user" width={48} height={48}/>
                </Link>
                <Image alt="Open Menu" className={styles.linear_menu} src={linear_menu} width={24} height={24}/>
                <HeaderMenu/>
            </div>}
        </header>
    );
}