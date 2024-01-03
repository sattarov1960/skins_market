import styles from "@/layout/screens/mainLogout/styles/mainLogout.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";

export function Statistic() {
    const t = useTranslations()
    return (
        <section>
            <div className={styles.statistic_part}>
                <ul className={styles.statistic_part_items}>
                    <li className={styles.statistic_part_item}>
                        <div className={styles.statistic_part_item_headerBlock}>
                            <Image src="/clock_icon.svg" width={34} height={34} alt="часы" className={styles.statistic_part_item_icon}/>
                            <p className={styles.statistic_part_item_headerBlock_text}>
                                5-10 {t("минут")}
                            </p>
                        </div>
                        <span className={styles.statistic_part_item_subText}>
               {t("В среднем занимает сделка с момента регистрации")}
               </span>
                    </li>
                    <li className={styles.statistic_part_item}>
                        <hr className={styles.statistic_part_item_line}/>
                    </li>
                    <li className={styles.statistic_part_item}>
                        <div className={styles.statistic_part_item_headerBlock}>
                            <Image src="/layer_icon.svg" width={35} height={34} alt="слои" className={styles.statistic_part_item_icon}/>
                            <p className={styles.statistic_part_item_headerBlock_text}>
                                12 {t("тысяч")}
                            </p>
                        </div>
                        <span className={styles.statistic_part_item_subText}>
               {t("Всего куплено предметов за время работы")}
               </span>
                    </li>
                    <li className={styles.statistic_part_item}>
                        <hr className={styles.statistic_part_item_line}/>
                    </li>
                    <li className={styles.statistic_part_item}>
                        <div className={styles.statistic_part_item_headerBlock}>
                            <Image src="/checkMark_icon.svg" width={35} height={34} alt="галочка" className={styles.statistic_part_item_icon}/>
                            <p className={styles.statistic_part_item_headerBlock_text}>
                                {t("ПРИВАТНО")}
                            </p>
                        </div>
                        <span className={styles.statistic_part_item_subText}>
               {t("Приватное и безопасное проведение платежа")}
               </span>
                    </li>
                    <li className={styles.statistic_part_item}>
                        <hr className={styles.statistic_part_item_line}/>
                    </li>
                    <li className={styles.statistic_part_item}>
                        <div className={styles.statistic_part_item_headerBlock}>
                            <Image src="/emoji_icon.svg" width={34} height={34} alt="эмодзи" className={styles.statistic_part_item_icon}/>
                            <p className={styles.statistic_part_item_headerBlock_text}>
                                {t("прозрачно")}
                            </p>
                        </div>
                        <span className={styles.statistic_part_item_subText}>
               {t("Никаких скрытых комиссий, налогов и платежей")}
               </span>
                    </li>
                </ul>
            </div>
        </section>
    );
}