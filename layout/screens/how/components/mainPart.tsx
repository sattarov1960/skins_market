import styles from "@/layout/screens/how/styles/how.module.css"
import Image from "next/image";
import {useTranslations} from "next-intl";

export function MainPart() {
    const t = useTranslations()
    return (
        <div className={styles.how_mainPart}>
            <ul className={styles.how_mainPart_items}>
                <Image src="/smoke_register.webp" width={126} height={352} alt="дым" className={styles.how_mainPart_items_smoke}/>
                <li className={styles.how_mainPart_item}>
                    <div className={styles.how_mainPart_item_lineBlock}>
                        <hr className={styles.how_mainPart_item_specialLine}/>
                    </div>
                    <div className={styles.how_mainPart_subItem}>
                        <span className={styles.how_mainPart_subItem_numberText}>01.</span>
                        <p className={styles.how_mainPart_subItem_mainText}>{t("Регистрация")}</p>
                        <span className={styles.how_mainPart_subItem_subText}>{t("Авторизуйтесь на сайте, используя вашу учетную запись Steam")}</span>
                    </div>
                </li>
                <li className={styles.how_mainPart_item}>
                    <div className={styles.how_mainPart_item_lineBlock}>
                        <hr className={styles.how_mainPart_item_specialLine} style={{animationDelay: "2.5s"}}/>
                    </div>
                    <div className={styles.how_mainPart_subItem}>
                        <span className={styles.how_mainPart_subItem_numberText}>02.</span>
                        <p className={styles.how_mainPart_subItem_mainText}>{t("Укажите трейд-ссылку")}</p>
                        <span className={styles.how_mainPart_subItem_subText}>{t("Укажите Trade URL и выберите скины, которые хотите продать")}</span>
                    </div>
                </li>
                <li className={`${styles.how_mainPart_item} ${styles.how_mainPart_thrdItem}`}>
                    <div className={styles.how_mainPart_item_lineBlock}>
                        <hr className={styles.how_mainPart_item_specialLine} style={{animationDelay: "5s"}}/>
                    </div>
                    <div className={`${styles.how_mainPart_subItem} ${styles.how_mainPart_subItemThrd}`}>
                        <span className={styles.how_mainPart_subItem_numberText}>03.</span>
                        <p className={styles.how_mainPart_subItem_mainText}>{t("Выберите платежку")}</p>
                        <span className={styles.how_mainPart_subItem_subText}>{t("Выберите удобную платежную систему, укажите реквизиты и готово!")}</span>
                    </div>
                </li>
                <li className={`${styles.how_mainPart_item} ${styles.how_mainPart_frthItem}`}>
                    <div className={styles.how_mainPart_item_lineBlock}>
                        <hr className={styles.how_mainPart_item_specialLine} style={{animationDelay: "7.5s"}}/>
                    </div>
                    <div className={`${styles.how_mainPart_subItem} ${styles.how_mainPart_subItemFrth}`}>
                        <span className={styles.how_mainPart_subItem_numberText}>04.</span>
                        <p className={styles.how_mainPart_subItem_mainText}>{t("Продайте свои скины")}</p>
                        <span className={styles.how_mainPart_subItem_subText}>{t("Передайте скины трейд-боту и ожидайте зачисления средств")}</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}