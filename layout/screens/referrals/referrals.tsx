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
import {RefSubHeader} from "@/layout/screens/referrals/components/refSubHeader";
import {RefHeader} from "@/layout/screens/referrals/components/refHeader";
import {RefTableMobile} from "@/layout/screens/referrals/components/RefTableMobile";

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


    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <div className={styles.profile}>
                    <Image src="/smoke_profile.webp" width={128} height={627} alt="дым"
                           className={styles.smoke_profile}/>
                    <AsideCabinet/>
                    <div className={styles.profile_rightPart}>
                        <RefHeader/>
                        <RefSubHeader/>
                        <div className={styles.profile_rightPart_mainBlock}>
                            <RefTable/>
                            <RefTableMobile/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}