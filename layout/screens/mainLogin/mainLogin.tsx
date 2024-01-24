import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css"
import Image from "next/image";
import {useTranslations} from "next-intl";
import {Inventory} from "@/layout/screens/mainLogin/components/inventory";
import {Withdraw} from "@/layout/screens/mainLogin/components/withdraw";


export function MainLogin() {
    const t = useTranslations()
    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <div className={styles.inventory_and_recieve}>
                    <Inventory/>
                    <Withdraw/>
                </div>
                <Image src="/smoke_mainPart.webp" width={318} height={627} alt="дым" className={styles.smoke_mainPart}/>
            </section>
            <section>
                <div className={styles.statistic_part}>
                    <ul className={styles.statistic_part_items}>
                        <li className={styles.statistic_part_item}>
                            <div className={styles.statistic_part_item_headerBlock}>
                                <Image src="/clock_icon.svg" width={34} height={34} alt="часы" className={styles.statistic_part_item_icon}/>
                                <p className={styles.statistic_part_item_headerBlock_text}>
                                    5-10 {t("минут")}
                                </p>
                            </div>
                            <span className={styles.statistic_part_item_subText}>
               В среднем занимает сделка с момента
               регистрации
               </span>
                        </li>
                        <li className={styles.statistic_part_item}>
                            <hr className={styles.statistic_part_item_line}/>
                        </li>
                        <li className={styles.statistic_part_item}>
                            <div className={styles.statistic_part_item_headerBlock}>
                                <Image src="/layer_icon.svg" width={35} height={34} alt="слои" className={styles.statistic_part_item_icon}/>
                                <p className={styles.statistic_part_item_headerBlock_text}>
                                    12 тысяч
                                </p>
                            </div>
                            <span className={styles.statistic_part_item_subText}>
               Всего куплено предметов за время работы
               </span>
                        </li>
                        <li className={styles.statistic_part_item}>
                            <hr className={styles.statistic_part_item_line}/>
                        </li>
                        <li className={styles.statistic_part_item}>
                            <div className={styles.statistic_part_item_headerBlock}>
                                <Image src="/checkMark_icon.svg" width={35} height={34} alt="галочка" className={styles.statistic_part_item_icon}/>
                                <p className={styles.statistic_part_item_headerBlock_text}>
                                    ПРИВАТНО
                                </p>
                            </div>
                            <span className={styles.statistic_part_item_subText}>
               Приватное и безопасное проведение платежа
               </span>
                        </li>
                        <li className={styles.statistic_part_item}>
                            <hr className={styles.statistic_part_item_line}/>
                        </li>
                        <li className={styles.statistic_part_item}>
                            <div className={styles.statistic_part_item_headerBlock}>
                                <Image src="/emoji_icon.svg" width={34} height={34} alt="эмодзи" className={styles.statistic_part_item_icon}/>
                                <p className={styles.statistic_part_item_headerBlock_text}>
                                    прозрачно
                                </p>
                            </div>
                            <span className={styles.statistic_part_item_subText}>
               Никаких скрытых комиссий, налогов и платежей.
               </span>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <div className={styles.latest_deals}>
                    <div className={styles.latest_deals_headerPart}>
                        <h2 className={styles.latest_deals_headerPart_text}>
                            Последние сделки
                        </h2>
                        <div className={styles.latest_deals_headerPart_rightSwitches}>
                            <div className={styles.latest_deals_headerPart_rightSwitches_switch}>
                                <Image src="/arrowLeft_forSwitches_icon.svg" width={15} height={14} alt="стрелочка" className={styles.arrows_forSwitches_icon}/>
                            </div>
                            <div className={`${styles.latest_deals_headerPart_rightSwitches_switch} ${styles.latest_deals_headerPart_rightSwitches_scndSwitch}`}>
                                <Image src="/arrowRight_forSwitches_icon.svg" width={15} height={14} alt="стрелочка" className={styles.arrows_forSwitches_icon}/>
                            </div>
                        </div>
                    </div>
                    <ul className={styles.latest_deals_items}>
                        <li className={`${styles.latest_deals_item} ${styles.latest_deals_frstItem}`}>
                            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
                            </div>
                            <Image src="/fiveSeven_skin.webp" width={127} height={96} alt="пистолет" className={styles.latest_deals_item_image}/>
                            <div className={styles.latest_deals_item_footerBlock}>
                                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                                    Monkey Business
                                </p>
                                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
                            </div>
                        </li>
                        <li className={`${styles.latest_deals_item} ${styles.latest_deals_scndItem}`}>
                            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
                            </div>
                            <Image src="/ak_skin.webp" width={127} height={96} alt="пистолет" className={styles.latest_deals_item_image}/>
                            <div className={styles.latest_deals_item_footerBlock}>
                                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                                    Monkey Business
                                </p>
                                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
                            </div>
                        </li>
                        <li className={`${styles.latest_deals_item} ${styles.latest_deals_thrdItem}`}>
                            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
                            </div>
                            <Image src="/mac10_skin.webp" width={103} height={91} alt="пистолет" className={styles.latest_deals_item_image}/>
                            <div className={styles.latest_deals_item_footerBlock}>
                                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                                    Monkey Business
                                </p>
                                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
                            </div>
                        </li>
                        <li className={`${styles.latest_deals_item} ${styles.latest_deals_frthItem}`}>
                            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
                            </div>
                            <Image src="/fiveSeven_skin.webp" width={127} height={96} alt="пистолет" className={styles.latest_deals_item_image}/>
                            <div className={styles.latest_deals_item_footerBlock}>
                                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                                    Monkey Business
                                </p>
                                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
                            </div>
                        </li>
                        <li className={`${styles.latest_deals_item} ${styles.latest_deals_fifthItem}`}>
                            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
                            </div>
                            <Image src="/ak_skin.webp" width={127} height={96} alt="пистолет" className={styles.latest_deals_item_image}/>
                            <div className={styles.latest_deals_item_footerBlock}>
                                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                                    Monkey Business
                                </p>
                                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
                            </div>
                        </li>
                        <li className={`${styles.latest_deals_item} ${styles.latest_deals_sixthItem}`}>
                            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
                            </div>
                            <Image src="/mac10_skin.webp" width={103} height={91} alt="пистолет" className={styles.latest_deals_item_image}/>
                            <div className={styles.latest_deals_item_footerBlock}>
                                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                                    Monkey Business
                                </p>
                                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
                            </div>
                        </li>
                        <li className={`${styles.latest_deals_item} ${styles.latest_deals_svnthItem}`}>
                            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
                            </div>
                            <Image src="/ak_skin.webp" width={127} height={96} alt="пистолет" className={styles.latest_deals_item_image}/>
                            <div className={styles.latest_deals_item_footerBlock}>
                                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                                    Monkey Business
                                </p>
                                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
                            </div>
                        </li>
                        <li className={`${styles.latest_deals_item} ${styles.latest_deals_penultDarkItem}`}>
                            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
                            </div>
                            <Image src="/mac10_skin.webp" width={103} height={91} alt="пистолет" className={styles.latest_deals_item_image}/>
                            <div className={styles.latest_deals_item_footerBlock}>
                                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                                    Monkey Business
                                </p>
                                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
                            </div>
                        </li>
                        <li className={`${styles.latest_deals_item} ${styles.latest_deals_lastDarkItem}`}>
                            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
                            </div>
                            <Image src="/mac10_skin.webp" width={103} height={91} alt="пистолет" className={styles.latest_deals_item_image}/>
                            <div className={styles.latest_deals_item_footerBlock}>
                                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                                    Monkey Business
                                </p>
                                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={styles.detail_information_forMobile}>
                <div className={styles.detail_information}>
                    <div className={styles.detail_information_headerPart}>
                        <div className={styles.detail_information_headerPart_leftBlock}>
                            <Image src="/crown_icon.svg" width={32} height={32} alt="корона" className={styles.crown_icon}/>
                            <p className={styles.detail_information_headerPart_leftBlock_text}>
                                Продать скины CS:GO на реальные деньги!
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
            <span className={styles.detail_information_mainPart_specialText}>CS:GO</span>,
            <span className={styles.detail_information_mainPart_specialText}>Dota2</span>,
            <span className={styles.detail_information_mainPart_specialText}>RUST</span>и
            <span className={styles.detail_information_mainPart_specialText}>TF2</span>.
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
                            Показать все
                        </p>
                    </div>
                    <Image src="/character_forDetailInformation.webp" width={171} height={186} alt="человек" className={styles.character_forDetailInformation}/>
                    <Image src="/smoke_detailInformation.webp" width={162} height={869} alt="дым" className={styles.smoke_detailInformation}/>
                </div>
            </section>
        </main>


    );
}