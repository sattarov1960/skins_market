"use client"
import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {InventoryItemI} from "@/interface/components/inventoryItem";
import {useInventoryStore} from "@/storage/client/inventory";
import {LastItemProps} from "@/interface/components/lastItem";

export const LastDeals = () => {
    const t = useTranslations()
    const inventoryStore = useInventoryStore()
    return (
        <section>
            <div className={styles.latest_deals}>
                <div className={styles.latest_deals_headerPart}>
                    <h2 className={styles.latest_deals_headerPart_text}>
                        {t("Последние сделки")}
                    </h2>
                    <div className={styles.latest_deals_headerPart_rightSwitches}>
                        <div className={styles.latest_deals_headerPart_rightSwitches_switch}>
                            <Image src="/arrowLeft_forSwitches_icon.svg" width={15} height={14} alt="стрелочка"
                                   className={styles.arrows_forSwitches_icon}/>
                        </div>
                        <div
                            className={`${styles.latest_deals_headerPart_rightSwitches_switch} ${styles.latest_deals_headerPart_rightSwitches_scndSwitch}`}>
                            <Image src="/arrowRight_forSwitches_icon.svg" width={15} height={14} alt="стрелочка"
                                   className={styles.arrows_forSwitches_icon}/>
                        </div>
                    </div>
                </div>
                <ul className={styles.latest_deals_items}>
                    {}
                </ul>
            </div>
        </section>
    )
}


export const Item = ({price, img, name}: LastItemProps) => {
    return (
        <li className={`${styles.latest_deals_item} ${styles.latest_deals_lastDarkItem}`}>
            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
            </div>
            <Image src="/mac10_skin.webp" width={103} height={91} alt="пистолет"
                   className={styles.latest_deals_item_image}/>
            <div className={styles.latest_deals_item_footerBlock}>
                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                    Monkey Business
                </p>
                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
            </div>
        </li>
    )
}