"use client"

import styles from "@/layout/screens/sales/styles/sales.module.css"
import Image from "next/image";
import {AsideCabinet} from "@/layout/components/asideCabinet/asideCabinet";
import {Table} from "@/layout/screens/sales/components/table";
import {useSalesStore} from "@/storage/client/sales";
import {Nothing} from "@/layout/screens/sales/components/nothing";
import axios from "axios";
import {toast} from "react-toastify";
import {useTranslations} from "next-intl";

export function Sales() {
    const salesStore = useSalesStore()
    const t = useTranslations()
    const loadSales = async () => {
        try{
            const resp = await axios.get(`${process.env.api}/`)
            if (resp.data.status){

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
                console.log(`Ошибка при загрузке продаж пользователя: ${resp.data.error}`)
            }
        }
        catch (e) {
            console.log(`Ошибка при загрузке продаж пользователя: ${e}`)
        }
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
                            {t("Ваши продажи")}
                        </h2>
                        {salesStore.items.length ?
                                <Table/>
                            :
                            <Nothing/>}
                    </div>
                </div>
            </section>
        </main>
    );
}