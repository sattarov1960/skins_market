import styles from "@/layout/screens/mainLogout/styles/mainLogout.module.css";
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
                            {t("Продать скины CS:GO на реальные деньги!")}
                        </p>
                    </div>
                    <Image src="/logo.svg" width={122} height={18} alt="лого" className={styles.logo_detail_information}/>
                </div>
                <div className={styles.detail_information_mainPart}>
            <span className={styles.detail_information_mainPart_text}>
            <span className={styles.detail_information_mainPart_specialText}>
            Avan.market
            </span>
            - это оправданная годами площадка для продажи
            внутриигровых скинов и предметов. Сервис
            обеспечивает мгновенный и безопасный обмен вещей на
            реальные деньги для геймеров по всему миру. Игрок
            CS:GO получает уникальный шанс продать скины КС ГО
            из своего личного инвентаря. Когда у вас есть
            дополнительные скины в инвентаре и вам нужны
            наличные деньги, вы можете продавать скины CS:GO на
            Avan.Market. На данный момент мы покупаем скины
            <span className={styles.detail_information_mainPart_specialText}>
            CS:GO
            </span>
            ,
            <span className={styles.detail_information_mainPart_specialText}>
            Dota2
            </span>
            ,
            <span className={styles.detail_information_mainPart_specialText}>
            RUST
            </span>
            и
            <span className={styles.detail_information_mainPart_specialText}>
            TF2
            </span>
            .
            <br/>
            <br/>
            Стоимость предметов CS:GO может
            гарантировать геймерам довольно неплохой доход:
            некоторые вещи в Counter-Strike: Global Offensive
            довольно дороги. Так почему бы вам не попытаться
            заработать хорошие деньги, продавая скины с помощью
            Avan.Market?
            </span>
                </div>
                <div className={styles.detail_information_footerPart}>
                    <p className={styles.detail_information_footerPart_text}>
                        {t("Показать все")}
                    </p>
                </div>
                <Image src="/character_forDetailInformation.webp" width={171} height={186} alt="человек" className={styles.character_forDetailInformation}/>
                <Image src="/smoke_detailInformation.webp" width={162} height={869} alt="дым" className={styles.smoke_detailInformation}/>
            </div>
        </section>
    )
}