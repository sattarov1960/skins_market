"use client"
import styles from "@/layout/screens/referrals/styles/referrals.module.css";
import Image from "next/image";
import {AsideCabinet} from "@/layout/components/asideCabinet/asideCabinet";
import {useTranslations} from "next-intl";
import {RefTable} from "@/layout/screens/referrals/components/refTable";
import {useReferralsStore} from "@/storage/client/referrals";
import axios from "axios";
import {toast} from "react-toastify";
import {useEffect} from "react";

export function Referrals() {
    const t = useTranslations()
    const refStore = useReferralsStore()
    const loadingReferralsData = async () => {
        try{
            const resp = await axios.get(`${process.env.api}/referrals`)
            if (resp.data.status){
                refStore.setReferralBalance(resp.data.referralBalance)
                refStore.setReferralCode(resp.data.referralCode)
                refStore.setTotalCostSalesReferrals(resp.data.totalCostSalesReferrals)
                refStore.setTotalInvited(resp.data.totalInvited)
                refStore.setTotalEarned(resp.data.totalEarned)
                refStore.setInviteLink(resp.data.inviteLink)
                refStore.setItems(resp.data.items)
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
                console.log(`Ошибка при загрузке данных рефералов: ${resp.data}`)
            }
        }
        catch (e){
            console.log(`Ошибка при загрузке данных рефералов: ${e}`)
        }
    }
    useEffect(() => {
        loadingReferralsData()
    }, []);

    const copyValue = (value: string) => {
        navigator.clipboard.writeText(value)
        toast.success(t("Скопировано"), {
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
    function formatCurrency(value: number) {
        return new Intl.NumberFormat('ru-RU', {
            style: 'decimal',
            currency: 'RUB',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    }
    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <div className={styles.profile}>
                    <Image src="/smoke_profile.webp" width={128} height={627} alt="дым"
                           className={styles.smoke_profile}/>
                    <AsideCabinet/>
                    <div className={styles.profile_rightPart}>
                        <div className={styles.profile_rightPart_headerBlock}>
                            <h2 className={styles.profile_rightPart_headerBlock_mainText}>
                                {t("Реферальная система")}
                            </h2>
                            <div className={styles.profile_rightPart_headerBlock_info}>
                                <div className={styles.profile_rightPart_headerBlock_info_item}>
                                    <Image src="/moneys_ref_icon.svg" width={19} height={20} alt="money"
                                           className={styles.profile_rightPart_headerBlock_info_item_icon}/>
                                    <p className={styles.profile_rightPart_headerBlock_info_item_text}>
                                        {t("Реф баланс")} ₽ {formatCurrency(refStore.referralBalance)}
                                    </p>
                                </div>
                                <div
                                    className={`${styles.profile_rightPart_headerBlock_info_item} ${styles.profile_rightPart_headerBlock_info_scndItem}`}>
                                    <Image src="/cards_icon_yellow.svg" width={19} height={20} alt="cards"
                                           className={styles.profile_rightPart_headerBlock_info_item_icon}/>
                                    <p className={`${styles.profile_rightPart_headerBlock_info_item_text} ${styles.profile_rightPart_headerBlock_info_item_textYellow}`}>
                                        {t("Вывести")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.profile_rightPart_sub_headerBlock}>
                            <div className={styles.profile_rightPart_sub_headerBlock_leftInfo}>
                                <div className={styles.profile_rightPart_sub_headerBlock_leftInfo_item}>
                                    <div className={styles.profile_rightPart_sub_headerBlock_leftInfo_subItem}>
                                        <p className={styles.profile_rightPart_sub_headerBlock_leftInfo_item_text}>
                                            {t("Реф код")}
                                        </p>
                                        <hr className={styles.profile_rightPart_sub_headerBlock_leftInfo_subItem_line}/>
                                        <p className={`${styles.profile_rightPart_sub_headerBlock_leftInfo_item_text} ${styles.profile_rightPart_sub_headerBlock_leftInfo_item_textBold}`}>
                                            {refStore.referralCode}
                                        </p>
                                    </div>
                                    <Image src="/copy_icon.svg" width={24} height={25} alt="copy"
                                           className={styles.copy_icon} onClick={() => copyValue(refStore.referralCode)}/>
                                </div>
                                <div
                                    className={`${styles.profile_rightPart_sub_headerBlock_leftInfo_item} ${styles.profile_rightPart_sub_headerBlock_leftInfo_scndItem}`}>
                                    <p className={styles.profile_rightPart_sub_headerBlock_leftInfo_item_text}>
                                        {refStore.inviteLink}
                                    </p>
                                    <Image src="/copy_icon.svg" width={24} height={25} alt="copy"
                                           className={styles.copy_icon} onClick={() => copyValue(refStore.inviteLink)}/>
                                </div>
                            </div>
                            <div className={styles.profile_rightPart_sub_headerBlock_rightInfo}>
                                <div
                                    className={`${styles.profile_rightPart_sub_headerBlock_rightInfo_item} ${styles.profile_rightPart_sub_headerBlock_rightInfo_frstItem}`}>
                                    <Image src="/moneyTick_icon.svg" width={25} height={24} alt="moneyTick"
                                           className={styles.profile_rightPart_sub_headerBlock_rightInfo_item_icon}/>
                                    <p className={styles.profile_rightPart_sub_headerBlock_rightInfo_item_mainText}>
                                        {formatCurrency(refStore.totalEarned)}
                                    </p>
                                    <p className={styles.profile_rightPart_sub_headerBlock_rightInfo_item_subText}>
                                        {t("Заработано")}
                                    </p>
                                </div>
                                <div
                                    className={`${styles.profile_rightPart_sub_headerBlock_rightInfo_item} ${styles.profile_rightPart_sub_headerBlock_rightInfo_scndItem}`}>
                                    <Image src="/userTick_icon.svg" width={24} height={24} alt="userTick"
                                           className={styles.profile_rightPart_sub_headerBlock_rightInfo_item_icon}/>
                                    <p className={styles.profile_rightPart_sub_headerBlock_rightInfo_item_mainText}>
                                        {refStore.totalInvited}
                                    </p>
                                    <p className={styles.profile_rightPart_sub_headerBlock_rightInfo_item_subText}>
                                        {t("Приглашено")}
                                    </p>
                                </div>
                                <div
                                    className={`${styles.profile_rightPart_sub_headerBlock_rightInfo_item} ${styles.profile_rightPart_sub_headerBlock_rightInfo_thrdItem}`}>
                                    <Image src="/wallet_icon_red.svg" width={24} height={24} alt="wallet"
                                           className={styles.profile_rightPart_sub_headerBlock_rightInfo_item_icon}/>
                                    <p className={styles.profile_rightPart_sub_headerBlock_rightInfo_item_mainText}>
                                        {formatCurrency(refStore.totalCostSalesReferrals)}
                                    </p>
                                    <p className={styles.profile_rightPart_sub_headerBlock_rightInfo_item_subText}>
                                        {t("Продано рефералами")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <RefTable/>
                    </div>
                </div>
            </section>
        </main>
    );
}