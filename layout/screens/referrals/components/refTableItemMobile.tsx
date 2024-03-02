import styles from "@/layout/screens/referrals/styles/referrals.module.css";
import Image from "next/image";
import {RefTableItemI} from "@/interface/components/refTableItem";
import {formatCurrency} from "@/utilities/formatCyrrency";
import Link from "next/link";

export const RefTableItemMobile = ({cost, id, earned, steamId, steamIcon, date, steamUserName}: RefTableItemI) => {
    return (
        <li className={styles.profile_rightPart_mainBlock_mobilePart_wrap}>
            <div className={styles.profile_rightPart_mainBlock_mobilePart_item_header}>
                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                    #{id}
                </p>
                <p className={styles.profile_rightPart_mainBlock_mobilePart_item_header_text}>
                    {date}
                </p>
            </div>
            <div className={styles.profile_rightPart_mainBlock_mobilePart_item_main}>
                <div className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock}>
                    <Link href={`https://steamcommunity.com/profiles/${steamId}`}>
                        <Image src={`https://avatars.steamstatic.com/${steamIcon}_full.jpg`} width={40} height={40} alt={steamUserName}  className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock_img}/>
                    </Link>
                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_avatarBlock_text}>
                        {steamUserName}
                    </p>
                </div>
                <div className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock}>
                    <Image src="/stem_icon.svg" width={24} height={24} alt="steam"
                           className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock_img}/>
                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_main_steamIDBlock_text}>
                        {steamId}
                    </p>
                </div>
            </div>
            <div className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_wrap}>
                <div>
                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_text_orange}>
                        Обменяно
                    </p>
                    <div
                        className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_exchangedBlock}>
                        <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_exchangedBlock_text}>
                            {formatCurrency(cost)}
                        </p>
                    </div>
                </div>
                <div>
                    <p className={styles.profile_rightPart_mainBlock_mobilePart_item_text_green}>
                        Заработано
                    </p>
                    <div className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_earnedBlock}>
                        <p className={styles.profile_rightPart_mainBlock_mobilePart_item_footer_sub_earnedBlock_text}>
                            {formatCurrency(earned)}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    )
}