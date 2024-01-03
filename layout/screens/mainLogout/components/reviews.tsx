import styles from "@/layout/screens/mainLogout/styles/mainLogout.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";


export function Reviews() {
    const t = useTranslations()
    return (
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
                        {t("Что о нас говорят клиенты?")}
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
            сразу. Рекомендую.{t("")}
            </span>
                        </div>
                        <div className={styles.reviews_item_footerBlock}>
                            <p className={styles.reviews_item_footerBlock_text}>
                                Читать отзыв{t("")}
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
               сразу. Рекомендую.{t("")}
               </span>
                        </div>
                        <div className={styles.reviews_item_footerBlock}>
                            <p className={styles.reviews_item_footerBlock_text}>
                                Читать отзыв{t("")}
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
               сразу. Рекомендую.{t("")}
               </span>
                        </div>
                        <div className={styles.reviews_item_footerBlock}>
                            <p className={styles.reviews_item_footerBlock_text}>
                                Читать отзыв{t("")}
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
               сразу. Рекомендую.{t("")}
               </span>
                        </div>
                        <div className={styles.reviews_item_footerBlock}>
                            <p className={styles.reviews_item_footerBlock_text}>
                                Читать отзыв{t("")}
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
            сразу. Рекомендую.{t("")}
            </span>
                        </div>
                        <div className={styles.reviews_item_footerBlock}>
                            <p className={styles.reviews_item_footerBlock_text}>
                                Читать отзыв{t("")}
                            </p>
                            <Image src="/arrowRight_forReviews.svg" width={18} height={16} alt="стрелочка" className={styles.arrowRight_forReviews}/>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}