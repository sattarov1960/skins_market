import styles from "@/layout/screens/how/styles/how.module.css"
import Image from "next/image";
import {useTranslations} from "next-intl";

export function HeaderPart() {
    const t = useTranslations()
    return (
        <div>
            <div className={styles.faq_headerPart_selledBlock}>
                <Image src="/walletCheck_icon.svg" width={24} height={24} alt="кошелек" className={styles.walletCheck_icon}/>
                <p className={styles.faq_headerPart_selledBlock_text}>
                    {t("Продавай скины выгодно")}
                </p>
            </div>
            <h2 className={styles.faq_headerPart_mainText}>
                {t("Как это работает?")}
            </h2>
            <span className={styles.faq_headerPart_subText}>
                {t("Последнее обновление гайда: ")}25.01.2024
            </span>
            <hr className={styles.faq_headerPart_line}/>
        </div>
    )
}