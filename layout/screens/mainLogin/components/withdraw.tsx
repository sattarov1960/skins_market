"use client"
import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {formatCurrency} from "@/utilities/formatCyrrency";
import {useInventoryStore} from "@/storage/client/inventory";
import {useWithdrawMainStore} from "@/storage/client/withdrawMain";

export const Withdraw = () => {
    const t = useTranslations()
    const inventoryStore = useInventoryStore()
    const withdrawMainStore = useWithdrawMainStore()
    const getWithdrawalPrice = () => {
        return inventoryStore.items.filter((value) => value.isSelected).reduce((total, item) => total + item.price, 0)
    }
    return (
        <div className={styles.recieveBlock}>
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
                        0₽
                    </p>
                </div>
            </div>
            <div className={styles.recieveBlock_sub_headerPart}>
                <ul className={styles.recieveBlock_sub_headerPart_items}>
                    <li className={`${styles.recieveBlock_sub_headerPart_item} ${styles.recieveBlock_sub_headerPart_frstItem}`}>
                        <p className={`${styles.recieveBlock_sub_headerPart_item_mainText} ${styles.recieveBlock_sub_headerPart_item_mainTextPrice_rub}`}>
                            ₽
                        </p>
                        <p className={`${styles.recieveBlock_sub_headerPart_item_mainText} ${styles.recieveBlock_sub_headerPart_item_mainTextPrice}`}>
                            {formatCurrency(getWithdrawalPrice(), "decimal")}~
                        </p>
                    </li>
                    <li className={`${styles.recieveBlock_sub_headerPart_item} ${styles.recieveBlock_sub_headerPart_scndItem}`}>
                  <span className={styles.recieveBlock_sub_headerPart_item_subText}>
                  {t("Минимальная сумма:")} 300₽
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
            <hr className={`${styles.recieveBlock_delimiter_line} ${styles.recieveBlock_delimiter_frstLine}`}/>
            <div className={styles.recieveBlock_paymentMethod}>
                <p className={styles.recieveBlock_paymentMethod_mainText}>
                    {t("Выберите способ оплаты")}
                </p>
                <ul className={styles.recieveBlock_paymentMethod_items}>
                    <li className={styles.recieveBlock_paymentMethod_item}>
                        <Image src="/visa_paymentMethod_icon.svg" width={41} height={34} alt="Visa"/>
                    </li>
                    <li className={`${styles.recieveBlock_paymentMethod_item} ${styles.recieveBlock_paymentMethod_item_active}`}>
                        <Image src="/tether_paymentMethod_icon.svg" width={28} height={28} alt="Tether"
                               className={styles.tether_paymentMethod_icon}/>
                        <Image src="/tether_paymentMethod_iconText.svg" width={46} height={12} alt="Tether"
                               className={styles.paymentMethod_iconText}/>
                    </li>
                    <li className={styles.recieveBlock_paymentMethod_item}>
                        <Image src="/btc_paymentMethod_icon.svg" width={28} height={28} alt="BTC"
                               className={styles.btc_paymentMethod_icon}/>
                        <Image src="/btc_paymentMethod_iconText.svg" width={59} height={16} alt="BTC"
                               className={styles.paymentMethod_iconText}/>
                    </li>
                    <li className={styles.recieveBlock_paymentMethod_item}>
                        <Image src="/tron_paymentMethod_icon.svg" width={29} height={30} alt="tron"
                               className={styles.tron_paymentMethod_icon}/>
                        <Image src="/tron_paymentMethod_iconText.svg" width={49} height={14} alt="tron"
                               className={styles.paymentMethod_iconText}/>
                    </li>
                    <li className={styles.recieveBlock_paymentMethod_item}>
                        <Image src="/sberbank_paymentMethod_icon.svg" width={71} height={20} alt="sberbank"/>
                    </li>
                </ul>
            </div>
            <hr className={styles.recieveBlock_delimiter_line}/>
            <div className={styles.recieveBlock_formFields}>
                <input className={styles.recieveBlock_form} placeholder="Ваш USDT-кошелек" type="text"/>
                <input className={`${styles.recieveBlock_form} ${styles.recieveBlock_scndForm}`}
                       placeholder="Электронная почта" type="text"/>
            </div>
            <button className={styles.recieveBlock_mainButton}>
                {t("Продать скины")}
            </button>
        </div>
    )
}
