"use client"
import styles from "@/layout/components/faq/faq.module.css"
import Image from "next/image";
import {useTranslations} from "next-intl";
import {useState} from "react";
import Link from "next/link";

export function FaqComponent() {
    const [selectedFaqItem, setSelectedFaqItem] = useState<string | null>(null);
    const t = useTranslations()
    return (
        <div className={styles.faq}>
            <div>
                <div className={styles.faq_headerPart_selledBlock}>
                    <Image src="/walletCheck_icon.svg" width={24} height={24} alt="кошелек"
                           className={styles.walletCheck_icon}/>
                    <p className={styles.faq_headerPart_selledBlock_text}>
                        12.000+ {t("предметов продано")}
                    </p>
                </div>
                <h2 className={styles.faq_headerPart_mainText}>
                    {t("Часто задаваемые вопросы")}
                </h2>
                <span className={styles.faq_headerPart_subText}>
                    {t("Остались еще вопросы? Свяжитесь с нашей")}
                    <Link href="https://t.me/MannCoSupplyCrateKey" className={styles.faq_headerPart_subTextSpecial}>
                     {t("поддержкой")}
                    </Link>
                    {t(", они обязательно помогут!")}
                </span>
                <hr className={styles.faq_headerPart_line}/>
            </div>
            <div className={styles.faq_mainPart}>
                <div className={styles.faq_sub_mainPart}>
                    <ul className={styles.faq_mainPart_itemsLeft}>
                        <li className={`${styles.faq_mainPart_item} ${styles.faq_mainPart_frstItem}`}>
                            <div className={styles.faq_mainPart_item_headerPart}
                                 onClick={() => setSelectedFaqItem(selectedFaqItem === 'faq_item_1' ? null : 'faq_item_1')}>
                                <p className={styles.faq_mainPart_item_headerPart_text}>
                                    {t("Что такое ")} Name.market?
                                </p>
                                <Image src="/plus_icon.svg" width={24} height={24} alt="плюс"
                                       className={styles.plus_icon}/>
                            </div>
                            {selectedFaqItem === 'faq_item_1' && <div className={styles.faq_mainPart_item_textBlock}>
                              <span className={styles.faq_mainPart_item_text}>
                                {t("Эта новая платформа предназначена для игроков желающих продать свои скины из игр вроде Counter-Strike и DOTA, и получить за это настоящие деньги Продажа скинов через Namemarket обеспечивает безопасность транзакций и предлагает разнообразие популярных способов оплаты, среди которых каждый пользователь может выбрать наиболее удобный Наша площадка выделяется лучшим сервисом и возможностью быстро конвертировать скины из КС ГО в реальные денежные средства Если у вас есть скины, которые вы хотите продать, то Namemarket это отличное место для этого Для начала торговли вам понадобятся лишь скины и аккаунт в Steam")}
                              </span>
                            </div>}
                        </li>
                        <li className={styles.faq_mainPart_item}>
                            <div className={styles.faq_mainPart_item_headerPart}
                                 onClick={() => setSelectedFaqItem(selectedFaqItem === 'faq_item_2' ? null : 'faq_item_2')}>
                                <p className={styles.faq_mainPart_item_headerPart_text}>
                                    {t("Руководство по продаже скинов КС ГО")}
                                </p>
                                <Image src="/plus_icon.svg" width={24} height={24} alt="плюс"
                                       className={styles.plus_icon}/>
                            </div>
                            {selectedFaqItem === 'faq_item_2' && <div className={styles.faq_mainPart_item_textBlock}>
                              <span className={styles.faq_mainPart_item_text}>
                                {t("Шаг 1 Войдите в систему через свою учетную запись Steam Нажмите на желтую кнопку")}
                              </span>
                            </div>}
                        </li>
                        <li className={styles.faq_mainPart_item}>
                            <div className={styles.faq_mainPart_item_headerPart}
                                 onClick={() => setSelectedFaqItem(selectedFaqItem === 'faq_item_3' ? null : 'faq_item_3')}>
                                <p className={styles.faq_mainPart_item_headerPart_text}>
                                    {t("От чего зависит цена")}
                                </p>
                                <Image src="/plus_icon.svg" width={24} height={24} alt="плюс"
                                       className={styles.plus_icon}/>
                            </div>
                            {selectedFaqItem === 'faq_item_3' && <div className={styles.faq_mainPart_item_textBlock}>
                              <span className={styles.faq_mainPart_item_text}>
                                {t("Стоимость предметов на нашем сайте")}
                              </span>
                            </div>}
                        </li>
                    </ul>
                    <ul className={styles.faq_mainPart_itemsRight}>
                        <li className={`${styles.faq_mainPart_item} ${styles.faq_mainPart_frstItem}`}>
                            <div className={styles.faq_mainPart_item_headerPart}
                                 onClick={() => setSelectedFaqItem(selectedFaqItem === 'faq_item_4' ? null : 'faq_item_4')}>
                                <p className={styles.faq_mainPart_item_headerPart_text}>
                                    {t("Какая комиссия за продажу предметов")}
                                </p>
                                <Image src="/plus_icon.svg" width={24} height={24} alt="плюс"
                                       className={styles.plus_icon}/>
                            </div>
                            {selectedFaqItem === 'faq_item_4' && <div className={styles.faq_mainPart_item_textBlock}>
                            <span className={styles.faq_mainPart_item_text}>
                              {t("Комиссия за каждый способ платежа определяется отдельно")}
                            </span>
                            </div>}
                        </li>
                        <li className={styles.faq_mainPart_item}>
                            <div className={styles.faq_mainPart_item_headerPart}
                                 onClick={() => setSelectedFaqItem(selectedFaqItem === 'faq_item_5' ? null : 'faq_item_5')}>
                                <p className={styles.faq_mainPart_item_headerPart_text}>
                                    {t("Проблемы при создании обмена")}
                                </p>
                                <Image src="/plus_icon.svg" width={24} height={24} alt="плюс"
                                       className={styles.plus_icon}/>
                            </div>
                            {selectedFaqItem === 'faq_item_5' && <div className={styles.faq_mainPart_item_textBlock}>
                            <span className={styles.faq_mainPart_item_text}>
                              {t("В настоящее время Steam сталкивается с техническими сложностями")}
                            </span>
                            </div>}
                        </li>
                        <li className={styles.faq_mainPart_item}>
                            <div className={styles.faq_mainPart_item_headerPart}
                                 onClick={() => setSelectedFaqItem(selectedFaqItem === 'faq_item_6' ? null : 'faq_item_6')}>
                                <p className={styles.faq_mainPart_item_headerPart_text}>
                                    {t("Требования к учетной записи")}
                                </p>
                                <Image src="/plus_icon.svg" width={24} height={24} alt="плюс"
                                       className={styles.plus_icon}/>
                            </div>
                            {selectedFaqItem === 'faq_item_6' && <div className={styles.faq_mainPart_item_textBlock}>
                            <span className={styles.faq_mainPart_item_text}>
                              {t("Проверьте свой аккаунт на наличие данных пунктов")}
                            </span>
                            </div>}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


`
`