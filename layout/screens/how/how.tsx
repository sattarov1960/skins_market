"use client"

import styles from "@/layout/screens/how/styles/how.module.css"
import Image from "next/image";
import {useTranslations} from "next-intl";
import {useUserStore} from "@/storage/client/user";

export function How() {
    const t = useTranslations()
    const userStore = useUserStore()
    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <div className={styles.faq}>
                    <div>
                        <div className={styles.faq_headerPart_selledBlock}>
                            <Image src="/walletCheck_icon.svg" width={24} height={24} alt="кошелек" className={styles.walletCheck_icon}/>
                            <p className={styles.faq_headerPart_selledBlock_text}>
                                {t("Продавай скины выгодно.")}
                            </p>
                        </div>
                        <h2 className={styles.faq_headerPart_mainText}>
                            {t("Как это работает?")}
                        </h2>
                        <span className={styles.faq_headerPart_subText}>
                            {t("Последнее обновление гайда: ")}25.01.2024
                        </span>
                        <hr className={styles.faq_headerPart_line}/>
                    </div>
                    <div className={styles.how_mainPart}>
                        <ul className={styles.how_mainPart_items}>
                            <Image src="/smoke_register.webp" width={126} height={352} alt="дым" className={styles.how_mainPart_items_smoke}/>
                            <li className={styles.how_mainPart_item}>
                                <div className={styles.how_mainPart_item_lineBlock}>
                                    <hr className={styles.how_mainPart_item_specialLine}/>
                                </div>
                                <div className={styles.how_mainPart_subItem}>
                                    <span className={styles.how_mainPart_subItem_numberText}>
                                    01.
                                    </span>
                                    <p className={styles.how_mainPart_subItem_mainText}>
                                        {t("Регистрация")}
                                    </p>
                                    <span
                                        className={styles.how_mainPart_subItem_subText}>{t("Авторизуйтесь на сайте, используя вашу учетную запись Steam")}</span>
                                </div>
                            </li>
                            <li className={styles.how_mainPart_item}>
                                <div className={styles.how_mainPart_item_lineBlock}>
                                    <hr className={styles.how_mainPart_item_specialLine} style={{animationDelay: "2.5s"}}/>
                                </div>
                                <div className={styles.how_mainPart_subItem}>
                                    <span className={styles.how_mainPart_subItem_numberText}>
                                    02.
                                    </span>
                                    <p className={styles.how_mainPart_subItem_mainText}>
                                        {t("Укажите трейд-ссылку")}
                                    </p>
                                    <span className={styles.how_mainPart_subItem_subText}>
                                        {t("Укажите Trade URL и выберите скины, которые хотите продать.")}
                                     </span>
                                </div>
                            </li>
                            <li className={`${styles.how_mainPart_item} ${styles.how_mainPart_thrdItem}`}>
                                <div className={styles.how_mainPart_item_lineBlock}>
                                    <hr className={styles.how_mainPart_item_specialLine} style={{animationDelay: "5s"}}/>
                                </div>
                                <div className={`${styles.how_mainPart_subItem} ${styles.how_mainPart_subItemThrd}`}>
                                    <span className={styles.how_mainPart_subItem_numberText}>
                                    03.
                                    </span>
                                    <p className={styles.how_mainPart_subItem_mainText}>
                                        Выберите платежку{t("")}
                                    </p>
                                    <span className={styles.how_mainPart_subItem_subText}>
                                        {t("Выберите удобную платежную систему, укажите реквизиты и готово!")}
                                    </span>
                                </div>
                            </li>
                            <li className={`${styles.how_mainPart_item} ${styles.how_mainPart_frthItem}`}>
                                <div className={styles.how_mainPart_item_lineBlock}>
                                    <hr className={styles.how_mainPart_item_specialLine} style={{animationDelay: "7.5s"}}/>
                                </div>
                                <div className={`${styles.how_mainPart_subItem} ${styles.how_mainPart_subItemFrth}`}>
         <span className={styles.how_mainPart_subItem_numberText}>
         04.
         </span>
                                    <p className={styles.how_mainPart_subItem_mainText}>
                                        {t("Продайте свои скины")}
                                    </p>
                                    <span className={styles.how_mainPart_subItem_subText}>
                                        {t("Передайте скины трейд-боту и ожидайте зачисления средств.")}
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.how_register}>
                <div className={`${styles.how_register_subBlock} ${styles.how_register_frstSubBlock}`}>
                        <div className={styles.how_register_subBlock_numBlock}>
                        <span className={styles.how_register_subBlock_numBlock_text}>
                        01
                        </span>
                        </div>
                        <h2 className={styles.how_register_subBlock_mainText}>
                            {t("Регистрация аккаунта")}
                        </h2>
                        <p className={styles.how_register_subBlock_subTitle}>
                            {t("Какой-то подзаголовок?")}
                        </p>
                        <span className={styles.how_register_subBlock_subText}>
         Это очень просто! Нажмите на кнопку “Войти через
         Steam” и используя учетную запись Steam, в которой
         находятся ваши скины CS:GO авторизуйтесь сайте.{t("")}
         <br/>
         <br/>
         После нажатия на кнопку авторизации Вы будете
         переведены на сайт Steam, где Вы должны войти в
         систему через Вашу учетную запись Steam. Убедитесь,
         что домен авторизации на сайте Steam соответствует
         домену avan.market. У нас много поддельников, не
         позволяйте обманывать себя.{t("")}
         </span>
                        <Image src="/howTo_image.webp" width={1232} height={433} alt="HowToImage" className={styles.howTo_image}/>
                        <Image src="/howTo_mobile.webp" width={335} height={117} alt="HowToMobile" className={styles.howTo_image_mobile}/>
                        <span className={`${styles.how_register_subBlock_subText} ${styles.how_register_subBlock_scndSubText}`}>
         Это очень просто! Нажмите на кнопку “Войти через
         Steam” и используя учетную запись Steam, в которой
         находятся ваши скины CS:GO авторизуйтесь сайте.{t("")}
         <br/>
         <br/>
         После нажатия на кнопку авторизации Вы будете
         переведены на сайт Steam, где Вы должны войти в
         систему через Вашу учетную запись Steam. Убедитесь,
         что домен авторизации на сайте Steam соответствует
         домену avan.market. У нас много поддельников, не
         позволяйте обманывать себя.{t("")}
         </span>
                    </div>
                    <div className={styles.how_register_subBlock}>
                        <div className={styles.how_register_subBlock_numBlock}>
            <span className={styles.how_register_subBlock_numBlock_text}>
            02
            </span>
                        </div>
                        <h2 className={styles.how_register_subBlock_mainText}>
                            Укажите трейд-ссылку{t("")}
                        </h2>
                        <p className={styles.how_register_subBlock_subTitle}>
                            Какой-то подзаголовок?{t("")}
                        </p>
                        <span className={styles.how_register_subBlock_subText}>
         Это очень просто! Нажмите на кнопку “Войти через
         Steam” и используя учетную запись Steam, в которой
         находятся ваши скины CS:GO авторизуйтесь сайте.{t("")}
         <br/>
         <br/>
         После нажатия на кнопку авторизации Вы будете
         переведены на сайт Steam, где Вы должны войти в
         систему через Вашу учетную запись Steam. Убедитесь,
         что домен авторизации на сайте Steam соответствует
         домену avan.market. У нас много поддельников, не
         позволяйте обманывать себя.{t("")}
         </span>
                        <Image src="/howTo_2_image.webp" width={992} height={433} alt="HowTo2" className={styles.howTo_image}/>
                        <Image src="/howTo_2_mobile.webp" width={335} height={147} alt="HowTo2Mobile" className={styles.howTo_image_mobile}/>
                        <span className={`${styles.how_register_subBlock_subText} ${styles.how_register_subBlock_scndSubText}`}>
         Это очень просто! Нажмите на кнопку “Войти через
         Steam” и используя учетную запись Steam, в которой
         находятся ваши скины CS:GO авторизуйтесь сайте.{t("")}
         <br/>
         <br/>
         После нажатия на кнопку авторизации Вы будете
         переведены на сайт Steam, где Вы должны войти в
         систему через Вашу учетную запись Steam. Убедитесь,
         что домен авторизации на сайте Steam соответствует
         домену avan.market. У нас много поддельников, не
         позволяйте обманывать себя.{t("")}
         </span>
                    </div>
                </div>
            </section>
        </main>


    );
}