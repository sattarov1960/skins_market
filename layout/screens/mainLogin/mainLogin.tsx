import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css"
import Image from "next/image";
import {useTranslations} from "next-intl";
import {Inventory} from "@/layout/screens/mainLogin/components/inventory/inventory";
import {Withdraw} from "@/layout/screens/mainLogin/components/withdraw/withdraw";
import {Statistics} from "@/layout/screens/mainLogin/components/statistics";
import {LastSales} from "@/layout/components/lastSales/lastSales";
import {DescriptionMarket} from "@/layout/components/descriptionMarket/descriptionMarket";


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
                <LastSales/>
                <DescriptionMarket/>
            </section>
        </main>
    );
}