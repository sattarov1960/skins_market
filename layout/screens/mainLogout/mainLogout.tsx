import styles from "@/layout/screens/mainLogout/styles/mainLogout.module.css"
import {Top} from "@/layout/screens/mainLogout/components/top";
import {Statistic} from "@/layout/screens/mainLogout/components/statistic";
import {LastSales} from "@/layout/components/lastSales/lastSales";
import {DescriptionMarket} from "@/layout/components/descriptionMarket/descriptionMarket";
import {Reviews} from "@/layout/screens/mainLogout/components/reviews";
import {FooterInfo} from "@/layout/screens/mainLogout/components/footerInfo";
import {FaqComponent} from "@/layout/components/faq/faq";

export function MainLogout() {
    return (
        <main className={styles.main}>
            <Top/>
            <Statistic/>
            <LastSales/>
            <DescriptionMarket/>
            <Reviews/>
            <section className={styles.faq_section_wrap}>
                <FaqComponent/>
            </section>
            <FooterInfo/>
        </main>
    );
}