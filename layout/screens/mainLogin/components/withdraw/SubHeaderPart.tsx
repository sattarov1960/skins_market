import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css";
import {useTranslations} from "next-intl";
import {formatCurrency} from "@/utilities/formatCyrrency";
import Image from "next/image";

// SubHeaderPart.tsx
export const SubHeaderPart = ({
                                  getWithdrawalPriceWithCommission,
                                  getMinimalWithdrawalPrice,
                                  activePaymentSystem
                              }: {
    getWithdrawalPriceWithCommission: () => number,
    getMinimalWithdrawalPrice: (paymentSystem: string) => number,
    activePaymentSystem: string
}) => {
    const t = useTranslations()
    return (
        <div className={styles.recieveBlock_sub_headerPart}>
            <ul className={styles.recieveBlock_sub_headerPart_items}>
                <li className={`${styles.recieveBlock_sub_headerPart_item} ${styles.recieveBlock_sub_headerPart_frstItem}`}>
                    <p className={`${styles.recieveBlock_sub_headerPart_item_mainText} ${styles.recieveBlock_sub_headerPart_item_mainTextPrice_rub}`}>
                        ₽
                    </p>
                    <p className={`${styles.recieveBlock_sub_headerPart_item_mainText} ${styles.recieveBlock_sub_headerPart_item_mainTextPrice}`}>
                        {formatCurrency(getWithdrawalPriceWithCommission(), "decimal")}~
                    </p>
                </li>
                <li className={`${styles.recieveBlock_sub_headerPart_item} ${styles.recieveBlock_sub_headerPart_scndItem}`}>
              <span className={styles.recieveBlock_sub_headerPart_item_subText}>
                  {t("Минимальная сумма:")} {activePaymentSystem ? getMinimalWithdrawalPrice(activePaymentSystem) : "10"}₽
              </span>
                </li>
                <li className={`${styles.recieveBlock_sub_headerPart_item} ${styles.recieveBlock_sub_headerPart_thrdItem}`}>
                                <span className={styles.recieveBlock_sub_headerPart_item_subText}>
                                {t("Промокод")}
                                </span>
                    <Image src="/checkCircle_icon.svg" width={20} height={21} alt="галочка"
                           className={styles.checkCircle_icon}/>
                </li>
            </ul>
        </div>
    )
}



