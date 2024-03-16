"use client"
import styles from "@/layout/screens/mainLogout/styles/mainLogout.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {LoginWrap} from "@/layout/wrap/login";
import Link from "next/link";
import {scrollInto} from "@/utilities/scrollInto";
import {useMetaStore} from "@/storage/client/meta";
import {TimePassedToString} from "@/utilities/time";
import {numberToWord} from "@/utilities/numberToWord";


export function FooterInfo() {
    const t = useTranslations()
    const metaStore = useMetaStore.getState()
    const {timePassedString, wordPassed} = TimePassedToString(metaStore.timeWorking)
    const {numberValue, valueString} = numberToWord(metaStore.countReviews)
    return (
        <section className={styles.reference_wrap}>
            <div className={styles.reference}>
                <div className={styles.reference_headerBlock}>
                    <Image src="/walletCheck_icon.svg" width={24} height={24} alt="кошелек" className={styles.walletCheck_icon}/>
                    <p className={styles.reference_headerBlock_text}>
                        {t("Это выгодно!")}
                    </p>
                </div>
                <div className={styles.reference_mainBlock}>
                    <h2 className={styles.reference_mainBlock_text}>
                        {t("Продавай скины с")}
                    </h2>
                    <Image src="/logo.svg" width={122} height={18} alt="лого" className={styles.reference_mainBlock_logo}/>
                </div>
                <span className={styles.reference_subText}>{t("Более человек уже выбрали нас", { countUsers:  metaStore.countUsers, valueTimeTrade: timePassedString, wordTimeTrade: t(wordPassed).replace(" назад", "").replace(" back", ""), countReviews: numberValue})}</span>
                <LoginWrap>
                    <button className={styles.reference_btn}>
                        {t("Начать сейчас")}
                    </button>
                </LoginWrap>
                <div className={styles.reference_footerBlock}>
                    <Image src="/star_icon.svg" width={24} height={24} alt="звезда" className={styles.star_icon}/>
                    <Link href="/#reviews" onClick={(event) => scrollInto({e: event, selector: '#reviews'})} className={styles.reference_footerBlock_text}>{t("Остались вопросы?")}</Link>
                </div>
                <Image src="/smoke_reference.webp" width={205} height={678} alt="дым" className={styles.smoke_reference}/>
            </div>
        </section>
    );
}