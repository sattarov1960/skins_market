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

export function Payments() {
    const t = useTranslations()
    const [isOpenCards, setIsOpenCards] = useState(false)
    const paymentStore = usePaymentsStore()
    useEffect(() => {
        loadCards()
    }, [])
    const loadCards = async () => {
        try{
            const response = await axios.get(`${process.env.api}/my_cards`, {withCredentials: true})
            const data = response.data
            if (data.status){
                paymentStore.setCards(data.cards)
            }
            else{
                toast.error(t("Ошиибка при загрузки банковских кард"), {
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
            }
        }
        catch (e) {
            toast.error(t("Ошиибка при загрузки банковских кард"), {
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
            console.log(`Error Loading Bank Card error = ${e}`)
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
                                        >{paymentStore.activeCard.pan ? paymentStore.activeCard.pan : "Добавить карту"}</div>
                                        <Image src="/mini_arrow_bot.svg" width={8} height={8} alt="Arrow"
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
                                               value={paymentStore.qiwi}
                                               onChange={(e) => paymentStore.setQiwi(e.target.value)}
                                               placeholder={paymentStore.qiwi ? "" : "Ваш номер телефона"} type="text"/>
                                        <Image src="/tickСircle_icon.svg" width={24} height={24} alt="Circle"
                                               className={styles.tickCircle_icon}/>
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
                                        <input className={styles.profile_rightPart_socialNetworks_input} value={paymentStore.usdtTrc20}
                                               placeholder={paymentStore.usdtTrc20 ? "" : "Адреса пока нет..."} type="text" onChange={(e) => paymentStore.setUsdtTrc20(e.target.value)}/>
                                        <Image src="/addCircle_icon.svg" width={24} height={24} alt="Circle"
                                               className={styles.addCircle_icon}/>
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



