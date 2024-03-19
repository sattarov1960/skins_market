"use client"

import styles from "@/layout/screens/withdraw/styles/withdraw.module.css"
import Image from "next/image";
import {AsideCabinet} from "@/layout/components/asideCabinet/asideCabinet";
import {Table} from "@/layout/screens/withdraw/components/table";
import {useWithdrawItemsStore} from "@/storage/client/withdraw";
import {useTranslations} from "next-intl";
import {Nothing} from "@/layout/components/nothing/nothing";


export function Withdraw() {
    const itemsStore = useWithdrawItemsStore()
    const t = useTranslations()
    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <div className={styles.profile}>
                    <Image src="/smoke_profile.webp" width={128} height={627} alt="дым"
                           className={styles.smoke_profile}/>
                    <AsideCabinet/>
                    <div className={styles.profile_rightPart}>
                        <h2 className={styles.profile_rightPart_mainText}>
                            {t("Ваши выводы")}
                        </h2>
                        {itemsStore.items.length ? <Table items={itemsStore.items}/> : <Nothing/>}
                    </div>
                </div>
            </section>
        </main>
    );
}