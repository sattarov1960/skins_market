import styles from "@/layout/screens/partner/styles/partner.module.css"
import Image from "next/image";
import {useTranslations} from "next-intl";
import Link from "next/link";


export function Partner() {
    const t = useTranslations()
    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <Image src="/smoke_partnerProgramm.webp" width={126} height={352} alt="дым" className={styles.smoke_partnerProgramm}/>
                <div className={styles.partner_programm}>
                    <div className={styles.partner_programm_leftPart}>
                        <h2 className={styles.partner_programm_text}>
                            {t("Партнерская программа")}
                            <Image src="/x_icon.svg" width={66} height={67} alt="X icon" className={styles.x_icon}/>
                        </h2>
                        <hr className={styles.partner_programm_leftPart_line}/>
                    </div>
                    <div className={styles.partner_programm_rightPart}>
                        <p className={styles.partner_programm_rightPart_text}>
                            {t("Продавай игровые скины проще и быстрее Безопасные платежи Без скрытых комиссий или налогов")}
                        </p>
                        <Link href={`${process.env.api}/login`} className={styles.partner_programm_rightPart_btn}>
                            <Image src="/stem_icon.svg" width={24} height={24} alt="стим" className={styles.partner_programm_rightPart_btn_steamIcon}/>
                            <p className={styles.partner_programm_rightPart_btn_text}>
                                {t("Войти через Steam")}
                            </p>
                        </Link>
                    </div>
                </div>
                <div className={styles.partner_programm_statistic}>
                    <ul className={styles.partner_programm_statistic_items}>
                        <li className={styles.partner_programm_statistic_frstItem}>
                            <p className={styles.partner_programm_statistic_item_mainText}>
                                $37.015+
                            </p>
                            <span className={styles.partner_programm_statistic_item_subText}>
               {t("Заработано партнёрами")}
               </span>
                        </li>
                        <hr className={styles.partner_programm_statistic_items_line}/>
                        <li className={styles.partner_programm_statistic_scndItem}>
                            <p className={styles.partner_programm_statistic_item_mainText}>
                                102.279
                            </p>
                            <span className={styles.partner_programm_statistic_item_subText}>
               {t("Всего приглашенных")}
               </span>
                        </li>
                        <hr className={styles.partner_programm_statistic_items_line}/>
                        <li className={styles.partner_programm_statistic_thrdItem}>
                            <p className={styles.partner_programm_statistic_item_mainText}>
                                $5.904
                            </p>
                            <span className={styles.partner_programm_statistic_item_subText}>
               {t("Самый богатый партнер")}
               </span>
                        </li>
                        <hr className={styles.partner_programm_statistic_items_line}/>
                        <li className={styles.partner_programm_statistic_frthItem}>
                            <p className={styles.partner_programm_statistic_item_mainText}>
                                20
                            </p>
                            <span className={styles.partner_programm_statistic_item_subText}>
               {t("Приглашенных в среднем")}
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
                                {t("Зарабатывай пассивно")}
                            </p>
                        </div>
                        <h2 className={styles.faq_headerPart_mainText}>
                            {t("Как это работает?")}
                        </h2>
                        <hr className={styles.faq_headerPart_line}/>
                    </div>
                </div>
                <div className={styles.partner_programm_instructions}>
                    <Image src="/smoke_partnerInstructions.webp" width={121} height={352} alt="дым" className={styles.smoke_partnerInstructions}/>
                    <div className={styles.partner_programm_instructions_leftPart}>
                        <div className={styles.partner_programm_instructions_sub_leftPart}>
                            <p className={styles.partner_programm_instructions_leftPart_yellowText}>
                                {t("Партнерка")} avan.market
                            </p>
                            <h2 className={styles.partner_programm_instructions_leftPart_mainText}>
                                {t("У вас есть друзья,")}
                                <p className={`${styles.partner_programm_instructions_leftPart_mainText} ${styles.partner_programm_instructions_leftPart_mainTextGray}`}>
                                    {t("которым вы хотите порекомендовать сделки")}
                                </p>
                                {t("и получить вознаграждение?")}
                            </h2>
                            <div className={styles.partner_programm_instructions_leftPart_footerBlock}>
                                <hr className={styles.partner_programm_instructions_leftPart_footerBlock_line}/>
                                <span className={styles.partner_programm_instructions_leftPart_footerBlock_text}>
                                    {t("Если ваш ответ да, то партнерская программа может быть именно тем, что вы ищете!")} {t("Зарабатывайте от 1% до 3% за каждую сделку")}
                                </span>
                            </div>
                            <hr className={styles.partner_programm_instructions_sub_leftPart_line_mobile}/>
                        </div>
                        <hr className={styles.partner_programm_instructions_sub_leftPart_line}/>
                    </div>
                    <div>
                        <ul className={styles.partner_programm_instructions_sub_rightPart_wrap}>
                            <li className={`${styles.partner_programm_instructions_rightPart_item} ${styles.partner_programm_instructions_rightPart_frstItem}`}>
                                <div className={styles.partner_programm_instructions_rightPart_item_headerBlock}>
                                    <p className={styles.partner_programm_instructions_rightPart_item_headerBlock_numText}>
                                        01
                                    </p>
                                    <h2 className={styles.partner_programm_instructions_rightPart_item_headerBlock_mainText}>
                                        {t("Скопируйте ссылку")}
                                    </h2>
                                </div>
                                <span className={styles.partner_programm_instructions_rightPart_item_subText}>
               {t("Перейдите в профиль, Реферальная система скопируйте вашу ссылку")}
               </span>
                            </li>
                            <li className={styles.partner_programm_instructions_rightPart_item}>
                                <div className={styles.partner_programm_instructions_rightPart_item_headerBlock}>
                                    <p className={styles.partner_programm_instructions_rightPart_item_headerBlock_numText}>
                                        02
                                    </p>
                                    <h2 className={styles.partner_programm_instructions_rightPart_item_headerBlock_mainText}>
                                        {t("Порекомендуйте друзьям")}
                                    </h2>
                                </div>
                                <span className={styles.partner_programm_instructions_rightPart_item_subText}>
                  {t("Расскажите двум - трем друзьям о нашем сервисе покупки и продажи скинов")}
                  </span>
                            </li>
                            <li className={styles.partner_programm_instructions_rightPart_item}>
                                <div className={styles.partner_programm_instructions_rightPart_item_headerBlock}>
                                    <p className={styles.partner_programm_instructions_rightPart_item_headerBlock_numText}>
                                        03
                                    </p>
                                    <h2 className={styles.partner_programm_instructions_rightPart_item_headerBlock_mainText}>
                                        {t("Получайте деньги")}
                                    </h2>
                                </div>
                                <span className={styles.partner_programm_instructions_rightPart_item_subText}>
                  {t("После того как ваш друг продаст предметы вам в автоматическом режиме прийдут деньги")}
                  </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}