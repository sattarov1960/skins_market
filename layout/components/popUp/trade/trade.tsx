"use client"
import Image from "next/image";
import swap_active from "@/public/swap_active.svg";
import accept_steam from "@/public/accept_steam.svg";
import accept_web from "@/public/accept_web.svg";
import styles from "./trade.module.css"
import Link from "next/link";
import {useTranslations} from "next-intl";

function Trade(){
    const gunImage = "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRcQljHQva9hZ-BARJnLANoor-mIwlvh_j3eTJO45LnwIHaz_aiauKJxTICv8Yn3u2WoN6ljVDn-kFoMWD3I4aTIA48YwnQ5BHglqNsNZim"
    const userImage = "f2ae4544e940ea8943d088507c57db5868461855_full"
    const botImage = "fa31773ad3befce64be98fc74a8371ffa53069ec_full"
    const t = useTranslations()
    return (
        <section className={styles.trade_wrap}>
            <h1 className={styles.trade_h1}>{t("Обмен")} #753413</h1>
            <section className={styles.trade_parts_wrap}>
                <div className={styles.trade_part_wrap}>
                    <div className={styles.trade_part_top_wrap}>
                        <Image width={48} height={48} className={styles.trade_img_small}
                               src={`https://avatars.steamstatic.com/${userImage}.jpg`} alt=""/>
                        <span className={styles.trade_part_sent}>{t("Вы отдаете:")}</span>
                    </div>
                    <div className={styles.trade_part_items_scroll_wrap}>
                        <div className={styles.trade_part_items_wrap}>
                            <div className={styles.trade_part_item}>
                                <Image width={65} height={50} className={styles.trade_part_item_img}
                                       src={`https://community.steamstatic.com/economy/image/${gunImage}/65fx50f`}
                                       alt=""/>
                            </div>
                            <div className={styles.trade_part_item}>
                                <Image width={65} height={50} className={styles.trade_part_item_img}
                                       src={`https://community.steamstatic.com/economy/image/${gunImage}/65fx50f`}
                                       alt=""/>
                            </div>
                            <div className={styles.trade_part_item}>
                                <Image width={65} height={50} className={styles.trade_part_item_img}
                                       src={`https://community.steamstatic.com/economy/image/${gunImage}/65fx50f`}
                                       alt=""/>
                            </div>
                            <div className={styles.trade_part_item}>
                                <Image width={65} height={50} className={styles.trade_part_item_img}
                                       src={`https://community.steamstatic.com/economy/image/${gunImage}/65fx50f`}
                                       alt=""/>
                            </div>
                            <div className={styles.trade_part_item}>
                                <Image width={65} height={50} className={styles.trade_part_item_img}
                                       src={`https://community.steamstatic.com/economy/image/${gunImage}/65fx50f`}
                                       alt=""/>
                            </div>
                            <div className={styles.trade_part_item}>
                                <Image width={65} height={50} className={styles.trade_part_item_img}
                                       src={`https://community.steamstatic.com/economy/image/${gunImage}/65fx50f`}
                                       alt=""/>
                            </div>
                            <div className={styles.trade_part_item}>
                                <Image width={65} height={50} className={styles.trade_part_item_img}
                                       src={`https://community.steamstatic.com/economy/image/${gunImage}/65fx50f`}
                                       alt=""/>
                            </div>
                            <div className={styles.trade_part_item}>
                                <Image width={65} height={50} className={styles.trade_part_item_img}
                                       src={`https://community.steamstatic.com/economy/image/${gunImage}/65fx50f`}
                                       alt=""/>
                            </div>
                            <div className={styles.trade_part_item}>
                                <Image width={65} height={50} className={styles.trade_part_item_img}
                                       src={`https://community.steamstatic.com/economy/image/${gunImage}/65fx50f`}
                                       alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className={styles.trade_part_hr_mobile}/>
                <div className={styles.trade_part_wrap}>
                    <div className={styles.trade_part_top_wrap}>
                        <Image width={48} height={48} className={styles.trade_img_small}
                               src={`https://avatars.steamstatic.com/${botImage}.jpg`} alt=""/>
                        <span className={styles.trade_part_sent}>{t("Предметы")} Bot #2225:</span>
                    </div>
                    <div className={styles.trade_part_sent_p_wrap}>
                        <p className={styles.trade_part_sent_p}>
                            {t("Вы не получаете предметы")}<br/>{t("в этом обмене")}
                        </p>
                    </div>
                    <div className={`${styles.trade_part_state_wrap} ${styles.trade_part_state_wrap_green}`}>
                        <span className={`${styles.trade_part_state_span} ${styles.trade_part_state_span_green}`}>State 1: {t("Создаем трейд")}</span>
                        <Image width={20} height={20} className={styles.trade_part_state_icon} src={swap_active}
                               alt=""/>
                    </div>
                </div>
            </section>
            <hr className={styles.trade_part_hr_desktop}/>
            <div className={styles.trade_part_footer_wrap}>
                <div className={styles.trade_part_footer_left_wrap}>
                    <Image width={56} height={56} className={styles.trade_img_big}
                           src={`https://avatars.steamstatic.com/${botImage}.jpg`} alt=""/>
                    <div className={styles.trade_part_footer_btn_left_wrap}>
                        <span className={styles.trade_part_footer_bot_span}>Бот Jade #2225</span>
                        <span className={styles.trade_part_footer_bot_span_gray}>{t("Регистрация: ")}22.12.2022</span>
                    </div>
                </div>
                <div className={styles.trade_part_footer_right}>
                    <Link href={"/"} className={styles.trade_part_footer_right_item}>
                        <Image width={24} height={24} className={styles.trade_part_footer_right_img}
                               src={accept_steam} alt="Принять в steam"/>
                        <span className={styles.trade_part_footer_right_span}>{t("Принять в браузере")}</span>
                    </Link>
                    <Link href={"/"} className={styles.trade_part_footer_right_item}>
                        <Image width={24} height={24} className={styles.trade_part_footer_right_img}
                               src={accept_web} alt="Принять в браузере"/>
                        <span className={styles.trade_part_footer_right_span}>{t("Принять в Steam")}</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Trade;