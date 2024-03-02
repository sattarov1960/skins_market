"use client"

import styles from "@/layout/screens/withdraw/styles/withdraw.module.css"
import Image from "next/image";
import {AsideCabinet} from "@/layout/components/asideCabinet/asideCabinet";
import {Nothing} from "@/layout/screens/withdraw/components/nothing";
import {Table} from "@/layout/screens/withdraw/components/table";
import {useEffect} from "react";
import axios from "axios";
import {useWithdrawItemsStore} from "@/storage/client/withdraw";
import {toast} from "react-toastify";
import {useTranslations} from "next-intl";


export function Withdraw() {
    const itemsStore = useWithdrawItemsStore()
    const t = useTranslations()
    useEffect(() => {
        loadWithdraw()
    }, []);
    const loadWithdraw = async () => {
        try{
            const response = await axios.get(`${process.env.api}/withdraw`, {withCredentials: true})
            const data = response.data
            if (data.status){
                itemsStore.setItems(data.items)
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
                console.log(`Error loading user withdraw ${data.error}`)
            }
        }
        catch (e) {
            console.log(`Error loading user withdraw ${e}`)
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
                            Ваши выводы
                        </h2>
                        {itemsStore.items.length ? <Table items={itemsStore.items}/> : <Nothing/>}
                    </div>
                </div>
            </section>
        </main>
    );
}