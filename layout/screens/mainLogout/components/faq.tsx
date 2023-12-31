import styles from "@/layout/screens/mainLogout/styles/mainLogout.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";


export function Faq() {
    const t = useTranslations()
    return (
        <section>
            <div className={styles.faq}>
                <div>
                    <div className={styles.faq_headerPart_selledBlock}>
                        <Image src="/walletCheck_icon.svg" width={24} height={24} alt="кошелек" className={styles.walletCheck_icon}/>
                        <p className={styles.faq_headerPart_selledBlock_text}>
                            12.000+ предметов продано{t("")}
                        </p>
                    </div>
                    <h2 className={styles.faq_headerPart_mainText}>
                        Часто задаваемые вопросы{t("")}
                    </h2>
                    <span className={styles.faq_headerPart_subText}>
            Остались еще вопросы? Свяжитесь с нашей{t("")}
            <span className={styles.faq_headerPart_subTextSpecial}>
            поддержкой
            </span>
            , они обязательно помогут!{t("")}
            </span>
                    <hr className={styles.faq_headerPart_line}/>
                </div>
                <div className={styles.faq_mainPart}>
                    <div className={styles.faq_sub_mainPart}>
                        <ul className={styles.faq_mainPart_itemsLeft}>
                            <li className={`${styles.faq_mainPart_item} ${styles.faq_mainPart_frstItem}`}>
                                <input checked={false} className={styles.faq_mainPart_item_input} id="faq_item_1" name="faq_item_input" type="radio"/>
                                <label className={styles.faq_mainPart_item_headerPart} form="faq_item_1">
                                    <p className={styles.faq_mainPart_item_headerPart_text}>
                                        Какой график работы вашего сервиса?{t("")}
                                    </p>
                                    <Image src="/plus_icon.svg" width={24} height={24} alt="плюс" className={styles.plus_icon}/>
                                </label>
                                <div className={styles.faq_mainPart_item_textBlock}>
                     <span className={styles.faq_mainPart_item_text}>
                     Для того, чтобы воспользоваться
                     данной функцией, перед принятием
                     обмена Вам нужно нажать на кнопку
                     «Проверка на оверпрайс». Далее
                     появится окно с уникальным кодом
                     сделки, который нужно будет
                     отправить в чат и после ответа
                     сотрудника нажать подтвердить.
                     Конечная стоимость обмена
                     формируется исходя из средних
                     показателей продаж на торговой
                     площадке Steam.{t("")}
                     </span>
                                </div>
                            </li>
                            <li className={`${styles.faq_mainPart_item} ${styles.faq_mainPart_scndItem}`}>
                                <input className={styles.faq_mainPart_item_input} id="faq_item_2" name="faq_item_input" type="radio"/>
                                <label className={styles.faq_mainPart_item_headerPart} form="faq_item_2">
                                    <p className={styles.faq_mainPart_item_headerPart_text}>
                                        Какую комиссию вы берете за обмены?
                                    </p>
                                    <Image src="/plus_icon.svg" width={24} height={24} alt="плюс" className={styles.plus_icon}/>
                                </label>
                                <div className={styles.faq_mainPart_item_textBlock}>
                     <span className={styles.faq_mainPart_item_text}>
                     Для того, чтобы воспользоваться
                     данной функцией, перед принятием
                     обмена Вам нужно нажать на кнопку
                     «Проверка на оверпрайс». Далее
                     появится окно с уникальным кодом
                     сделки, который нужно будет
                     отправить в чат и после ответа
                     сотрудника нажать подтвердить.
                     Конечная стоимость обмена
                     формируется исходя из средних
                     показателей продаж на торговой
                     площадке Steam.{t("")}
                     </span>
                                </div>
                            </li>
                            <li className={styles.faq_mainPart_item}>
                                <input className={styles.faq_mainPart_item_input} id="faq_item_3" name="faq_item_input" type="radio"/>
                                <label className={styles.faq_mainPart_item_headerPart} form="faq_item_3">
                                    <p className={styles.faq_mainPart_item_headerPart_text}>
                                        По какому курсу осуществляется
                                        выплата в крипте?{t("")}
                                    </p>
                                    <Image src="/plus_icon.svg" width={24} height={24} alt="плюс" className={styles.plus_icon}/>
                                </label>
                                <div className={styles.faq_mainPart_item_textBlock}>
                        <span className={styles.faq_mainPart_item_text}>
                        Для того, чтобы воспользоваться
                        данной функцией, перед принятием
                        обмена Вам нужно нажать на кнопку
                        «Проверка на оверпрайс». Далее
                        появится окно с уникальным кодом
                        сделки, который нужно будет
                        отправить в чат и после ответа
                        сотрудника нажать подтвердить.
                        Конечная стоимость обмена
                        формируется исходя из средних
                        показателей продаж на торговой
                        площадке Steam.{t("")}
                        </span>
                                </div>
                            </li>
                            <li className={`${styles.faq_mainPart_item} ${styles.faq_mainPart_frthItem}`}>
                                <input className={styles.faq_mainPart_item_input} id="faq_item_4" name="faq_item_input" type="radio"/>
                                <label className={styles.faq_mainPart_item_headerPart} form="faq_item_4">
                                    <p className={styles.faq_mainPart_item_headerPart_text}>
                                        Почему я могу Вам доверять?{t("")}
                                    </p>
                                    <Image src="/plus_icon.svg" width={24} height={24} alt="плюс" className={styles.plus_icon}/>
                                </label>
                                <div className={styles.faq_mainPart_item_textBlock}>
                     <span className={styles.faq_mainPart_item_text}>
                     Для того, чтобы воспользоваться
                     данной функцией, перед принятием
                     обмена Вам нужно нажать на кнопку
                     «Проверка на оверпрайс». Далее
                     появится окно с уникальным кодом
                     сделки, который нужно будет
                     отправить в чат и после ответа
                     сотрудника нажать подтвердить.
                     Конечная стоимость обмена
                     формируется исходя из средних
                     показателей продаж на торговой
                     площадке Steam.{t("")}
                     </span>
                                </div>
                            </li>
                        </ul>
                        <ul className={styles.faq_mainPart_itemsRight}>
                            <li className={`${styles.faq_mainPart_item} ${styles.faq_mainPart_frstItem}`}>
                                <input className={styles.faq_mainPart_item_input} id="faq_item_5" name="faq_item_input" type="radio"/>
                                <label className={styles.faq_mainPart_item_headerPart} form="faq_item_5">
                                    <p className={styles.faq_mainPart_item_headerPart_text}>
                                        Как работает функция «Проверка на
                                        Оверпрайс»?{t("")}
                                    </p>
                                    <Image src="/plus_icon.svg" width={24} height={24} alt="плюс" className={styles.plus_icon}/>
                                </label>
                                <div className={styles.faq_mainPart_item_textBlock}>
                     <span className={styles.faq_mainPart_item_text}>
                     Для того, чтобы воспользоваться
                     данной функцией, перед принятием
                     обмена Вам нужно нажать на кнопку
                     «Проверка на оверпрайс». Далее
                     появится окно с уникальным кодом
                     сделки, который нужно будет
                     отправить в чат и после ответа
                     сотрудника нажать подтвердить.
                     Конечная стоимость обмена
                     формируется исходя из средних
                     показателей продаж на торговой
                     площадке Steam.{t("")}
                     </span>
                                </div>
                            </li>
                            <li className={`${styles.faq_mainPart_item} ${styles.faq_mainPart_sixthItem}`}>
                                <input className={styles.faq_mainPart_item_input} id="faq_item_6" name="faq_item_input" type="radio"/>
                                <label className={styles.faq_mainPart_item_headerPart} form="faq_item_6">
                                    <p className={styles.faq_mainPart_item_headerPart_text}>
                                        Какую комиссию вы берете за обмены?{t("")}
                                    </p>
                                    <Image src="/plus_icon.svg" width={24} height={24} alt="плюс" className={styles.plus_icon}/>
                                </label>
                                <div className={styles.faq_mainPart_item_textBlock}>
                     <span className={styles.faq_mainPart_item_text}>
                     Для того, чтобы воспользоваться
                     данной функцией, перед принятием
                     обмена Вам нужно нажать на кнопку
                     «Проверка на оверпрайс». Далее
                     появится окно с уникальным кодом
                     сделки, который нужно будет
                     отправить в чат и после ответа
                     сотрудника нажать подтвердить.
                     Конечная стоимость обмена
                     формируется исходя из средних
                     показателей продаж на торговой
                     площадке Steam.{t("")}
                     </span>
                                </div>
                            </li>
                            <li className={styles.faq_mainPart_item}>
                                <input className={styles.faq_mainPart_item_input} id="faq_item_7" name="faq_item_input" type="radio"/>
                                <label className={styles.faq_mainPart_item_headerPart} form="faq_item_7">
                                    <p className={styles.faq_mainPart_item_headerPart_text}>
                                        По какому курсу осуществляется
                                        выплата в крипте?{t("")}
                                    </p>
                                    <Image src="/plus_icon.svg" width={24} height={24} alt="плюс" className={styles.plus_icon}/>
                                </label>
                                <div className={styles.faq_mainPart_item_textBlock}>
                        <span className={styles.faq_mainPart_item_text}>
                        Для того, чтобы воспользоваться
                        данной функцией, перед принятием
                        обмена Вам нужно нажать на кнопку
                        «Проверка на оверпрайс». Далее
                        появится окно с уникальным кодом
                        сделки, который нужно будет
                        отправить в чат и после ответа
                        сотрудника нажать подтвердить.
                        Конечная стоимость обмена
                        формируется исходя из средних
                        показателей продаж на торговой
                        площадке Steam.{t("")}
                        </span>
                                </div>
                            </li>
                            <li className={styles.faq_mainPart_item}>
                                <input className={styles.faq_mainPart_item_input} id="faq_item_8" name="faq_item_input" type="radio"/>
                                <label className={styles.faq_mainPart_item_headerPart} form="faq_item_8">
                                    <p className={styles.faq_mainPart_item_headerPart_text}>
                                        Прохождение верификации на сервисе{t("")}
                                    </p>
                                    <Image src="/plus_icon.svg" width={24} height={24} alt="плюс" className={styles.plus_icon}/>
                                </label>
                                <div className={styles.faq_mainPart_item_textBlock}>
                        <span className={styles.faq_mainPart_item_text}>
                        Для того, чтобы воспользоваться
                        данной функцией, перед принятием
                        обмена Вам нужно нажать на кнопку
                        «Проверка на оверпрайс». Далее
                        появится окно с уникальным кодом
                        сделки, который нужно будет
                        отправить в чат и после ответа
                        сотрудника нажать подтвердить.
                        Конечная стоимость обмена
                        формируется исходя из средних
                        показателей продаж на торговой
                        площадке Steam.{t("")}
                        </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}