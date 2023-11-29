import styles from "@/layout/screens/partner/styles/partner.module.css"
import Image from "next/image";


export function Partner() {
    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <Image src="/smoke_partnerProgramm.webp" width={126} height={352} alt="дым" className={styles.smoke_partnerProgramm}/>
                <div className={styles.partner_programm}>
                    <div className={styles.partner_programm_leftPart}>
                        <h2 className={styles.partner_programm_text}>
                            Партнерская программа
                            <Image src="/x_icon.svg" width={66} height={67} alt="X icon" className={styles.x_icon}/>
                        </h2>
                        <hr className={styles.partner_programm_leftPart_line}/>
                    </div>
                    <div className={styles.partner_programm_rightPart}>
                        <p className={styles.partner_programm_rightPart_text}>
                            Продавай игровые скины проще и быстрее. Безопасные
                            платежи. Без скрытых комиссий или налогов.
                        </p>
                        <button className={styles.partner_programm_rightPart_btn}>
                            <Image src="/stem_icon.svg" width={24} height={24} alt="стим" className={styles.partner_programm_rightPart_btn_steamIcon}/>
                            <p className={styles.partner_programm_rightPart_btn_text}>
                                Войти через Steam
                            </p>
                        </button>
                    </div>
                </div>
                <div className={styles.partner_programm_statistic}>
                    <ul className={styles.partner_programm_statistic_items}>
                        <li className={styles.partner_programm_statistic_frstItem}>
                            <p className={styles.partner_programm_statistic_item_mainText}>
                                $37.015+
                            </p>
                            <span className={styles.partner_programm_statistic_item_subText}>
               Заработано партнёрами
               </span>
                        </li>
                        <hr className={styles.partner_programm_statistic_items_line}/>
                        <li className={styles.partner_programm_statistic_scndItem}>
                            <p className={styles.partner_programm_statistic_item_mainText}>
                                102.279
                            </p>
                            <span className={styles.partner_programm_statistic_item_subText}>
               Всего приглашенных
               </span>
                        </li>
                        <hr className={styles.partner_programm_statistic_items_line}/>
                        <li className={styles.partner_programm_statistic_thrdItem}>
                            <p className={styles.partner_programm_statistic_item_mainText}>
                                $5.904
                            </p>
                            <span className={styles.partner_programm_statistic_item_subText}>
               Самый богатый партнер
               </span>
                        </li>
                        <hr className={styles.partner_programm_statistic_items_line}/>
                        <li className={styles.partner_programm_statistic_frthItem}>
                            <p className={styles.partner_programm_statistic_item_mainText}>
                                20
                            </p>
                            <span className={styles.partner_programm_statistic_item_subText}>
               Приглашенных в среднем
               </span>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <div className={styles.faq}>
                    <div>
                        <div className={styles.faq_headerPart_selledBlock}>
                            <Image src="/walletCheck_icon.svg" width={24} height={24} alt="кошелек" className={styles.walletCheck_icon}/>
                            <p className={styles.faq_headerPart_selledBlock_text}>
                                Зарабатывай пассивно
                            </p>
                        </div>
                        <h2 className={styles.faq_headerPart_mainText}>
                            Как это работает?
                        </h2>
                        <hr className={styles.faq_headerPart_line}/>
                    </div>
                </div>
                <div className={styles.partner_programm_instructions}>
                    <Image src="/smoke_partnerInstructions.webp" width={121} height={352} alt="дым" className={styles.smoke_partnerInstructions}/>
                    <div className={styles.partner_programm_instructions_leftPart}>
                        <div className={styles.partner_programm_instructions_sub_leftPart}>
                            <p className={styles.partner_programm_instructions_leftPart_yellowText}>
                                Партнерка avan.market
                            </p>
                            <h2 className={styles.partner_programm_instructions_leftPart_mainText}>
                                У вас есть друзья,
                                <p className={`${styles.partner_programm_instructions_leftPart_mainText} ${styles.partner_programm_instructions_leftPart_mainTextGray}`}>
                                    которым вы хотите порекомендовать сделки
                                </p>
                                и
                                получить вознаграждение?
                            </h2>
                            <div className={styles.partner_programm_instructions_leftPart_footerBlock}>
                                <hr className={styles.partner_programm_instructions_leftPart_footerBlock_line}/>
                                <span className={styles.partner_programm_instructions_leftPart_footerBlock_text}>
                  Если ваш ответ да, то партнерская программа может быть именно тем, что вы ищете!Зарабатывайте от 1% до 3% за каждую сделку
                  </span>
                            </div>
                        </div>
                        <hr className={styles.partner_programm_instructions_sub_leftPart_line}/>
                    </div>
                    <div>
                        <ul>
                            <li className={`${styles.partner_programm_instructions_rightPart_item} ${styles.partner_programm_instructions_rightPart_frstItem}`}>
                                <div className={styles.partner_programm_instructions_rightPart_item_headerBlock}>
                                    <p className={styles.partner_programm_instructions_rightPart_item_headerBlock_numText}>
                                        01
                                    </p>
                                    <h2 className={styles.partner_programm_instructions_rightPart_item_headerBlock_mainText}>
                                        Скопируйте ссылку
                                    </h2>
                                </div>
                                <span className={styles.partner_programm_instructions_rightPart_item_subText}>
               Если ваш ответ да, то партнерская программа может быть именно тем, что вы ищете!
               </span>
                            </li>
                            <li className={styles.partner_programm_instructions_rightPart_item}>
                                <div className={styles.partner_programm_instructions_rightPart_item_headerBlock}>
                                    <p className={styles.partner_programm_instructions_rightPart_item_headerBlock_numText}>
                                        02
                                    </p>
                                    <h2 className={styles.partner_programm_instructions_rightPart_item_headerBlock_mainText}>
                                        Порекомендуйте друзьям
                                    </h2>
                                </div>
                                <span className={styles.partner_programm_instructions_rightPart_item_subText}>
                  Если ваш ответ да, то партнерская программа может быть именно тем, что вы ищете!
                  </span>
                            </li>
                            <li className={styles.partner_programm_instructions_rightPart_item}>
                                <div className={styles.partner_programm_instructions_rightPart_item_headerBlock}>
                                    <p className={styles.partner_programm_instructions_rightPart_item_headerBlock_numText}>
                                        03
                                    </p>
                                    <h2 className={styles.partner_programm_instructions_rightPart_item_headerBlock_mainText}>
                                        Получайте деньги
                                    </h2>
                                </div>
                                <span className={styles.partner_programm_instructions_rightPart_item_subText}>
                  Если ваш ответ да, то партнерская программа может быть именно тем, что вы ищете!
                  </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>


    );
}