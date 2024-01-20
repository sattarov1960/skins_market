"use client"

import styles from "@/layout/screens/sales/styles/sales.module.css"
import Image from "next/image";
import {AsideCabinet} from "@/layout/components/asideCabinet/asideCabinet";
import {Table} from "@/layout/screens/sales/components/table";
import {useSalesStore} from "@/storage/client/sales";
import {Nothing} from "@/layout/screens/sales/components/nothing";
export function Sales() {
    const salesStore = useSalesStore()
    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <div className={styles.profile}>
                    <Image src="/smoke_profile.webp" width={128} height={627} alt="дым"
                           className={styles.smoke_profile}/>
                    <AsideCabinet/>
                    <div className={styles.profile_rightPart}>
                        <h2 className={styles.profile_rightPart_mainText}>
                            Ваши продажи
                        </h2>
                        {salesStore.items.length ? <div className={styles.profile_rightPart_mainBlock}>
                                <Table/>
                            </div> :
                            <Nothing/>}
                    </div>
                </div>
            </section>
        </main>
    );
}