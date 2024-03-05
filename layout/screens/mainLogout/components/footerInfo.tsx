import styles from "@/layout/screens/mainLogout/styles/mainLogout.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";


export function FooterInfo() {
    const t = useTranslations()
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
                <span className={styles.reference_subText}>{t("Более 8000 человек уже выбрали нас")}</span>
                <button className={styles.reference_btn}>
                    {t("Начать сейчас")}
                </button>
                <div className={styles.reference_footerBlock}>
                    <Image src="/star_icon.svg" width={24} height={24} alt="звезда" className={styles.star_icon}/>
                    <span className={styles.reference_footerBlock_text}>
            {t("Остались вопросы?")}
            </span>
                </div>
                <Image src="/smoke_reference.webp" width={205} height={678} alt="дым" className={styles.smoke_reference}/>
            </div>
        </section>
    );
}