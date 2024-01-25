import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css";
import {useTranslations} from "next-intl";
import {formatCurrency} from "@/utilities/formatCyrrency";
import Image from "next/image";

// HeaderPart.tsx
export const HeaderPart = ({ getCommission }: { getCommission: () => number }) => {
    const t = useTranslations()
    return (
        <div className={styles.recieveBlock_headerPart}>
            <div className={styles.recieveBlock_headerPart_leftBlock}>
                <Image src="/wallet_icon.svg" width={18} height={18} alt="кошелек"
                       className={styles.recieveBlock_wallet_icon}/>
                <h2 className={styles.recieveBlock_headerPart_leftBlock_text}>
                    {t("Вы получите")}
                </h2>
            </div>
            <div className={styles.recieveBlock_headerPart_rightBlock}>
              <span className={styles.recieveBlock_headerPart_rightBlock_subText}>
              {t("Комиссия сервиса:")}
              </span>
                <p className={styles.recieveBlock_headerPart_rightBlock_subText_mainText}>
                    {formatCurrency(getCommission())}
                </p>
            </div>
        </div>
    )
}