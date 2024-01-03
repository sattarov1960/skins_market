import styles from "@/layout/screens/how/styles/how.module.css"
import Image from "next/image";
import {useTranslations} from "next-intl";

export function How() {
    const t = useTranslations()
    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <div className={styles.faq}>
                    <div>
                        <div className={styles.faq_headerPart_selledBlock}>
                            <Image src="/walletCheck_icon.svg" width={24} height={24} alt="кошелек" className={styles.walletCheck_icon}/>
                            <p className={styles.faq_headerPart_selledBlock_text}>
                                Продавай скины выгодно.{t("")}
                            </p>
                        </div>
                        <h2 className={styles.faq_headerPart_mainText}>
                            Как это работает?{t("")}
                        </h2>
                        <span className={styles.faq_headerPart_subText}>
            Последнее обновление гайда: 08.08.2023{t("")}
            </span>
                        <hr className={styles.faq_headerPart_line}/>
                    </div>
                    <div className={styles.how_mainPart}>
                        <ul className={styles.how_mainPart_items}>
                            <Image src="/smoke_register.webp" width={126} height={352} alt="дым" className={styles.how_mainPart_items_smoke}/>
                            <li className={styles.how_mainPart_item}>
                                <hr className={styles.how_mainPart_item_line}/>
                                <div className={styles.how_mainPart_subItem}>
                     <span className={styles.how_mainPart_subItem_numberText}>
                     01.
                     </span>
                                    <p className={styles.how_mainPart_subItem_mainText}>
                                        Регистрация{t("")}
                                    </p>
                                    <span className={styles.how_mainPart_subItem_subText}>
                     Авторизуйтесь на сайте, используя вашу
                     учетную запись Steam{t("")}
                     </span>
                                </div>
                            </li>
                            <li className={styles.how_mainPart_item}>
                                <div className={styles.how_mainPart_item_lineBlock}>
                                    <hr className={styles.how_mainPart_item_specialLine}/>
                                </div>
                                <div className={styles.how_mainPart_subItem}>
                     <span className={styles.how_mainPart_subItem_numberText}>
                     02.
                     </span>
                                    <p className={styles.how_mainPart_subItem_mainText}>
                                        Укажите трейд-ссылку{t("")}
                                    </p>
                                    <span className={styles.how_mainPart_subItem_subText}>
                     Укажите Trade URL и выберите скины,
                     которые хотите продать.{t("")}
                     </span>
                                </div>
                            </li>
                            <li className={`${styles.how_mainPart_item} ${styles.how_mainPart_thrdItem}`}>
                                <hr className={styles.how_mainPart_item_line}/>
                                <div className={`${styles.how_mainPart_subItem} ${styles.how_mainPart_subItemThrd}`}>
               <span className={styles.how_mainPart_subItem_numberText}>
               03.
               </span>
                                    <p className={styles.how_mainPart_subItem_mainText}>
                                        Выберите платежку{t("")}
                                    </p>
                                    <span className={styles.how_mainPart_subItem_subText}>
               Выберите удобную платежную систему,
               укажите реквизиты и готово!{t("")}
               </span>
                                </div>
                            </li>
                            <li className={`${styles.how_mainPart_item} ${styles.how_mainPart_frthItem}`}>
                                <hr className={styles.how_mainPart_item_line}/>
                                <div className={`${styles.how_mainPart_subItem} ${styles.how_mainPart_subItemFrth}`}>
         <span className={styles.how_mainPart_subItem_numberText}>
         04.
         </span>
                                    <p className={styles.how_mainPart_subItem_mainText}>
                                        Продайте свои скины{t("")}
                                    </p>
                                    <span className={styles.how_mainPart_subItem_subText}>
         Передайте скины трейд-боту и ожидайте
         зачисления средств.{t("")}
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
                            Регистрация аккаунта{t("")}
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