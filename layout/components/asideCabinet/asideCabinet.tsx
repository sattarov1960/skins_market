import styles from "@/layout/components/asideCabinet/asideCabinet.module.css"
import {useTranslations} from "next-intl";
import Image from "next/image";

export const AsideCabinet = () => {
    const t = useTranslations()
    return (
        <div>
            <div className={styles.profile_leftPart_headerBlock}>
                <Image src="/peopleAvatar_profile.webp" width={88} height={88} alt="аватар"
                       className={styles.peopleAvatar_profile}/>
                <div className={styles.profile_leftPart_sub_headerBlock}>
                    <p className={styles.profile_leftPart_sub_headerBlock_nameText}>
                        Username
                    </p>
                    <span className={styles.profile_leftPart_sub_headerBlock_priceText}>
                  {t("Сделок на")}21.374₽
                  </span>
                </div>
                <div className={styles.profile_leftPart_sub_headerBlock_login}>
                    <Image src="/login_icon.svg" width={27} height={22} alt="логин"
                           className={styles.login_icon}/>
                </div>
            </div>
            <div className={styles.profile_leftPart_mainBlock}>
                <ul>
                    <li className={`${styles.profile_leftPart_mainBlock_item} ${styles.profile_leftPart_mainBlock_frstItem}`}>
                        <Image src="/profileCircle_icon_gray.svg" width={24} height={24} alt="Icon"/>
                        <p className={styles.profile_leftPart_mainBlock_item_text}>
                            {t("Профиль")}
                        </p>
                    </li>
                    <li className={`${styles.profile_leftPart_mainBlock_item} ${styles.profile_leftPart_mainBlock_item_active}`}>
                        <Image src="/cards_icon_white.svg" width={24} height={24} alt="Cards"/>
                        <p className={`${styles.profile_leftPart_mainBlock_item_text} ${styles.profile_leftPart_mainBlock_item_text_active}`}>
                            {t("Платежные реквизиты")}
                        </p>
                    </li>
                    <li className={`${styles.profile_leftPart_mainBlock_item} ${styles.profile_leftPart_mainBlock_scndItem}`}>
                        <Image src="/walletCheck_gray_icon.svg" width={24} height={24} alt="Wallet"/>
                        <p className={styles.profile_leftPart_mainBlock_item_text}>
                            {t("Мои продажи")}
                        </p>
                    </li>
                    <li className={styles.profile_leftPart_mainBlock_item}>
                        <Image src="/emptyWalletChange_icon.svg" width={24} height={24} alt="Wallet"/>
                        <p className={styles.profile_leftPart_mainBlock_item_text}>
                            {t("Мои выводы")}
                        </p>
                    </li>
                    <li className={styles.profile_leftPart_mainBlock_item}>
                        <Image src="/share_icon.svg" width={24} height={24} alt="Share"/>
                        <p className={styles.profile_leftPart_mainBlock_item_text}>
                            {t("Реферальная система")}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}