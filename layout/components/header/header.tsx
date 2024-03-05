'use client'
import styles from "@/layout/components/header/header.module.css"
import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {useUserStore} from "@/storage/client/user";
import linear_menu from "@/public/linear_menu.svg";
import {HeaderMenu} from "@/layout/components/header/headerMenu";
import {Language} from "@/layout/components/header/language";
import {Wallet} from "@/layout/components/header/wallet";
import {Navigate} from "@/layout/components/header/navigate";
import { usePathname, useSearchParams } from 'next/navigation'
import {useEffect, useState} from "react";
import Cookies from "js-cookie";


export function Header() {
    const pathname = usePathname();
    const searchParams = useSearchParams()
    const [authUrl, setAuthUrl] = useState<string>(process.env.api + "/login");
    const t = useTranslations()
    const userStore = useUserStore()
    useEffect(() => {
        const ref = searchParams.get('r') ? `r=${searchParams.get('r')}` : "";
        const callback = `callbackUrl=${window.location.href}`
        const need_return_to = ref || callback ? "?" : "";
        const return_to = `${need_return_to}${ref}${callback}`;

        const params = new URLSearchParams({
            openid_ns: "http://specs.openid.net/auth/2.0",
            openid_identity: "http://specs.openid.net/auth/2.0/identifier_select",
            openid_claimed_id: "http://specs.openid.net/auth/2.0/identifier_select",
            openid_mode: 'checkid_setup',
            openid_return_to: `${process.env.api}/authorize${return_to}`,
            openid_realm: process.env.api + "/",
        });
        const authUrl = `https://steamcommunity.com/openid/login?${params.toString()}`;
        setAuthUrl(authUrl);
    }, [pathname, searchParams]);
    const login = () => {
        const authId = Math.random().toString(16).slice(2);
        Cookies.set('getTokens', authId, { expires: 1, path: process.env.api });
        window.location.href = authUrl;
    }
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
            {!userStore.auth ? <div className={styles.nav_rightBlock}>
                <button onClick={login} className={styles.nav_rightBlock_button}>
                    <Image src="/stem_icon.svg" width={24} height={24} alt="стим" className={styles.steam_icon}/>
                    <p className={styles.nav_rightBlock_button_text}>
                        {t("Войти через Steam")}
                    </p>
                    <p className={styles.nav_rightBlock_button_text_mobile}>
                        {t("Войти")}
                    </p>
                </button>
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