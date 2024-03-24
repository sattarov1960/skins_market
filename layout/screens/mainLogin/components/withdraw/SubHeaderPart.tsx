import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css";
import {useTranslations} from "next-intl";
import {formatCurrency} from "@/utilities/formatCyrrency";
import Image from "next/image";
import {useInventoryStore} from "@/storage/client/inventory";
import {useWithdrawMainStore} from "@/storage/client/withdrawMain";
import {sort} from "next/dist/build/webpack/loaders/css-loader/src/utils";

// SubHeaderPart.tsx
export const SubHeaderPart = ({
                                  getWithdrawalPriceWithCommission,
                                  getMinimalWithdrawalPrice,
                              }: {
    getWithdrawalPriceWithCommission: () => number,
    getMinimalWithdrawalPrice: (paymentSystem: string) => number,
}) => {
    const withdrawMainStore = useWithdrawMainStore()
    const t = useTranslations()

    const setPromotionalCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        withdrawMainStore.setPromotionalCode(e.target.value)
    }

    const minimalAmount = () => {
        if (!Object.keys(withdrawMainStore.workingPaymentSystem).length) return "0"
        const minPriceActiveSystem = Object.entries(withdrawMainStore.workingPaymentSystem).filter(([key, value]) => value.active).reduce((prev, current) => {
            return (current[1].minPrice < prev[1].minPrice) ? current : prev;
        });
        return minPriceActiveSystem[1].minPrice;
    }

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
                  {t("Минимальная сумма:")} {withdrawMainStore.activePaymentSystem ? getMinimalWithdrawalPrice(withdrawMainStore.activePaymentSystem) : minimalAmount()}₽
              </span>
                </li>
                <li className={`${styles.recieveBlock_sub_headerPart_item} ${styles.recieveBlock_sub_headerPart_thrdItem}`}>
                    <input placeholder={t("Промокод")} spellCheck={"false"} className={styles.recieveBlock_sub_headerPart_item_subText} type="text" value={withdrawMainStore.promotionalCode} onChange={setPromotionalCode}/>
                </li>
            </ul>
        </div>
    )
}



