import styles from "@/layout/screens/payments/styles/payments.module.css"
import Image from "next/image";

export function Payments() {
    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <div className={styles.profile}>
                    <Image src="/smoke_profile.webp" width={128} height={627} alt="дым"
                           className={styles.smoke_profile}/>
                    <div>
                        <div className={styles.profile_leftPart_headerBlock}>
                            <Image src="/peopleAvatar_profile.webp" width={88} height={88} alt="аватар"
                                   className={styles.peopleAvatar_profile}/>
                            <div className={styles.profile_leftPart_sub_headerBlock}>
                                <p className={styles.profile_leftPart_sub_headerBlock_nameText}>
                                    Username
                                </p>
                                <span className={styles.profile_leftPart_sub_headerBlock_priceText}>
                  Сделок на: 21.374₽
                  </span>
                            </div>
                            <div className={styles.profile_leftPart_sub_headerBlock_login}>
                                <Image src="/login_icon.svg" width={27} height={22} alt="логин"
                                       className={styles.login_icon}/>
                            </div>
                        </div>
                        <div className={styles.profile_leftPart_mainBlock}>
                            <ul>
                                <li className={`${styles.profile_leftPart_mainBlock_item} ${styles.profile_leftPart_mainBlock_frstItem}`}>
                                    <Image src="/profileCircle_icon_gray.svg" width={24} height={24} alt="Icon"/>
                                    <p className={styles.profile_leftPart_mainBlock_item_text}>
                                        Профиль
                                    </p>
                                </li>
                                <li className={`${styles.profile_leftPart_mainBlock_item} ${styles.profile_leftPart_mainBlock_item_active}`}>
                                    <Image src="/cards_icon_white.svg" width={24} height={24} alt="Cards"/>
                                    <p className={`${styles.profile_leftPart_mainBlock_item_text} ${styles.profile_leftPart_mainBlock_item_text_active}`}>
                                        Платежные реквизиты
                                    </p>
                                </li>
                                <li className={`${styles.profile_leftPart_mainBlock_item} ${styles.profile_leftPart_mainBlock_scndItem}`}>
                                    <Image src="/walletCheck_gray_icon.svg" width={24} height={24} alt="Wallet"/>
                                    <p className={styles.profile_leftPart_mainBlock_item_text}>
                                        Мои продажи
                                    </p>
                                </li>
                                <li className={styles.profile_leftPart_mainBlock_item}>
                                    <Image src="/emptyWalletChange_icon.svg" width={24} height={24} alt="Wallet"/>
                                    <p className={styles.profile_leftPart_mainBlock_item_text}>
                                        Мои выводы
                                    </p>
                                </li>
                                <li className={styles.profile_leftPart_mainBlock_item}>
                                    <Image src="/share_icon.svg" width={24} height={24} alt="Share"/>
                                    <p className={styles.profile_leftPart_mainBlock_item_text}>
                                        Реферальная система
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.profile_rightPart}>
                        <h2 className={styles.profile_rightPart_mainText}>
                            платежные реквизиты
                        </h2>
                        <div className={styles.profile_rightPart_mainForm}>
                            <div className={styles.profile_rightPart_socialNetworks}>
                                <div>
                                    <p className={styles.profile_rightPart_socialNetworks_mainText}>
                                        Банковские карты
                                    </p>
                                    <span className={styles.profile_rightPart_socialNetworks_subText}>
                     Пожалуйста, укажите ваш Telegram для
                     связи
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
                                        Qiwi-кошелек
                                    </p>
                                    <span className={styles.profile_rightPart_socialNetworks_subText}>
                     Пожалуйста, укажите ваш Telegram для
                     связи
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
                                    <span className={styles.profile_rightPart_socialNetworks_subText}>
                     Пожалуйста, укажите ваш Telegram для
                     связи
                     </span>
                                    <div className={styles.profile_rightPart_socialNetworks_inputBlock}>
                                        <input className={styles.profile_rightPart_socialNetworks_input}
                                               placeholder="Адреса пока нет..." type="text"/>
                                        <Image src="/addCircle_icon.svg" width={24} height={24} alt="Circle"
                                               className={styles.addCircle_icon}/>
                                    </div>
                                </div>
                                <div className={styles.accordion_cards}>
                                    <input className={styles.accordion_input} id="accordionInput"
                                           name="input" type="checkbox"/>
                                    <label className={styles.accordion_label} htmlFor="accordionInput">
                                    </label>
                                    <div className={styles.accordion_cards_inputBlock}>
                                        <input className={styles.accordion_cards_input}
                                               placeholder="4111 2436 3424 8960" type="text"/>
                                        <Image src="/mini_arrow_bot.svg" width={8} height={8} alt="стрелочка"
                                               className={styles.arrow_top_icon}/>
                                    </div>
                                    <div className={styles.accordion_cards_itemsBlock}>
                                        <ul>
                                            <li className={styles.accordion_cards_item}>
                                                <div className={styles.accordion_cards_item_leftPart}>
                                                    <Image src="/card_icon.svg" width={24} height={25} alt="карта" className={styles.card_icon}/>
                                                    <p className={styles.accordion_cards_item_leftPart_text}>4111 2436 3424 8960</p>
                                                    <Image src="/visa_icon.svg" width={69} height={23} alt="карта" className={styles.paymentSystem_icon}/>
                                                </div>
                                                <Image src="/closeCircle_icon.svg" width={24} height={25} alt="Close" className={styles.closeCircle_icon}/>
                                            </li>
                                            <hr className={styles.accordion_cards_items_line}/>
                                            <li className={styles.accordion_cards_item}>
                                                <div className={styles.accordion_cards_item_leftPart}>
                                                    <Image src="/card_icon.svg" width={24} height={25} alt="карта" className={styles.card_icon}/>
                                                    <p className={styles.accordion_cards_item_leftPart_text}>
                                                        4111 2436 3424 8960
                                                    </p>
                                                    <Image src="/mastercard_icon.svg" width={39} height={24} alt="карта" className={styles.paymentSystem_icon}/>
                                                </div>
                                                <Image src="/closeCircle_icon.svg" width={24} height={25} alt="Close" className={styles.closeCircle_icon}/>
                                            </li>
                                            <hr className={styles.accordion_cards_items_line}/>
                                            <li className={styles.accordion_cards_item}>
                                                <div className={styles.accordion_cards_item_leftPart}>
                                                    <Image src="/cardAdd_icon.svg" width={24} height={25} alt="карта" className={styles.cardAdd_icon}/>
                                                    <p className={styles.accordion_cards_item_leftPart_subText}>
                                                        Добавить новую карту
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
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



