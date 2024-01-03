import styles from "@/layout/screens/mainLogout/styles/mainLogout.module.css"
import {Top} from "@/layout/screens/mainLogout/components/top";
import {Statistic} from "@/layout/screens/mainLogout/components/statistic";
import {LastSales} from "@/layout/screens/mainLogout/components/lastSales";
import {DescriptionMarket} from "@/layout/screens/mainLogout/components/descriptionMarket";
import {Reviews} from "@/layout/screens/mainLogout/components/reviews";
import {Faq} from "@/layout/screens/mainLogout/components/faq";
import {FooterInfo} from "@/layout/screens/mainLogout/components/footerInfo";

export function MainLogout() {
    return (
        <main className={styles.main}>
            <Top/>
            <Statistic/>
            <LastSales/>
            <DescriptionMarket/>
            <Reviews/>
            <Faq/>
            <FooterInfo/>
        </main>
    );
}