"use client"
import styles from "@/layout/screens/referrals/styles/referrals.module.css";
import Image from "next/image";
import {AsideCabinet} from "@/layout/components/asideCabinet/asideCabinet";
import {RefTable} from "@/layout/screens/referrals/components/refTable";
import {RefSubHeader} from "@/layout/screens/referrals/components/refSubHeader";
import {RefHeader} from "@/layout/screens/referrals/components/refHeader";
import {RefTableMobile} from "@/layout/screens/referrals/components/RefTableMobile";
import {useReferralsStore} from "@/storage/client/referrals";

export function Referrals() {
    const refStore = useReferralsStore()
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
                        {refStore.items.length && <div className={styles.profile_rightPart_mainBlock}>
                            <RefTable/>
                            <RefTableMobile/>
                        </div>}
                    </div>
                </div>
            </section>
        </main>
    );
}