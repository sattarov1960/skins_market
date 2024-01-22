import styles from "@/layout/screens/referrals/styles/referrals.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {formatCurrency} from "@/utilities/formatCyrrency";
import {useReferralsStore} from "@/storage/client/referrals";

export const RefHeader = () => {
    const refStore = useReferralsStore()
    const t = useTranslations()
    return (
        <div className={styles.profile_rightPart_headerBlock}>
            <h2 className={styles.profile_rightPart_headerBlock_mainText}>
                {t("Реферальная система")}
            </h2>
            <div className={styles.profile_rightPart_headerBlock_info}>
                <div className={styles.profile_rightPart_headerBlock_info_item}>
                    <Image src="/moneys_ref_icon.svg" width={19} height={20} alt="money"
                           className={styles.profile_rightPart_headerBlock_info_item_icon}/>
                    <p className={styles.profile_rightPart_headerBlock_info_item_text}>
                        {t("Реф баланс")} ₽ {formatCurrency(refStore.referralBalance)}
                    </p>
                </div>
                <div className={`${styles.profile_rightPart_headerBlock_info_item} ${styles.profile_rightPart_headerBlock_info_scndItem}`} onClick={() => alert("Еще не реализованно")}>
                    <Image src="/cards_icon_yellow.svg" width={19} height={20} alt="cards"
                           className={styles.profile_rightPart_headerBlock_info_item_icon}/>
                    <p className={`${styles.profile_rightPart_headerBlock_info_item_text} ${styles.profile_rightPart_headerBlock_info_item_textYellow}`}>
                        {t("Вывести")}
                    </p>
                </div>
            </div>
        </div>
    )
}