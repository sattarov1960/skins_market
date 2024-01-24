import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";
import Link from "next/link";

export const NotTradeLink = () => {
    const t = useTranslations()
    return (
        <>
            <div className={styles.inventoryBlock_sub_tradeLink}>
                <Image src="/sadSmile_img.webp" className={styles.sadSmile_img} alt="смайлик" width={77} height={77}/>
            </div>
            <p className={styles.inventoryBlock_tradeLink_text}>
                {t("Похоже у вас не указана ссылка на трейд")}
            </p>
            <Link href={`${process.env.current}/profile`} className={styles.inventoryBlock_tradeLink_button}>
                {t("Указать в профиле")}
            </Link>
        </>
    )
}