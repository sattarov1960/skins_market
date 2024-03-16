"use client"
import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css";
import {useTranslations} from "next-intl";
import {useInventoryStore} from "@/storage/client/inventory";
import {useWithdrawMainStore} from "@/storage/client/withdrawMain";
import {useEffect, useState} from "react";
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
import axios from "axios";
import {useTradeStore} from "@/storage/client/trade";
import trade from "@/layout/popUp/trade/trade";
import {getAppIdByName} from "@/utilities/getAppIdByName";
import {round} from "@/utilities/round";

export const Withdraw = ({createTrade}: {createTrade: () => void}) => {
    const t = useTranslations()
    const [isWalletError, setIsWalletError] = useState<boolean | undefined>(undefined)
    const [isEmailError, setIsEmailError] = useState<boolean | undefined>(undefined)
    const inventoryStore = useInventoryStore()
    const withdrawMainStore = useWithdrawMainStore()
    const tradeStore = useTradeStore()
    useEffect(() => {
        let {activePaymentSystem, setActivePaymentSystem} = withdrawMainStore
        if (!isActivePaymentSystem(activePaymentSystem)) {
            setActivePaymentSystem("")
        }
    }, [inventoryStore.items]);
    useEffect(() => {
        loadWorkingPaymentSystem()
    }, [])

    const loadWorkingPaymentSystem = async () => {
        try{
            const resp = await axios.get(`${process.env.api}/working_payment_system`, {withCredentials: true})
            if (resp.data.status){
                withdrawMainStore.setWorkingPaymentSystem(resp.data.workingPaymentSystem)
            }
            else{
                console.log(`Error getting working payment system`)
                toast.error("Ошибка получения рабочих платежных систем", {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                })
            }
        }
        catch (e){
            console.log(`Error getting working payment system: ${e}`)
            toast.error("Ошибка получения рабочих платежных систем", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            })
        }
    }

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
        const ps = withdrawMainStore.workingPaymentSystem[withdrawMainStore.activePaymentSystem]
        if (ps?.placeholder) {
            return t(ps.placeholder)
        }
        else{
            return t("Ваш кошелек")
        }
    }

    const handlePaymentSystemClick = (paymentSystem: string) => {
        if (isActivePaymentSystem(paymentSystem)) {
            withdrawMainStore.setActivePaymentSystem(paymentSystem);
        }
    }

    const isActivePaymentSystem = (paymentSystem: string) => {
        const ps = withdrawMainStore.workingPaymentSystem[paymentSystem]
        if (ps?.active) {
            return getWithdrawalPrice() >= getMinimalWithdrawalPrice(paymentSystem)
        }
        return false;
    }
    const getWithdrawalPrice = () => {
        return inventoryStore.items.filter((value) => value.isSelected).reduce((total, item) => total + item.price, 0)
    }

    const getMinimalWithdrawalPrice = (paymentSystem: string) => {
        const ps = withdrawMainStore.workingPaymentSystem[paymentSystem]
        if (ps?.minPrice) {
            return ps.minPrice
        }
        else{
            return 0
        }
    }

    const getCommission = () => {
        let ps = withdrawMainStore.workingPaymentSystem[withdrawMainStore.activePaymentSystem]
        const withdrawPrice = getWithdrawalPrice()
        if (ps?.minPrice && ps?.fixedCommission){
            return (withdrawPrice * (ps.commission / 100)) + ps.fixedCommission
        }
        else {
            return 0
        }
    }

    const validateWallet = () : boolean => {
        const ps = withdrawMainStore.workingPaymentSystem[withdrawMainStore.activePaymentSystem]
        switch (ps?.validateType) {
            case "bankcard":
                return  validateCardNumber(withdrawMainStore.wallet)
            case "phone number":
                return validatePhoneNumber(withdrawMainStore.wallet)
            case "btc":
                return validateBitcoinAddress(withdrawMainStore.wallet)
            case "usdt trc20":
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
        const ps = withdrawMainStore.workingPaymentSystem[withdrawMainStore.activePaymentSystem]
        if (ps?.commission && ps?.fixedCommission){
            return withdrawPrice - getCommission()
        }
        else {
            return withdrawPrice
        }
    }

    const captionPS = (paymentSystem: string) => {
        const ps = withdrawMainStore.workingPaymentSystem[paymentSystem]
        if (ps?.active) {
            return ps.caption
        }
        else{
            return ""
        }
    }


    const validate = (e?: any) => {
        const isValidPaymentSystem = isActivePaymentSystem(withdrawMainStore.activePaymentSystem)
        const isValidWallet = validateWallet()
        const isValidEmail = validateEmail(withdrawMainStore.email)
        let isValid = isValidPaymentSystem && isValidWallet && isValidEmail
        if (e) {
            e.preventDefault()
            sell(isValid)
        }
        return isValid
    }
    const sell = (isValid: boolean) => {
        let items = inventoryStore.viewItems.filter((value) => value.isSelected)
        const ps = withdrawMainStore.workingPaymentSystem[withdrawMainStore.activePaymentSystem]
        if (items.length > 0 && isValid && ps){
            tradeStore.setPromocode(withdrawMainStore.promotionalCode)
            tradeStore.setEmail(withdrawMainStore.email)
            tradeStore.setPaymentMethodId(ps.id)
            tradeStore.setGameId(inventoryStore.activeGame)
            tradeStore.setItemsGive(items)
            tradeStore.setSBPBank(withdrawMainStore.sbpBank)
            tradeStore.setSBPBank(withdrawMainStore.sbpBank)
            tradeStore.setWallet(withdrawMainStore.wallet)
            tradeStore.setPrice(round(getWithdrawalPriceWithCommission(), 2))
            tradeStore.setIsNeedCreateTrade(true)
            createTrade()
        }
    }
    return (
        <form onSubmit={(e) => validate(e)} className={`${withdrawMainStore.activePaymentSystem === "SBP" ? styles.recieveBlockSBP : styles.recieveBlock}`}>
            <HeaderPart getCommission={getCommission} />
            <SubHeaderPart getWithdrawalPriceWithCommission={getWithdrawalPriceWithCommission} getMinimalWithdrawalPrice={getMinimalWithdrawalPrice} />
            <hr className={`${styles.recieveBlock_delimiter_line} ${styles.recieveBlock_delimiter_frstLine}`}/>
            <PaymentMethod isActivePaymentSystem={isActivePaymentSystem} handlePaymentSystemClick={handlePaymentSystemClick} captionPS={captionPS} />
            <hr className={styles.recieveBlock_delimiter_line}/>
            <FormFields isActivePaymentSystem={isActivePaymentSystem} isWalletError={isWalletError} getPlaceholder={getPlaceholder} BlurInput={BlurInput} focusInput={focusInput} isEmailError={isEmailError}/>
            <button type="submit" className={`${styles.recieveBlock_mainButton} ${validate() && styles.recieveBlock_mainButton_ready} ${!inventoryStore.items.length && styles.recieveBlock_mainButton_inactive}`}>
                {t("Продать скины")}
            </button>
        </form>
    )
}
