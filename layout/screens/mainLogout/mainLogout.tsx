import styles from "@/layout/screens/mainLogout/styles/mainLogout.module.css"
import Image from "next/image";

export function MainLogout() {
    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <div className={styles.main_part}>
                    <div className={styles.average_sell}>
                        <Image src="/walletCheck_icon.svg" width={24} height={24} alt="кошелек" className={styles.walletCheck_icon}/>
                        <p className={styles.average_sell_text}>
                            3795 ₽ - средняя продажа
                        </p>
                    </div>
                    <div className={styles.main_part_textBlock}>
                        <h1 className={styles.main_part_text}>
                            <div className={styles.main_part_text_generalBlock}>
                                Продавай
                                <Image src="/x_icon.svg" width={66} height={67} alt="икс" className={styles.x_icon}/>
                                &amp;nbspCкины CS:GO
                            </div>
                            по приятной стоимости
                            <Image src="/line_mainPart.svg" width={361} height={13} alt="линия" className={styles.line_mainPart}/>
                        </h1>
                        <span className={styles.main_part_subText}>
            Продавай игровые скины проще и быстрее. Безопасные
            платежи. Без скрытых комиссий или налогов.
            </span>
                    </div>
                    <div className={styles.mainPart_startNowBlock}>
                        <button className={styles.mainPart_startNowBlock_button}>
                            Начать сейчас
                        </button>
                        <div className={styles.mainPart_sub_startNowBlock}>
                            <Image src="/star_icon.svg" width={24} height={24} alt="звезда" className={styles.star_icon}/>
                            <span className={styles.mainPart_sub_startNowBlock_text}>
               Читать отзывы
               </span>
                        </div>
                    </div>
                </div>
                <Image src="/ak_mobile.webp" width={375} height={722} alt="ак"/>
                <Image src="/ak.webp" width={1905} height={1358} alt="ак" className={styles.ak_image}/>
                <Image src="/smoke_mainPart.webp" width={318} height={627} alt="дым" className={styles.smoke_mainPart}/>
            </section>
            <section>
                <div className={styles.statistic_part}>
                    <ul className={styles.statistic_part_items}>
                        <li className={styles.statistic_part_item}>
                            <div className={styles.statistic_part_item_headerBlock}>
                                <Image src="/clock_icon.svg" width={34} height={34} alt="часы" className={styles.statistic_part_item_icon}/>
                                <p className={styles.statistic_part_item_headerBlock_text}>
                                    5-10 минут
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
            <span className={styles.detail_information_mainPart_specialText}>
            CS:GO
            </span>
            ,
            <span className={styles.detail_information_mainPart_specialText}>
            Dota2
            </span>
            ,
            <span className={styles.detail_information_mainPart_specialText}>
            RUST
            </span>
            и
            <span className={styles.detail_information_mainPart_specialText}>
            TF2
            </span>
            .
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
            <section>
                <div className={styles.reviews}>
                    <div className={styles.reviews_links}>
                        <button className={styles.reviews_link}>
                            <Image src="/vk_icon.svg" width={24} height={24} alt="вк" className={styles.vk_icon}/>
                            <p className={styles.reviews_link_text}>
                                trustpilot
                            </p>
                        </button>
                        <button className={`${styles.reviews_link} ${styles.reviews_linkRight}`}>
                            <Image src="/vk_icon.svg" width={24} height={24} alt="вк" className={styles.vk_icon}/>
                            <p className={styles.reviews_link_text}>
                                VK.COM
                            </p>
                        </button>
                    </div>
                    <div className={styles.reviews_mainText_and_Switches}>
                        <h2 className={styles.reviews_mainText}>
                            Что о нас говорят клиенты?
                        </h2>
                        <div className={styles.reviews_switches}>
                            <div className={styles.reviews_switch}>
                                <Image src="/arrowLeft_forSwitches_icon.svg" width={15} height={14} alt="стрелочка" className={styles.arrows_forSwitches_icon}/>
                            </div>
                            <div className={`${styles.reviews_switch} ${styles.reviews_rightSwitch}`}>
                                <Image src="/arrowRight_forSwitches_icon.svg" width={15} height={14} alt="стрелочка" className={styles.arrows_forSwitches_icon}/>
                            </div>
                        </div>
                    </div>
                    <ul className={styles.reviews_items}>
                        <li className={`${styles.reviews_item} ${styles.reviews_frstItem}`}>
                            <div className={styles.reviews_item_headerBlock}>
                                <Image src="/girl_avatar_forReviews.webp" width={60} height={60} alt="" className={styles.girl_avatar_forReviews}/>
                                <div className={styles.reviews_item_sub_headerBlock}>
                                    <p className={styles.reviews_item_sub_headerBlock_mainText}>
                                        UsernameTest
                                    </p>
                                    <span className={styles.reviews_item_sub_headerBlock_subText}>
               24.11.2023
               </span>
                                </div>
                            </div>
                            <div className={styles.reviews_item_mainBlock}>
            <span className={styles.reviews_item_mainBlock_text}>
            Отличный сайт! Продал АК-47 Азимов по
            рыночной цене, деньги пришли практически
            сразу. Рекомендую.
            </span>
                            </div>
                            <div className={styles.reviews_item_footerBlock}>
                                <p className={styles.reviews_item_footerBlock_text}>
                                    Читать отзыв
                                </p>
                                <Image src="/arrowRight_forReviews.svg" width={18} height={16} alt="стрелочка" className={styles.arrowRight_forReviews}/>
                            </div>
                        </li>
                        <li className={styles.reviews_item}>
                            <div className={styles.reviews_item_headerBlock}>
                                <Image src="/girl_avatar_forReviews.webp" width={60} height={60} alt="" className={styles.girl_avatar_forReviews}/>
                                <div className={styles.reviews_item_sub_headerBlock}>
                                    <p className={styles.reviews_item_sub_headerBlock_mainText}>
                                        UsernameTest
                                    </p>
                                    <span className={styles.reviews_item_sub_headerBlock_subText}>
                  24.11.2023
                  </span>
                                </div>
                            </div>
                            <div className={styles.reviews_item_mainBlock}>
               <span className={styles.reviews_item_mainBlock_text}>
               Отличный сайт! Продал АК-47 Азимов по
               рыночной цене, деньги пришли практически
               сразу. Рекомендую.
               </span>
                            </div>
                            <div className={styles.reviews_item_footerBlock}>
                                <p className={styles.reviews_item_footerBlock_text}>
                                    Читать отзыв
                                </p>
                                <Image src="/arrowRight_forReviews.svg" width={18} height={16} alt="стрелочка" className={styles.arrowRight_forReviews}/>
                            </div>
                        </li>
                        <li className={styles.reviews_item}>
                            <div className={styles.reviews_item_headerBlock}>
                                <Image src="/girl_avatar_forReviews.webp" width={60} height={60} alt="" className={styles.girl_avatar_forReviews}/>
                                <div className={styles.reviews_item_sub_headerBlock}>
                                    <p className={styles.reviews_item_sub_headerBlock_mainText}>
                                        UsernameTest
                                    </p>
                                    <span className={styles.reviews_item_sub_headerBlock_subText}>
                  24.11.2023
                  </span>
                                </div>
                            </div>
                            <div className={styles.reviews_item_mainBlock}>
               <span className={styles.reviews_item_mainBlock_text}>
               Отличный сайт! Продал АК-47 Азимов по
               рыночной цене, деньги пришли практически
               сразу. Рекомендую.
               </span>
                            </div>
                            <div className={styles.reviews_item_footerBlock}>
                                <p className={styles.reviews_item_footerBlock_text}>
                                    Читать отзыв
                                </p>
                                <Image src="/arrowRight_forReviews.svg" width={18} height={16} alt="стрелочка" className={styles.arrowRight_forReviews}/>
                            </div>
                        </li>
                        <li className={styles.reviews_item}>
                            <div className={styles.reviews_item_headerBlock}>
                                <Image src="/girl_avatar_forReviews.webp" width={60} height={60} alt="" className={styles.girl_avatar_forReviews} />
                                <div className={styles.reviews_item_sub_headerBlock}>
                                    <p className={styles.reviews_item_sub_headerBlock_mainText}>
                                        UsernameTest
                                    </p>
                                    <span className={styles.reviews_item_sub_headerBlock_subText}>
                  24.11.2023
                  </span>
                                </div>
                            </div>
                            <div className={styles.reviews_item_mainBlock}>
               <span className={styles.reviews_item_mainBlock_text}>
               Отличный сайт! Продал АК-47 Азимов по
               рыночной цене, деньги пришли практически
               сразу. Рекомендую.
               </span>
                            </div>
                            <div className={styles.reviews_item_footerBlock}>
                                <p className={styles.reviews_item_footerBlock_text}>
                                    Читать отзыв
                                </p>
                                <Image src="/arrowRight_forReviews.svg" width={18} height={16} alt="стрелочка" className={styles.arrowRight_forReviews}/>
                            </div>
                        </li>
                        <li className={`${styles.reviews_item} ${styles.reviews_lastItem}`}>
                            <div className={styles.reviews_item_headerBlock}>
                                <Image src="/girl_avatar_forReviews.webp" width={60} height={60} alt="" className={styles.girl_avatar_forReviews}/>
                                <div className={styles.reviews_item_sub_headerBlock}>
                                    <p className={styles.reviews_item_sub_headerBlock_mainText}>
                                        UsernameTest
                                    </p>
                                    <span className={styles.reviews_item_sub_headerBlock_subText}>
               24.11.2023
               </span>
                                </div>
                            </div>
                            <div className={styles.reviews_item_mainBlock}>
            <span className={styles.reviews_item_mainBlock_text}>
            Отличный сайт! Продал АК-47 Азимов по
            рыночной цене, деньги пришли практически
            сразу. Рекомендую.
            </span>
                            </div>
                            <div className={styles.reviews_item_footerBlock}>
                                <p className={styles.reviews_item_footerBlock_text}>
                                    Читать отзыв
                                </p>
                                <Image src="/arrowRight_forReviews.svg" width={18} height={16} alt="стрелочка" className={styles.arrowRight_forReviews}/>
                            </div>
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
                                12.000+ предметов продано
                            </p>
                        </div>
                        <h2 className={styles.faq_headerPart_mainText}>
                            Часто задаваемые вопросы
                        </h2>
                        <span className={styles.faq_headerPart_subText}>
            Остались еще вопросы? Свяжитесь с нашей
            <span className={styles.faq_headerPart_subTextSpecial}>
            поддержкой
            </span>
            , они обязательно помогут!
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
                                            Какой график работы вашего сервиса?
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
                     площадке Steam.
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
                     площадке Steam.
                     </span>
                                    </div>
                                </li>
                                <li className={styles.faq_mainPart_item}>
                                    <input className={styles.faq_mainPart_item_input} id="faq_item_3" name="faq_item_input" type="radio"/>
                                    <label className={styles.faq_mainPart_item_headerPart} form="faq_item_3">
                                        <p className={styles.faq_mainPart_item_headerPart_text}>
                                            По какому курсу осуществляется
                                            выплата в крипте?
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
                        площадке Steam.
                        </span>
                                    </div>
                                </li>
                                <li className={`${styles.faq_mainPart_item} ${styles.faq_mainPart_frthItem}`}>
                                    <input className={styles.faq_mainPart_item_input} id="faq_item_4" name="faq_item_input" type="radio"/>
                                    <label className={styles.faq_mainPart_item_headerPart} form="faq_item_4">
                                        <p className={styles.faq_mainPart_item_headerPart_text}>
                                            Почему я могу Вам доверять?
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
                     площадке Steam.
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
                                            Оверпрайс»?
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
                     площадке Steam.
                     </span>
                                    </div>
                                </li>
                                <li className={`${styles.faq_mainPart_item} ${styles.faq_mainPart_sixthItem}`}>
                                    <input className={styles.faq_mainPart_item_input} id="faq_item_6" name="faq_item_input" type="radio"/>
                                    <label className={styles.faq_mainPart_item_headerPart} form="faq_item_6">
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
                     площадке Steam.
                     </span>
                                    </div>
                                </li>
                                <li className={styles.faq_mainPart_item}>
                                    <input className={styles.faq_mainPart_item_input} id="faq_item_7" name="faq_item_input" type="radio"/>
                                    <label className={styles.faq_mainPart_item_headerPart} form="faq_item_7">
                                        <p className={styles.faq_mainPart_item_headerPart_text}>
                                            По какому курсу осуществляется
                                            выплата в крипте?
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
                        площадке Steam.
                        </span>
                                    </div>
                                </li>
                                <li className={styles.faq_mainPart_item}>
                                    <input className={styles.faq_mainPart_item_input} id="faq_item_8" name="faq_item_input" type="radio"/>
                                    <label className={styles.faq_mainPart_item_headerPart} form="faq_item_8">
                                        <p className={styles.faq_mainPart_item_headerPart_text}>
                                            Прохождение верификации на сервисе
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
                        площадке Steam.
                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.reference}>
                    <div className={styles.reference_headerBlock}>
                        <Image src="/walletCheck_icon.svg" width={24} height={24} alt="кошелек" className={styles.walletCheck_icon}/>
                        <p className={styles.reference_headerBlock_text}>
                            Это выгодно!
                        </p>
                    </div>
                    <div className={styles.reference_mainBlock}>
                        <h2 className={styles.reference_mainBlock_text}>
                            Продавай скины с
                        </h2>
                        <Image src="/logo.svg" width={122} height={18} alt="лого" className={styles.reference_mainBlock_logo}/>
                    </div>
                    <span className={styles.reference_subText}>
         Более 8000 человек уже выбрали нас. 2 года на рынке,
         тысячи отзывов в соц. сетях.
         </span>
                    <button className={styles.reference_btn}>
                        Начать сейчас
                    </button>
                    <div className={styles.reference_footerBlock}>
                        <Image src="/star_icon.svg" width={24} height={24} alt="звезда" className={styles.star_icon}/>
                        <span className={styles.reference_footerBlock_text}>
            Остались вопросы?
            </span>
                    </div>
                    <Image src="/smoke_reference.webp" width={205} height={678} alt="дым" className={styles.smoke_reference}/>
                </div>
            </section>
        </main>


    );
}