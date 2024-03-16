"use client"
import error_img from "@/public/error_trade.svg"
import close_popup from "@/public/close_popup.svg"
import Link from "next/link";
import Image from "next/image";
import styles from "@/layout/popUp/error/styles.module.css"
import {useTranslations} from "next-intl";

interface ErrorProps {
    msg?: string
    headerMsg?: string
    link?: string
    btnText?: string
    setOpen: (isOpen: boolean) => void
}

export function Error(error: ErrorProps){
    const t = useTranslations()
    const handleClick = () => {
        error.setOpen(false)
    }
    return (
        <section className={`${styles.error_trade_wrap} ${error.msg ?? styles.unknown_error_trade_wrap}`}>
            <Image className={styles.error_trade_img} src={error_img} alt=""/>
            <Image className={styles.error_trade_close_icon} src={close_popup} alt="" onClick={() => error.setOpen(false)}/>
            {error.headerMsg ? <h1 className={styles.error_trade_h1}>{error.headerMsg}</h1> :
                <h1 className={styles.error_trade_h1}>{t("Непредвиденная ошибка")}</h1>}
            {error.msg ?
                <p className={styles.error_trade_p}>{error.msg}</p> :
                <p className={styles.error_trade_p}>{t("Что-то пошло не так Мы уже работаем над исправлением этой ошибки")}</p>
            }
            {
                error.msg && <Link href={error.link ? error.link : "/"} onClick={handleClick} className={styles.error_trade_button} prefetch={false}>
                    <span className={styles.error_trade_button_text}>{error.btnText}</span>
                </Link>
            }
        </section>
    )
}
export default Error