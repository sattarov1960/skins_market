import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css"
import Image from "next/image";
import {useTranslations} from "next-intl";
import {Inventory} from "@/layout/screens/mainLogin/components/inventory/inventory";
import {Withdraw} from "@/layout/screens/mainLogin/components/withdraw/withdraw";
import {Statistics} from "@/layout/screens/mainLogin/components/statistics";
import {LastDeals} from "@/layout/screens/mainLogin/components/lastDeals";
import {Description} from "@/layout/screens/mainLogin/components/description";


export function MainLogin() {
    const t = useTranslations()
    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <div className={styles.inventory_and_recieve}>
                    <Inventory/>
                    <Withdraw/>
                </div>
                <Image src="/smoke_mainPart.webp" width={318} height={627} alt="дым" className={styles.smoke_mainPart}/>
                <Statistics/>
                <LastDeals/>
                <Description/>
            </section>
        </main>
    );
}