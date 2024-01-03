import styles from "@/layout/screens/payments/styles/payments.module.css"
import Image from "next/image";
import {useTranslations} from "next-intl";
import {AsideCabinet} from "@/layout/components/asideCabinet/asideCabinet";

export function Payments() {
    const t = useTranslations()
    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <div className={styles.profile}>
                    <Image src="/smoke_profile.webp" width={128} height={627} alt="дым"
                           className={styles.smoke_profile}/>
                    <AsideCabinet/>
                    <div className={styles.profile_rightPart}>
                        <h2 className={styles.profile_rightPart_mainText}>
                            {t("Платежные реквизиты")}
                        </h2>
                        <div className={styles.profile_rightPart_mainForm}>
                            <div className={styles.profile_rightPart_socialNetworks}>
                                <div>
                                    <p className={styles.profile_rightPart_socialNetworks_mainText}>
                                        {t("Банковские карты")}
                                    </p>
                                    <span className={styles.profile_rightPart_socialNetworks_subText}>
                     {t("Пожалуйста, укажите вашу банковскую карту")}
                     </span>
                                    <div className={styles.profile_rightPart_socialNetworks_inputBlock}>
                                        <input className={styles.profile_rightPart_socialNetworks_input}
                                               placeholder="4141 0000 1234 3274" type="text"/>
                                        <Image src="/mini_arrow_bot.svg" width={8} height={8} alt="Arrow"
                                               className={styles.profile_rightPart_socialNetworks_inputBlock_icon}/>
                                    </div>
                                </div>
                                <div>
                                    <p className={styles.profile_rightPart_socialNetworks_mainText}>
                                        Qiwi-{t("кошелек")}
                                    </p>
                                    <span className={styles.profile_rightPart_socialNetworks_subText}>
                     {t("Пожалуйста, укажите ваш Qiwi кошелек")}
                     </span>
                                    <div className={styles.profile_rightPart_socialNetworks_inputBlock}>
                                        <input className={styles.profile_rightPart_socialNetworks_input}
                                               placeholder="+792" type="text"/>
                                        <Image src="/tickСircle_icon.svg" width={24} height={24} alt="Circle"
                                               className={styles.tickCircle_icon}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.profile_rightPart_mainForm}>
                            <div className={styles.profile_rightPart_socialNetworks}>
                                <div>
                                    <p className={styles.profile_rightPart_socialNetworks_mainText}>
                                        USDT TRC-20
                                    </p>
                                    <span className={styles.profile_rightPart_socialNetworks_subText}>{t("Пожалуйста, укажите ваш USDT кошелек")}
                     </span>
                                    <div className={styles.profile_rightPart_socialNetworks_inputBlock}>
                                        <input className={styles.profile_rightPart_socialNetworks_input}
                                               placeholder="Адреса пока нет..." type="text"/>
                                        <Image src="/addCircle_icon.svg" width={24} height={24} alt="Circle"
                                               className={styles.addCircle_icon}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        );
}



