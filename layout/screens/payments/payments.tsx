"use client"
import styles from "@/layout/screens/payments/styles/payments.module.css"
import Image from "next/image";
import {useTranslations} from "next-intl";
import {AsideCabinet} from "@/layout/components/asideCabinet/asideCabinet";
import {useEffect, useState} from "react";
import {CardsMenu} from "@/layout/screens/payments/components/CardsMenu";
import axios from "axios";
import {toast} from "react-toastify";
import {usePaymentsStore} from "@/storage/client/payments";
import {validateTronAddress} from "@/utilities/validate/usdt";
import {validatePhoneNumber} from "@/utilities/validate/phone";

export function Payments() {
    const t = useTranslations()
    const [isOpenCards, setIsOpenCards] = useState(false)
    const paymentStore = usePaymentsStore()
    const [qiwi, setQiwi] = useState(paymentStore.qiwi)
    const [usdtTrc20, setUsdtTrc20] = useState(paymentStore.usdtTrc20)

    const loadPaymentsData = async () => {
        try{
            const response = await axios.get(`${process.env.api}/payments_data`, {withCredentials: true})
            const data = response.data
            if (data.status){
                paymentStore.setCards(data.cards)
                paymentStore.setQiwi(data.qiwi)
                paymentStore.setUsdtTrc20(data.usdtTrc20)
                setQiwi(data.qiwi)
                setUsdtTrc20(data.usdtTrc20)
            }
            else{
                toast.error(t("Ошибка при загрузке данных"), {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    isLoading: false,
                })
                console.log(`Ошибка при загрузки банковских кард ${data}`)
            }
        }
        catch (e) {
            console.log(`Error Loading Bank Card error = ${e}`)
        }
    }
    useEffect(() => {
        // loadPaymentsData()
    }, [])

    const savePaymentsData = async (changeField: string) => {
        switch (changeField) {
            case "qiwi":
                paymentStore.setQiwi(qiwi)
                break
            case "usdtTrc20":
                paymentStore.setUsdtTrc20(usdtTrc20)
                break
        }
        if (changeField === "usdtTrc20" && !validateTronAddress(usdtTrc20)){
            toast.error(t("Неверный формат USDT кошелька"), {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                isLoading: false,
            })
            return
        }
        if (changeField === "qiwi" && !validatePhoneNumber(qiwi)){
            toast.error(t("Неверный формат номера Qiwi"), {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                isLoading: false,
            })
            return
        }
        const toastId = toast.loading(t("Сохраняем данные"), {
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
            const response = await axios.post(`${process.env.api}/save_payments_data`, {
                qiwi: qiwi,
                usdtTrc20: usdtTrc20
            }, {withCredentials: true})
            const data = response.data
            if (data.status){
                toast.update(toastId, {
                    render: t("Данные успешно сохранены"),
                    type: "success",
                    isLoading: false,
                    autoClose: 5000,
                })
            }
            else{
                toast.update(toastId, {
                    render: t("Ошибка при сохранении данных"),
                    type: "error",
                    isLoading: false,
                    autoClose: 5000,
                })
            }
        }
        catch (e){
            toast.error(t("Ошибка при сохранении платежных данных"), {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                isLoading: false,
            })
            console.log(`Error save payment data error = ${e}`)
        }
    }

    const addCard = () => {
        console.log("add card")
    }

    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <div className={styles.profile}>
                    <Image src="/smoke_profile.webp" width={128} height={627} alt="дым"
                           className={styles.smoke_profile}/>
                    <AsideCabinet/>
                    <div className={styles.profile_rightPart}>
                        <h2 className={styles.profile_rightPart_mainText}>
                            {t("Платежные реквизиты")}
                        </h2>
                        <div className={styles.profile_rightPart_mainForm}>
                            <div className={styles.profile_rightPart_socialNetworks}>
                                <div className={styles.cards_item_wrap}>
                                    <p className={styles.profile_rightPart_socialNetworks_mainText}>
                                        {t("Банковские карты")}
                                    </p>
                                    <span className={styles.profile_rightPart_socialNetworks_subText}>
                     {t("Пожалуйста, укажите вашу банковскую карту")}
                     </span>
                                    <div className={styles.profile_rightPart_socialNetworks_inputBlock} onClick={() => !paymentStore.activeCard.pan ? addCard() : null}>
                                        <div
                                            className={styles.profile_rightPart_socialNetworks_input}
                                            onClick={() => setIsOpenCards(!isOpenCards)}
                                        >{paymentStore.activeCard.pan ? paymentStore.activeCard.pan : t("Добавить карту")}</div>
                                        <Image src="/mini_arrow_bot.svg" width={8} height={8} alt="Arrow" onClick={() => setIsOpenCards(!isOpenCards)}
                                               className={styles.profile_rightPart_socialNetworks_inputBlock_icon}/>
                                        {isOpenCards && <CardsMenu/>}
                                    </div>

                                </div>
                                <div>
                                    <p className={styles.profile_rightPart_socialNetworks_mainText}>
                                        Qiwi-{t("кошелек")}
                                    </p>
                                    <span className={styles.profile_rightPart_socialNetworks_subText}>
                     {t("Пожалуйста, укажите ваш Qiwi кошелек")}
                     </span>
                                    <div className={styles.profile_rightPart_socialNetworks_inputBlock}>
                                        <input className={styles.profile_rightPart_socialNetworks_input}
                                               value={qiwi}
                                               onChange={(e) => setQiwi(e.target.value)}
                                               placeholder={paymentStore.qiwi ? "" : t("Ваш номер телефона")} type="text"/>
                                        {(qiwi !== paymentStore.qiwi) || qiwi === "" ?
                                            <Image src="/addCircle_icon.svg" width={24} height={24} alt="Circle"
                                                   className={styles.addCircle_icon} onClick={() => savePaymentsData("qiwi")}/> :
                                            <Image src="/tickСircle_icon.svg" width={24} height={24} alt="Circle"
                                                   className={styles.tickCircle_icon}/>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.profile_rightPart_mainForm}>
                            <div className={styles.profile_rightPart_socialNetworks}>
                                <div>
                                    <p className={styles.profile_rightPart_socialNetworks_mainText}>
                                        USDT TRC-20
                                    </p>
                                    <span className={styles.profile_rightPart_socialNetworks_subText}>{t("Пожалуйста, укажите ваш USDT кошелек")}
                     </span>
                                    <div className={styles.profile_rightPart_socialNetworks_inputBlock}>
                                        <input className={styles.profile_rightPart_socialNetworks_input} value={usdtTrc20}
                                               placeholder={paymentStore.usdtTrc20 ? "" : t("Адреса пока нет")} type="text" onChange={(e) => setUsdtTrc20(e.target.value)}/>
                                        {(usdtTrc20 !== paymentStore.usdtTrc20) || usdtTrc20 === "" ?
                                            <Image src="/addCircle_icon.svg" width={24} height={24} alt="Circle"
                                                   className={styles.addCircle_icon} onClick={() => savePaymentsData("usdtTrc20")}/> :
                                            <Image src="/tickСircle_icon.svg" width={24} height={24} alt="Circle"
                                                   className={styles.tickCircle_icon}/>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        );
}



