import error_img from "@/public/error_trade.svg"
import close_popup from "@/public/close_popup.svg"
import Link from "next/link";
import Image from "next/image";
import styles from "@/layout/components/popUp/error/styles.module.css"

interface ErrorProps {
    msg?: string
    link?: string
    btnText?: string
}

function Error(error: ErrorProps){
    return (
        <section>
            <Image className={styles.error_trade_img} src={error_img} alt=""/>
            <Image className={styles.error_trade_close_icon} src={close_popup} alt=""/>
            {error.msg ? <h1 className={styles.error_trade_h1}>Ошибка создания трейда!</h1> :
                <h1 className={styles.error_trade_h1}>Непредвиденная ошибка</h1>}
            {error.msg ?
                <p className={styles.error_trade_p}>{error.msg}</p> :
                <p className={styles.error_trade_p}>Что-то пошло не так. Мы уже работаем над исправлением этой ошибки.</p>
            }
            {
                error.msg && <Link href={error.link ? error.link : "/"} className={styles.error_trade_button}>
                    <span className={styles.error_trade_button_text}>{error.btnText}</span>
                </Link>
            }
        </section>
    )
}
export default Error