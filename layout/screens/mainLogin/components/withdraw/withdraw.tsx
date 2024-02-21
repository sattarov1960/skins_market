"use client"
import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {formatCurrency} from "@/utilities/formatCyrrency";
import {useInventoryStore} from "@/storage/client/inventory";
import {useWithdrawMainStore} from "@/storage/client/withdrawMain";
import {CustomTooltip} from "@/layout/components/customTitle/customTitle";
import {ChangeEvent, useEffect, useState} from "react";
import {toast} from "react-toastify";
import {validateEmail} from "@/utilities/validate/email";
import {validatePhoneNumber} from "@/utilities/validate/phone";
import {validateTronAddress} from "@/utilities/validate/usdt";
import {validateCardNumber} from "@/utilities/validate/card";
import {validateBitcoinAddress} from "@/utilities/validate/bitcoin";
import {HeaderPart} from "@/layout/screens/mainLogin/components/withdraw/HeaderPart";
import {SubHeaderPart} from "@/layout/screens/mainLogin/components/withdraw/SubHeaderPart";
import {PaymentMethod} from "@/layout/screens/mainLogin/components/withdraw/PaymentMethod";
import {FormFields} from "@/layout/screens/mainLogin/components/withdraw/FormFields";

export const Withdraw = ({createTrade}: {createTrade: () => void}) => {
    const t = useTranslations()
    const [isWalletError, setIsWalletError] = useState<boolean | undefined>(undefined)
    const [isEmailError, setIsEmailError] = useState<boolean | undefined>(undefined)
    const inventoryStore = useInventoryStore()
    const withdrawMainStore = useWithdrawMainStore()
    useEffect(() => {
        let {activePaymentSystem, setActivePaymentSystem} = withdrawMainStore
        if (!isActivePaymentSystem(activePaymentSystem)) {
            setActivePaymentSystem("")
        }
    }, [inventoryStore.items]);
    const focusInput = (e: any) => {
        if (!isActivePaymentSystem(withdrawMainStore.activePaymentSystem)) {
            toast.error("Выберите способ оплаты", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            })
            e.target.blur()
        }
    }

    const getPlaceholder = () => {
        switch (withdrawMainStore.activePaymentSystem) {
            case "MIR":
                return "Ваша карта MIR"
            case "SBP":
                return "Ваш номер телефона"
            case "Qiwi":
                return "Ваш Qiwi-кошелек"
            case "BTC":
                return "Ваш BTC-кошелек"
            case "USDT TRC20":
                return "Ваш USDT-кошелек"
            default:
                return "Ваш кошелек"
        }
    }

    const handlePaymentSystemClick = (paymentSystem: string) => {
        if (isActivePaymentSystem(paymentSystem)) {
            withdrawMainStore.setActivePaymentSystem(paymentSystem);
        }
    }

    const isActivePaymentSystem = (paymentSystem: string) => {
        if (withdrawMainStore.workingPaymentSystem[paymentSystem]) {
            return getWithdrawalPrice() >= getMinimalWithdrawalPrice(paymentSystem)
        }
        return false;
    }
    const getWithdrawalPrice = () => {
        return inventoryStore.items.filter((value) => value.isSelected).reduce((total, item) => total + item.price, 0)
    }

    const getMinimalWithdrawalPrice = (paymentSystem: string) => {
        switch (paymentSystem) {
            case "MIR":
                return 100
            case "SBP":
                return 500
            case "Qiwi":
                return 10
            case "BTC":
                return 1000
            case "USDT TRC20":
                return 1000
            default:
                return 0
        }
    }

    const getCommission = () => {
        const withdrawPrice = getWithdrawalPrice()
        if (withdrawMainStore.activePaymentSystem === ""){
            return 0
        }
        let withdrawComPrice = 0
        switch (withdrawMainStore.activePaymentSystem) {
            case "MIR":
                if (withdrawPrice > 2500)
                    withdrawComPrice = withdrawPrice * 0.05
                else
                    withdrawComPrice = withdrawPrice * 0.03 + 50
                break
            case "SBP":
                withdrawComPrice = 0
                break
            case "Qiwi":
                withdrawComPrice = withdrawPrice * 0.05
                break
            case "BTC":
                withdrawComPrice = withdrawPrice * 0.003 + 882.6
                break
            case "USDT TRC20":
                withdrawComPrice = withdrawPrice * 0.003 + 266.64
                break
            default:
                withdrawComPrice = 0
                break
        }
        return withdrawComPrice
    }

    const validateWallet = () : boolean => {
        switch (withdrawMainStore.activePaymentSystem) {
            case "MIR":
                return  validateCardNumber(withdrawMainStore.wallet)
            case "SBP":
            case "Qiwi":
                return validatePhoneNumber(withdrawMainStore.wallet)
            case "BTC":
                return validateBitcoinAddress(withdrawMainStore.wallet)
            case "USDT TRC20":
                return validateTronAddress(withdrawMainStore.wallet)
            default:
                return false
        }
    }

    const BlurInput = (inputName: string) => {
        if (!isActivePaymentSystem(withdrawMainStore.activePaymentSystem)){
            return
        }
        return inputName === "wallet" ? setIsWalletError(!validateWallet()) : setIsEmailError(!validateEmail(withdrawMainStore.email))
    }

    const getWithdrawalPriceWithCommission = () => {
        const withdrawPrice = getWithdrawalPrice()
        if (withdrawMainStore.activePaymentSystem === ""){
            return withdrawPrice
        }
        let withdrawComPrice = 0
        switch (withdrawMainStore.activePaymentSystem) {
            case "MIR":
                if (withdrawPrice > 2500)
                    withdrawComPrice = withdrawPrice * 0.95
                else
                    withdrawComPrice = withdrawPrice * 0.97 - 50
                break
            case "SBP":
                withdrawComPrice = withdrawPrice
                break
            case "Qiwi":
                withdrawComPrice = withdrawPrice * 0.95
                break
            case "BTC":
                withdrawComPrice = withdrawPrice * 0.97 - 882.6
                break
            case "USDT TRC20":
                withdrawComPrice = withdrawPrice * 0.97 - 266.64
                break
            default:
                withdrawComPrice = 0
                break
        }
        return withdrawComPrice
    }

    const captionPS = (paymentSystem: string) => {
        const withdrawPrice = getWithdrawalPrice()
        switch (paymentSystem) {
            case "MIR":
                if (withdrawPrice > 2500)
                    return "Минимальная сумма обмена для MIR 2500₽.\nКомиссия 5%"
                else{
                    return "Минимальная сумма обмена для MIR 100₽.\nКомиссия 3% + 50₽"
                }
            case "SBP":
                return "Минимальная сумма обмена для СБП 500₽.\nКомиссия 0%\nДоступен не всегда, вывод может занять до 24 часов"
            case "Qiwi":
                return "Минимальная сумма обмена для Qiwi 10₽.\nКомиссия 5%"
            case "BTC":
                return "Минимальная сумма обмена для BTC 1000₽.\nКомиссия 0.3% + 882.6₽"
            case "USDT TRC20":
                return "Минимальная сумма обмена для USDT TRC20 1000₽.\nКомиссия 0.3% + 266.64₽"
            default:
                return ""
        }
    }

    const isReadyTrade = (e?: any) => {
        const isValidPaymentSystem = isActivePaymentSystem(withdrawMainStore.activePaymentSystem)
        const isValidWallet = validateWallet()
        const isValidEmail = validateEmail(withdrawMainStore.email)
        if (e){
            e.preventDefault()
            createTrade()
        }
        return isValidPaymentSystem && isValidWallet && isValidEmail
    }
    return (
        <form onSubmit={(e) => isReadyTrade(e)} className={styles.recieveBlock}>
            <HeaderPart getCommission={getCommission} />
            <SubHeaderPart getWithdrawalPriceWithCommission={getWithdrawalPriceWithCommission} getMinimalWithdrawalPrice={getMinimalWithdrawalPrice} activePaymentSystem={withdrawMainStore.activePaymentSystem} />
            <hr className={`${styles.recieveBlock_delimiter_line} ${styles.recieveBlock_delimiter_frstLine}`}/>
            <PaymentMethod isActivePaymentSystem={isActivePaymentSystem} handlePaymentSystemClick={handlePaymentSystemClick} captionPS={captionPS} />
            <hr className={styles.recieveBlock_delimiter_line}/>
            <FormFields isActivePaymentSystem={isActivePaymentSystem} isWalletError={isWalletError} getPlaceholder={getPlaceholder} BlurInput={BlurInput} focusInput={focusInput} isEmailError={isEmailError} setEmail={withdrawMainStore.setEmail} email={withdrawMainStore.email} wallet={withdrawMainStore.wallet} />
            <button type="submit" className={`${styles.recieveBlock_mainButton} ${isReadyTrade() && styles.recieveBlock_mainButton_ready} ${!inventoryStore.items.length && styles.recieveBlock_mainButton_inactive}`}>
                {t("Продать скины")}
            </button>
        </form>
    )
}
