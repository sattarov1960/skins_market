import styles from "@/layout/screens/contact/styles/contact.module.css"
import Image from "next/image";
import {useTranslations} from "next-intl";

export function Contact() {
    const t = useTranslations()
    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <Image src="/smoke_partnerProgramm.webp" width={126} height={352} alt="дым" className={styles.smoke_partnerProgramm}/>
                <div className={styles.contactInformation}>
                    <div>
                        <h2 className={styles.contactInformation_leftPart_mainText}>
                            {t("Контактная информация")}
                        </h2>
                        <p className={styles.contactInformation_leftPart_subText}>
                            {t("Напишите нам, если не нашли свой вопрос в")}
                            <span className={`${styles.contactInformation_leftPart_subText} ${styles.contactInformation_leftPart_subText_special}`}>FAQ</span>
                        </p>
                        <div className={styles.contactInformation_leftPart_socialNetworks}>
                            <ul className={styles.contactInformation_leftPart_socialNetworks_items}>
                                <li className={styles.contactInformation_leftPart_socialNetworks_item}>
                                    <Image src="/telegramOriginal_icon.svg" width={32} height={33} alt="Telegram"/>
                                    <div className={styles.contactInformation_leftPart_socialNetworks_subFrstItem}>
                                        <span className={styles.contactInformation_leftPart_socialNetworks_subItem_subText}>{t("Поддержка")} в Telegram</span>
                                        <p className={styles.contactInformation_leftPart_socialNetworks_subItem_mainText}>@username</p>
                                    </div>
                                </li>
                                <li className={styles.contactInformation_leftPart_socialNetworks_item}>
                                    <Image src="/sms_icon.svg" width={24} height={25} alt="SMS"/>
                                    <div className={styles.contactInformation_leftPart_socialNetworks_subItem}>
                                        <span className={styles.contactInformation_leftPart_socialNetworks_subItem_subText}>{t("Поддержка")}</span>
                                        <p className={`${styles.contactInformation_leftPart_socialNetworks_subItem_mainText} ${styles.contactInformation_leftPart_socialNetworks_subItem_mainText_special}`}>pr@example.com</p>
                                    </div>
                                </li>
                                <li className={`${styles.contactInformation_leftPart_socialNetworks_item} ${styles.contactInformation_leftPart_socialNetworks_thrdItem}`}>
                                    <Image src="/sms_icon.svg" width={24} height={25} alt="SMS"/>
                                    <div className={styles.contactInformation_leftPart_socialNetworks_subItem}>
                                        <span className={styles.contactInformation_leftPart_socialNetworks_subItem_subText}>
                                        {t("Сотрудничество")}
                                        </span>
                                        <p className={styles.contactInformation_leftPart_socialNetworks_subItem_mainText}>pr@example.com</p>
                                    </div>
                                </li>
                                <li className={`${styles.contactInformation_leftPart_socialNetworks_item} ${styles.contactInformation_leftPart_socialNetworks_frthItem}`}>
                                    <Image src="/sms_icon.svg" width={24} height={25} alt="SMS"/>
                                    <div className={styles.contactInformation_leftPart_socialNetworks_subItem}>
                                        <span className={styles.contactInformation_leftPart_socialNetworks_subItem_subText}>{t("Другое")}</span>
                                        <p className={styles.contactInformation_leftPart_socialNetworks_subItem_mainText}>pr@example.com</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className={styles.contactInformation_line}/>
                    <div className={styles.contactInformation_rightPart}>
                        <h2 className={styles.contactInformation_rightPart_mainText}>{t("Или оставьте зявку, и мы ответим.")}</h2>
                        <div className={styles.contactInformation_rightPart_forms}>
                            <div className={styles.contactInformation_rightPart_headerForms}>
                                <div className={styles.contactInformation_rightPart_headerFrstForm}>
                                    <p className={styles.contactInformation_rightPart_headerForm_text}>{t("Ваше имя")}Ваше имя</p>
                                    <input className={styles.contactInformation_rightPart_headerForm_input} placeholder="Введите имя" type="text"/>
                                </div>
                                <div className={styles.contactInformation_rightPart_headerScndForm}>
                                    <p className={styles.contactInformation_rightPart_headerForm_text}>Telegram</p>
                                    <input className={`${styles.contactInformation_rightPart_headerForm_input} ${styles.contactInformation_rightPart_headerForm_scnInput}`} placeholder="Введите Telegram" type="text"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contactInformation_rightPart_mainForm}>
                            <p className={styles.contactInformation_rightPart_mainForm_text}>{t("Сообщение")}</p>
                            <textarea className={styles.contactInformation_rightPart_mainForm_textarea} placeholder="Опишите суть обращения"></textarea>
                        </div>
                        <div className={styles.contactInformation_rightPart_options}>
                            <div className={styles.contactInformation_rightPart_options_leftBlock}>
                                <label className={`${styles.contactInformation_rightPart_options_leftBlock_customRadio} ${styles.contactInformation_rightPart_options_leftBlock_frstCustomRadio}`}>
                                    <input name="option" type="radio"/>
                                    <span></span>
                                    <span className={styles.contactInformation_rightPart_options_leftBlock_customRadio_text}>{t("Общий")}</span>
                                </label>
                                <label className={styles.contactInformation_rightPart_options_leftBlock_customRadio}>
                                    <input name="option" type="radio"/>
                                    <span></span>
                                    <span className={styles.contactInformation_rightPart_options_leftBlock_customRadio_text}>{t("Партнерство")}</span>
                                </label>
                                <label className={styles.contactInformation_rightPart_options_leftBlock_customRadio}>
                                    <input name="option" type="radio"/>
                                    <span></span>
                                    <span className={styles.contactInformation_rightPart_options_leftBlock_customRadio_text}>{t("Баг")}</span>
                                </label>
                                <label className={styles.contactInformation_rightPart_options_leftBlock_customRadio}>
                                    <input name="option" type="radio"/>
                                    <span></span>
                                    <span className={styles.contactInformation_rightPart_options_leftBlock_customRadio_text}>{t("Другое")}</span>
                                </label>
                            </div>
                            <button className={styles.contactInformation_rightPart_options_btn}>
                                {t("Отправить")}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>


    );
}