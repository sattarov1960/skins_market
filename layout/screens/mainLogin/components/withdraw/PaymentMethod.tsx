import {CustomTooltip} from "@/layout/components/customTitle/customTitle";
import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css";
import {useTranslations} from "next-intl";
import {useWithdrawMainStore} from "@/storage/client/withdrawMain";
import Image from "next/image";

// PaymentMethod.tsx
export const PaymentMethod = ({
                                  isActivePaymentSystem,
                                  handlePaymentSystemClick,
                                  captionPS
                              }: {
    isActivePaymentSystem: (paymentSystem: string) => boolean,
    handlePaymentSystemClick: (paymentSystem: string) => void,
    captionPS: (paymentSystem: string) => string
}) => {
    const withdrawMainStore = useWithdrawMainStore()
    const t = useTranslations()
    return (
        <div className={styles.recieveBlock_paymentMethod}>
            <p className={styles.recieveBlock_paymentMethod_mainText}>
                {t("Выберите способ оплаты")}
            </p>
            <ul className={styles.recieveBlock_paymentMethod_items}>
                <CustomTooltip tooltipText={captionPS("SBP")}>
                    <li className={`${styles.recieveBlock_paymentMethod_item}
                            ${!isActivePaymentSystem("SBP") && styles.recieveBlock_paymentMethod_item_inactive}
                            ${withdrawMainStore.activePaymentSystem === "SBP" && styles.recieveBlock_paymentMethod_item_active}`}
                        onClick={() => handlePaymentSystemClick("SBP")}>
                        <Image src="/sbp_paymentMethod_icon.svg" width={81} height={27} alt="sbp"
                               className={styles.sbp_paymentMethod_icon}/>
                    </li>
                </CustomTooltip>
                <CustomTooltip tooltipText={captionPS("MIR")}>
                    <li className={`${styles.recieveBlock_paymentMethod_item} 
                            ${!isActivePaymentSystem("MIR") && styles.recieveBlock_paymentMethod_item_inactive}
                            ${withdrawMainStore.activePaymentSystem === "MIR" && styles.recieveBlock_paymentMethod_item_active}`}
                        onClick={() => handlePaymentSystemClick("MIR")}>
                        <Image src="/mir_paymentMethod_icon.svg" width={38} height={11} alt="mir" className={styles.sbp_paymentMethod_icon}/>
                    </li>
                </CustomTooltip>
                <CustomTooltip tooltipText={captionPS("Qiwi")}>
                    <li className={`${styles.recieveBlock_paymentMethod_item}
                            ${!isActivePaymentSystem("Qiwi") && styles.recieveBlock_paymentMethod_item_inactive}
                            ${withdrawMainStore.activePaymentSystem === "Qiwi" && styles.recieveBlock_paymentMethod_item_active}`}
                        onClick={() => handlePaymentSystemClick("Qiwi")}>
                        <Image src="/qiwi_paymentMethod_icon.svg" width={71} height={20} alt="qiwi"/>
                    </li>
                </CustomTooltip>
                <CustomTooltip tooltipText={captionPS("BTC")}>
                    <li className={`${styles.recieveBlock_paymentMethod_item}
                            ${!isActivePaymentSystem("BTC") && styles.recieveBlock_paymentMethod_item_inactive}
                            ${withdrawMainStore.activePaymentSystem === "BTC" && styles.recieveBlock_paymentMethod_item_active}`}
                        onClick={() => handlePaymentSystemClick("BTC")}>
                        <Image src="/btc_paymentMethod_icon.svg" width={28} height={28} alt="BTC"
                               className={styles.btc_paymentMethod_icon}/>
                        <Image src="/btc_paymentMethod_iconText.svg" width={59} height={16} alt="BTC"
                               className={styles.paymentMethod_iconText}/>
                    </li>
                </CustomTooltip>
                <CustomTooltip tooltipText={captionPS("USDT TRC20")}>
                    <li className={`${styles.recieveBlock_paymentMethod_item}
                            ${!isActivePaymentSystem("USDT TRC20") && styles.recieveBlock_paymentMethod_item_inactive}
                            ${withdrawMainStore.activePaymentSystem === "USDT TRC20" && isActivePaymentSystem("USDT TRC20") && styles.recieveBlock_paymentMethod_item_active}`}
                        onClick={() => handlePaymentSystemClick("USDT TRC20")}>
                        <Image src="/tether_paymentMethod_icon.svg" width={28} height={28} alt="USDT TRC20"
                               className={styles.tether_paymentMethod_icon}/>
                        <Image src="/tether_paymentMethod_iconText.svg" width={46} height={12} alt="USDT TRC20"
                               className={styles.paymentMethod_iconText}/>
                    </li>
                </CustomTooltip>
            </ul>
        </div>
    )
}