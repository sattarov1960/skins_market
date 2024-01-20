"use client"
import styles from "@/layout/screens/referrals/styles/referrals.module.css";
import Image from "next/image";
import {RefTableItem} from "@/layout/screens/referrals/components/refTableItem";
import {useReferralsStore} from "@/storage/client/referrals";
import {useTranslations} from "next-intl";

export const RefTable = () => {
    const refStore = useReferralsStore()
    const t = useTranslations()
    return (
        <div className={styles.profile_rightPart_mainBlock}>
            <table className={styles.profile_rightPart_mainBlock_table}>
                <thead>
                    <tr>
                        <th className={`${styles.profile_rightPart_mainBlock_table_header_item} ${styles.profile_rightPart_mainBlock_table_header_frstItem}`}>
                            #
                        </th>
                        <th className={styles.profile_rightPart_mainBlock_table_header_item}>
                            Steam
                        </th>
                        <th className={styles.profile_rightPart_mainBlock_table_header_item}>
                            SteamID
                        </th>
                        <th className={styles.profile_rightPart_mainBlock_table_header_item}>
                            {t("Дата")}
                        </th>
                        <th className={styles.profile_rightPart_mainBlock_table_header_item}>
                            {t("Обменяно")}
                        </th>
                        <th className={styles.profile_rightPart_mainBlock_table_header_item}>
                            {t("Заработано")}
                        </th>
                    </tr>
                </thead>
                <tbody>
                {refStore.items.map((item, index) =>
                <RefTableItem key={index} id={item.id} date={item.date} cost={item.cost} earned={item.earned} steamIcon={item.steamIcon} steamId={item.steamId} steamUserName={item.steamUserName}/>
                )}
                </tbody>
            </table>
            <div className={styles.profile_rightPart_mainBlock_mobilePart}>
                <ul>
                    <li className={styles.profile_rightPart_mainBlock_mobilePart_frstItem}>
                        <div className={styles.profile_rightPart_mainBlock_mobilePart_item_header}>
                            <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                                #1
                            </p>
                            <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                                13.08.2023
                            </p>
                        </div>
                        <div className={styles.profile_rightPart_mainBlock_mobilePart_item_main}>
                            <div
                                className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock}>
                                <Image src="/avatar_icon.webp" width={40} height={40} alt="avatar"
                                       className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock_img}/>
                                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock_text}>
                                    Username
                                </p>
                            </div>
                            <div
                                className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock}>
                                <Image src="/stem_icon.svg" width={24} height={24} alt="steam"
                                       className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock_img}/>
                                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock_text}>
                                    123451231511236
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>
                                    Обменяно
                                </p>
                                <div
                                    className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_exchangedBlock}>
                                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_exchangedBlock_text}>
                                        12.234,00 ₽
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Заработано
                                </p>
                                <div
                                    className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_earnedBlock}>
                                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_earnedBlock_text}>
                                        123,00 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.profile_rightPart_mainBlock_mobilePart_item_header}>
                            <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                                #2
                            </p>
                            <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                                13.08.2023
                            </p>
                        </div>
                        <div className={styles.profile_rightPart_mainBlock_mobilePart_item_main}>
                            <div
                                className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock}>
                                <Image src="/avatar_icon.webp" width={40} height={40} alt="avatar"
                                       className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock_img}/>
                                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock_text}>
                                    Username
                                </p>
                            </div>
                            <div
                                className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock}>
                                <Image src="/stem_icon.svg" width={24} height={24} alt="steam"
                                       className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock_img}/>
                                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock_text}>
                                    123451231511236
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>
                                    Обменяно
                                </p>
                                <div
                                    className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_exchangedBlock}>
                                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_exchangedBlock_text}>
                                        12.234,00 ₽
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Заработано
                                </p>
                                <div
                                    className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_earnedBlock}>
                                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_earnedBlock_text}>
                                        123,00 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.profile_rightPart_mainBlock_mobilePart_thrdItem}>
                        <div className={styles.profile_rightPart_mainBlock_mobilePart_item_header}>
                            <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                                #3
                            </p>
                            <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                                13.08.2023
                            </p>
                        </div>
                        <div className={styles.profile_rightPart_mainBlock_mobilePart_item_main}>
                            <div
                                className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock}>
                                <Image src="/avatar_icon.webp" width={40} height={40} alt="avatar"
                                       className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock_img}/>
                                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock_text}>
                                    Username
                                </p>
                            </div>
                            <div
                                className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock}>
                                <Image src="/stem_icon.svg" width={24} height={24} alt="steam"
                                       className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock_img}/>
                                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock_text}>
                                    123451231511236
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>
                                    Обменяно
                                </p>
                                <div
                                    className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_exchangedBlock}>
                                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_exchangedBlock_text}>
                                        12.234,00 ₽
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Заработано
                                </p>
                                <div
                                    className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_earnedBlock}>
                                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_earnedBlock_text}>
                                        123,00 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.profile_rightPart_mainBlock_mobilePart_item_header}>
                            <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                                #4
                            </p>
                            <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                                13.08.2023
                            </p>
                        </div>
                        <div className={styles.profile_rightPart_mainBlock_mobilePart_item_main}>
                            <div
                                className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock}>
                                <Image src="/avatar_icon.webp" width={40} height={40} alt="avatar"
                                       className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock_img}/>
                                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock_text}>
                                    Username
                                </p>
                            </div>
                            <div
                                className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock}>
                                <Image src="/stem_icon.svg" width={24} height={24} alt="steam"
                                       className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock_img}/>
                                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock_text}>
                                    123451231511236
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>
                                    Обменяно
                                </p>
                                <div
                                    className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_exchangedBlock}>
                                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_exchangedBlock_text}>
                                        12.234,00 ₽
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Заработано
                                </p>
                                <div
                                    className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_earnedBlock}>
                                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_earnedBlock_text}>
                                        123,00 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.profile_rightPart_mainBlock_mobilePart_item_header}>
                            <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                                #5
                            </p>
                            <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                                13.08.2023
                            </p>
                        </div>
                        <div className={styles.profile_rightPart_mainBlock_mobilePart_item_main}>
                            <div
                                className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock}>
                                <Image src="/avatar_icon.webp" width={40} height={40} alt="avatar"
                                       className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock_img}/>
                                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock_text}>
                                    Username
                                </p>
                            </div>
                            <div
                                className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock}>
                                <Image src="/stem_icon.svg" width={24} height={24} alt="steam"
                                       className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock_img}/>
                                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock_text}>
                                    123451231511236
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>
                                    Обменяно
                                </p>
                                <div
                                    className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_exchangedBlock}>
                                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_exchangedBlock_text}>
                                        12.234,00 ₽
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Заработано
                                </p>
                                <div
                                    className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_earnedBlock}>
                                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_earnedBlock_text}>
                                        123,00 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.profile_rightPart_mainBlock_mobilePart_item_header}>
                            <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                                #6
                            </p>
                            <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                                13.08.2023
                            </p>
                        </div>
                        <div className={styles.profile_rightPart_mainBlock_mobilePart_item_main}>
                            <div
                                className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock}>
                                <Image src="/avatar_icon.webp" width={40} height={40} alt="avatar"
                                       className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock_img}/>
                                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock_text}>
                                    Username
                                </p>
                            </div>
                            <div
                                className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock}>
                                <Image src="/stem_icon.svg" width={24} height={24} alt="steam"
                                       className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock_img}/>
                                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock_text}>
                                    123451231511236
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>
                                    Обменяно
                                </p>
                                <div
                                    className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_exchangedBlock}>
                                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_exchangedBlock_text}>
                                        12.234,00 ₽
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Заработано
                                </p>
                                <div
                                    className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_earnedBlock}>
                                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_earnedBlock_text}>
                                        123,00 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.profile_rightPart_mainBlock_mobilePart_item_header}>
                            <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                                #7
                            </p>
                            <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                                13.08.2023
                            </p>
                        </div>
                        <div className={styles.profile_rightPart_mainBlock_mobilePart_item_main}>
                            <div
                                className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock}>
                                <Image src="/avatar_icon.webp" width={40} height={40} alt="avatar"
                                       className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock_img}/>
                                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock_text}>
                                    Username
                                </p>
                            </div>
                            <div
                                className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock}>
                                <Image src="/stem_icon.svg" width={24} height={24} alt="steam"
                                       className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock_img}/>
                                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock_text}>
                                    123451231511236
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>
                                    Обменяно
                                </p>
                                <div
                                    className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_exchangedBlock}>
                                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_exchangedBlock_text}>
                                        12.234,00 ₽
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Заработано
                                </p>
                                <div
                                    className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_earnedBlock}>
                                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_earnedBlock_text}>
                                        123,00 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.profile_rightPart_mainBlock_mobilePart_item_header}>
                            <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                                #8
                            </p>
                            <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                                13.08.2023
                            </p>
                        </div>
                        <div className={styles.profile_rightPart_mainBlock_mobilePart_item_main}>
                            <div
                                className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock}>
                                <Image src="/avatar_icon.webp" width={40} height={40} alt="avatar"
                                       className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock_img}/>
                                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock_text}>
                                    Username
                                </p>
                            </div>
                            <div
                                className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock}>
                                <Image src="/stem_icon.svg" width={24} height={24} alt="steam"
                                       className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock_img}/>
                                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock_text}>
                                    123451231511236
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>
                                    Обменяно
                                </p>
                                <div
                                    className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_exchangedBlock}>
                                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_exchangedBlock_text}>
                                        12.234,00 ₽
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Заработано
                                </p>
                                <div
                                    className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_earnedBlock}>
                                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_earnedBlock_text}>
                                        123,00 ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}