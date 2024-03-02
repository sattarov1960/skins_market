import styles from "@/layout/screens/referrals/styles/referrals.module.css";
import Image from "next/image";
import {RefTableItemI} from "@/interface/components/refTableItem";
import Link from "next/link";
import {formatCurrency} from "@/utilities/formatCyrrency";

export const RefTableItem = ({cost, id, earned, steamId, steamIcon, date, steamUserName}: RefTableItemI) => {
    return (
        <>
            <tr className={styles.profile_rightPart_mainBlock_table_body_item}>
                <td className={`${styles.profile_rightPart_mainBlock_table_body_subItem} ${styles.profile_rightPart_mainBlock_table_body_subFrstItem}`}>
                    <p className={styles.profile_rightPart_mainBlock_table_body_subItem_text}>
                        {id}
                    </p>
                </td>
                <td className={`${styles.profile_rightPart_mainBlock_table_body_subItem} ${styles.profile_rightPart_mainBlock_table_body_subScndItem}`}>
                    <div
                        className={styles.profile_rightPart_mainBlock_table_body_subItem_avatarBlock}>
                        <Link href={`https://steamcommunity.com/profiles/${steamId}`}>
                            <Image src={`https://avatars.steamstatic.com/${steamIcon}_full.jpg`} width={40} height={40} alt={steamUserName}/>
                        </Link>
                        <p className={styles.profile_rightPart_mainBlock_table_body_subItem_text}>
                            {steamUserName}
                        </p>
                    </div>
                </td>
                <td className={`${styles.profile_rightPart_mainBlock_table_body_subItem} ${styles.profile_rightPart_mainBlock_table_body_subThrdItem}`}>
                    <div
                        className={styles.profile_rightPart_mainBlock_table_body_subItem_paymentMethodBlock}>
                        <Image src="/stem_icon.svg" width={24} height={24} alt="steam"
                               className={styles.profile_rightPart_mainBlock_table_body_subItem_paymentMethodBlock_icon}/>
                        <p className={styles.profile_rightPart_mainBlock_table_body_subItem_paymentMethodBlock_text}>
                            {steamId}
                        </p>
                    </div>
                </td>
                <td className={styles.profile_rightPart_mainBlock_table_body_subItem}>
                    <p className={styles.profile_rightPart_mainBlock_table_body_subItem_date_text}>
                        {date}
                    </p>
                </td>
                <td className={styles.profile_rightPart_mainBlock_table_body_subItem}>
                    <div
                        className={styles.profile_rightPart_mainBlock_table_body_subItem_exchangedBlock}>
                        <p className={styles.profile_rightPart_mainBlock_table_body_subItem_exchangedBlock_text}>
                            {formatCurrency(cost)}
                        </p>
                    </div>
                </td>
                <td className={`${styles.profile_rightPart_mainBlock_table_body_subItem} ${styles.profile_rightPart_mainBlock_table_body_subLastItem}`}>
                    <div
                        className={styles.profile_rightPart_mainBlock_table_body_subItem_earnedBlock}>
                        <p className={styles.profile_rightPart_mainBlock_table_body_subItem_earnedBlock_text}>
                            {formatCurrency(earned)}
                        </p>
                    </div>
                </td>
            </tr>
            <tr className={styles.profile_rightPart_mainBlock_table_body_stubItem}>
                <td>
                </td>
            </tr>
        </>
    )
}