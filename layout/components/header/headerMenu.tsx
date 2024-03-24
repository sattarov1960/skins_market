"use client"
import {useTranslations} from "next-intl";
import {useState} from "react";
import Image from "next/image";
import styles from "@/layout/components/header/header.module.css";
import caret_down from "@/public/caret_down.svg";
import Link from "next/link";
import profile_circle from "@/public/profile_circle.svg";
import profile_moneys from "@/public/profile_moneys.svg";
import profile_medal from "@/public/profile_medal.svg";
import profile_message from "@/public/profile_message.svg";
import profile_logout from "@/public/profile_logout.svg";
import axios from "axios";
import {toast} from "react-toastify";
import Cookies from "js-cookie";
import linear_menu from "@/public/linear_menu.svg";

export const HeaderMenu = () => {
    const t = useTranslations()
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const logOut = async () => {
        try{
            const resp = await axios.get(`${process.env.api}/logout`, {withCredentials: true})
            if (resp.data.status){
                Cookies.remove('access_token_cookie')
                Cookies.remove('access_token_cookie_expiry')
                Cookies.remove('refresh_token_cookie')
                Cookies.remove('refresh_token_expiry')
                window.location.href = "/"
            }
            else{
                toast.error(
                    t("Ошибка выхода"),
                    {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    }
                )
            }
        }
        catch (e) {
            console.log("Ошибка выхода")
            toast.error(
                t("Непредвиденная ошибка"),
                {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }
            )
            throw e
        }
    }
    return (
        <>
            <Image alt="Open Menu" className={styles.linear_menu} src={linear_menu} width={24} height={24} onClick={() => setIsOpenMenu(!isOpenMenu)}/>
            <Image alt="Open Menu" className={styles.caret_icon} src={caret_down} width={8} height={8} onClick={() => setIsOpenMenu(!isOpenMenu)}/>
            {isOpenMenu &&
                <section className={styles.header_menu_wrap}>
                    <Link className={styles.header_menu_item_wrap} href="/profile" onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        <Image className={styles.header_menu_item_icon} src={profile_circle} alt="Профиль" width={16}
                               height={16}/>
                        <span className={styles.header_menu_item_text}>{t("Профиль")}</span>
                    </Link>
                    <Link href="/sales" className={styles.header_menu_item_wrap} onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        <Image className={styles.header_menu_item_icon} src={profile_moneys} alt="Мои продажи"
                               width={16}
                               height={16}/>
                        <span className={styles.header_menu_item_text}>{t("Мои продажи")}</span>
                    </Link>
                    <Link href="/how" className={styles.header_menu_item_wrap} onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        <Image className={styles.header_menu_item_icon} src={profile_medal} alt="Поддержка" width={16}
                               height={16}/>
                        <span className={styles.header_menu_item_text}>{t("Поддержка")}</span>
                    </Link>
                    <Link href="/faq" className={styles.header_menu_item_wrap} onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        <Image className={styles.header_menu_item_icon} src={profile_message} alt="FAQ" width={16}
                               height={16}/>
                        <span className={styles.header_menu_item_text}>FAQ</span>
                    </Link>
                    <button className={styles.header_menu_item_wrap} onClick={() => {setIsOpenMenu(!isOpenMenu); logOut()}}>
                        <Image className={styles.header_menu_item_icon} src={profile_logout} alt="Выход" width={18}
                               height={18}/>
                        <span className={styles.header_menu_item_text} style={{color: "rgb(234, 90, 99)"}}>{t("Выход")}</span>
                    </button>
                </section>}
        </>
    )
}
