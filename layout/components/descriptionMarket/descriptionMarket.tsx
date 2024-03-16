import styles from "@/layout/components/descriptionMarket/descriptionMarket.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";

export function DescriptionMarket() {
    const t = useTranslations()
    return (
        <section className={styles.detail_information_forMobile}>
            <div className={styles.detail_information}>
                <div className={styles.detail_information_headerPart}>
                    <div className={styles.detail_information_headerPart_leftBlock}>
                        <Image src="/crown_icon.svg" width={32} height={32} alt="корона" className={styles.crown_icon}/>
                        <p className={styles.detail_information_headerPart_leftBlock_text}>
                            {t("Продать скины CS:GO за реальные деньги!")}
                        </p>
                    </div>
                    <Image src="/logo.svg" width={122} height={18} alt="лого" className={styles.logo_detail_information}/>
                </div>
                <div className={styles.detail_information_mainPart}>
                    <span className={styles.detail_information_mainPart_text}>
                        <span className={styles.detail_information_mainPart_specialText}>CS SELL</span>
                        {t("Эта новая платформа предназначена для игроков желающих продать свои скины из игр вроде Counter-Strike и DOTA, и получить за это настоящие деньги Продажа скинов через Namemarket обеспечивает безопасность транзакций и предлагает разнообразие популярных способов оплаты, среди которых каждый пользователь может выбрать наиболее удобный Наша площадка выделяется лучшим сервисом и возможностью быстро конвертировать скины из КС ГО в реальные денежные средства Если у вас есть скины, которые вы хотите продать, то Namemarket это отличное место для этого Для начала торговли вам понадобятся лишь скины и аккаунт в Steam")}</span>
                </div>
                <Image src="/character_forDetailInformation.webp" width={171} height={186} alt="человек" className={styles.character_forDetailInformation}/>
            </div>
        </section>
    )
}