import styles from "@/layout/components/footer/footer.module.css"
import Image from "next/image";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_statisticPart}>
                <ul className={styles.footer_statisticPart_items}>
                    <li className={styles.footer_statisticPart_item}>
                        <p className={styles.footer_statisticPart_item_mainText}>
                            7+
                        </p>
                        <hr className={styles.footer_statisticPart_item_line}/>
                        <span className={styles.footer_statisticPart_item_subText}>
                            Лет работы
                        </span>
                    </li>
                    <li className={styles.footer_statisticPart_item}>
                        <p className={styles.footer_statisticPart_item_mainText}>
                            12.000+
                        </p>
                        <hr className={styles.footer_statisticPart_item_line}/>
                        <span className={styles.footer_statisticPart_item_subText}>
                            Продано предметов
                        </span>
                    </li>
                    <li className={styles.footer_statisticPart_item}>
                        <p className={styles.footer_statisticPart_item_mainText}>
                            20к+
                        </p>
                        <hr className={styles.footer_statisticPart_item_line}/>
                        <span className={styles.footer_statisticPart_item_subText}>
                            Счастливых клиентов
                        </span>
                    </li>
                    <li className={styles.footer_statisticPart_item}>
                        <p className={styles.footer_statisticPart_item_mainText}>
                            900+
                        </p>
                        <hr className={styles.footer_statisticPart_item_line}/>
                        <span className={styles.footer_statisticPart_item_subText}>
                            Позитивных отзывов
                        </span>
                    </li>
                    <li className={styles.footer_statisticPart_item}>
                        <p className={styles.footer_statisticPart_item_mainText}>
                            ~5
                        </p>
                        <hr className={styles.footer_statisticPart_item_line}/>
                        <span className={styles.footer_statisticPart_item_subText}>
                            Минут занимает сделка
                        </span>
                    </li>
                </ul>
                <hr className={styles.footer_line}/>
            </div>
            <div className={styles.footer_links}>
                <div>
                    <ul className={styles.footer_links_leftBlock_items}>
                        <li className={`${styles.footer_links_leftBlock_item} ${styles.footer_links_leftBlock_frstItem}`}>
                            <Image src="/logo.svg" width={122} height={18} alt="лого" className={styles.footer_logo}/>
                        </li>
                        <div className={styles.footer_links_leftBlock_navItem}>
                            <li className={`${styles.footer_links_leftBlock_item} ${styles.footer_links_leftBlock_item_active}`}>
                                Главная
                            </li>
                            <li className={styles.footer_links_leftBlock_item}>
                                Отзывы
                            </li>
                            <li className={styles.footer_links_leftBlock_item}>
                                Розыгрыши
                            </li>
                            <li className={styles.footer_links_leftBlock_item}>
                                Помощь
                            </li>
                            <li className={styles.footer_links_leftBlock_item}>
                                Партнерка
                            </li>
                            <li className={styles.footer_links_leftBlock_item}>
                                Контакты
                            </li>
                        </div>
                    </ul>
                </div>
                <div>
                    <ul className={styles.footer_links_rightBlock_items}>
                        <li className={`${styles.footer_links_rightBlock_item} ${styles.footer_links_rightBlock_frstItem}`}>
                            <Image src="/mastercard_icon.svg" width={39} height={24} alt="карта" className={styles.mastercard_icon}/>
                        </li>
                        <li className={styles.footer_links_rightBlock_item}>
                            <Image src="/visa_icon.svg" width={69} height={23} alt="карта" className={styles.visa_icon}/>
                        </li>
                        <li className={styles.footer_links_rightBlock_item}>
                            <Image src="/bitcoin_icon.svg" width={87} height={24} alt="биток" className={styles.bitcoin_icon}/>
                        </li>
                        <li className={`${styles.footer_links_rightBlock_item} ${styles.footer_links_rightBlock_specialItem}`}>
                            <hr className={styles.footer_links_rightBlock_item_line}/>
                        </li>
                        <li className={`${styles.footer_links_rightBlock_item} ${styles.footer_links_rightBlock_frstItem}`}>
                            <Image src="/steam_footerIcon.svg" width={29} height={28} alt="стим" className={styles.steam_footerIcon}/>
                        </li>
                        <li className={`${styles.footer_links_rightBlock_item} ${styles.footer_links_rightBlock_socialNetworkItem}`}>
                            <Image src="/vk_footerIcon.svg" width={31} height={20} alt="вк" className={styles.vk_footerIcon}/>
                        </li>
                        <li className={`${styles.footer_links_rightBlock_item} ${styles.footer_links_rightBlock_socialNetworkItem}`}>
                            <Image src="/tg_footerIcon.svg" width={25} height={24} alt="тг" className={styles.tg_footerIcon}/>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        );
}