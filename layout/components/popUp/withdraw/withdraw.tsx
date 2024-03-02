"use client"
import Image from "next/image";
import styles from "@/layout/components/popUp/withdraw/withdraw.module.css";
import moneys from "@/public/moneys.svg"
import money_change from "@/public/money-change.svg"
import cards from "@/public/cards.svg"
import close_popup from "@/public/close_popup.svg";
import {useTranslations} from "next-intl";
import {useState} from "react";
import {useReferralsStore} from "@/storage/client/referrals";
import {formatCurrency} from "@/utilities/formatCyrrency";
import {validatePhoneNumber} from "@/utilities/validate/phone";
import {toast} from "react-toastify";
import axios from "axios";

function Withdraw(){
    const refStore = useReferralsStore()
    const t = useTranslations()
    const [active, setActive] = useState<"SBP" | "QIWI">("SBP")
    const [count, setCount] = useState<number>()
    const [wallet, setWallet] = useState<string>("")
    const getPaymentIcon = (payment: string) => {
        switch (payment) {
            case "SBP":
                return "/sbp_paymentMethod_icon.svg"
            default:
                return ""
        }
    }
    const getComsPayment = (paymnet: string) => {
        switch (paymnet) {
            case "SBP":
                return 2
            default:
                return 0
        }
    }
    const changeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (Number.isInteger(value) && value >= 0) {
            setCount(value);
        } else {
            setCount(0);
        }
    }
    const withdrawRefBalance = async (event: any) => {
        event.preventDefault();
        const toastId = toast.loading(t("Создаем заявку на вывод"), {
            position: "bottom-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            isLoading: true,
        })
        try{
            const isValidWallet = validatePhoneNumber(wallet)
            if (!isValidWallet){
                toast.update(toastId, {
                    render: t("Невалидный кошелек"),
                    type: "error",
                    isLoading: false,
                    autoClose: 5000,
                })
            }
            if (count === undefined || count === 0){
                toast.update(toastId, {
                    render: t("Введите сумму"),
                    type: "error",
                    isLoading: false,
                    autoClose: 5000,
                })
                return
            }
            const resp = await axios.post(`${process.env.api}/withdraw_referral_balance`, {
                payment: active,
                wallet: wallet,
                count: count
            }, {withCredentials: true})
            if (resp.data.status){
                toast.update(toastId, {
                    render: t("Заявка на вывод создана"),
                    type: "success",
                    isLoading: false,
                    autoClose: 5000,
                })
                refStore.setReferralBalance(refStore.referralBalance - count)
            }
            else{
                toast.update(toastId, {
                    render: t("Ошибка при выводе средств"),
                    type: "error",
                    isLoading: false,
                    autoClose: 5000,
                })
            }
        }
        catch (e) {
            console.log(`Ошибка при выводе средств: ${e}`)
            toast.update(toastId, {
                render: t("Ошибка при выводе средств"),
                type: "error",
                isLoading: false,
                autoClose: 5000,
            })
        }
    }
    return (
        <form onSubmit={(event) => withdrawRefBalance(event)} className={styles.withdraw_section_wrap}>
            <h1 className={styles.withdraw_h1}>{t("Вывод средств")}</h1>
            <Image className={styles.withdraw_close_icon} src={close_popup} alt=""/>
            <div className={styles.withdraw_payments_methods_wrap}>
                <div className={`${styles.withdraw_payments_method} ${active === "SBP" && styles.withdraw_payments_method_active}`} onClick={() => setActive("SBP")}>
                    <Image src="/sbp_paymentMethod_icon.svg" width={60} height={27} alt="sbp"/>
                </div>
                {/*<div className={styles.withdraw_payments_method}>*/}
                {/*    <Image src="/qiwi_paymentMethod_icon.svg" width={71} height={20} alt="qiwi"/>*/}
                {/*</div>*/}
            </div>
            <div className={styles.withdraw_payments_wallet_wrap}>
                <div className={styles.withdraw_payments_wallet_right}>
                    <Image className={styles.withdraw_payments_wallet_right_icon} height={27} width={27} alt="" src={getPaymentIcon(active)}/>
                    <span className={styles.withdraw_payments_wallet_right_text}>{t(active)}</span>
                </div>
                <input required={true} onChange={(e) => setWallet(e.target.value)} value={wallet} placeholder={t("Введите ваш кошелек")} className={styles.withdraw_payments_wallet_left_input}/>
            </div>
            <div className={styles.withdraw_payments_wallet_btm_wrap}>
                <div className={styles.withdraw_payments_wallet_btm_item}>
                    <Image width={19} height={19} src={moneys} alt=""/>
                    <span className={styles.withdraw_payments_wallet_btm_text}>{t("Доступно")}: {formatCurrency(refStore.referralBalance)}</span>
                </div>
                <div className={styles.withdraw_payments_wallet_btm_item}>
                    <Image width={19} height={19} src={money_change} alt=""/>
                    <span className={styles.withdraw_payments_wallet_btm_text}>{t("Комиссия")} {getComsPayment(active)}%</span>
                </div>
            </div>
            <hr className={styles.withdraw_payments_hr}/>
            <div className={styles.withdraw_payments_btm_wrap}>
                <div className={styles.withdraw_payments_btm_item}>
                    <input required={true} value={count} onChange={(e) => changeCount(e)} className={styles.withdraw_payments_btm_left_text} placeholder={"Введите сумму"}/>
                    <button onClick={() => setCount(refStore.referralBalance)} className={styles.withdraw_payments_btm_left_right_text}>{t("ВСЕ")}</button>
                </div>
                <button type="submit" className={styles.withdraw_payments_btm_item}
                        style={{cursor: "pointer", justifyContent: "center"}}>
                    <Image className={styles.withdraw_payments_btm_right_icon} src={cards} alt="" width={19}
                           height={19}/>
                    <span className={styles.withdraw_payments_btm_right_text}>{t("Вывести")}</span>
                </button>
            </div>
        </form>
    )
}

export default Withdraw