import styles from "@/layout/screens/referrals/styles/referrals.module.css";
import Image from "next/image";
import {useReferralsStore} from "@/storage/client/referrals";
import {RefTableItemMobile} from "@/layout/screens/referrals/components/refTableItemMobile";

export const RefTableMobile = () => {
    const refStore = useReferralsStore()
    return (
        <div className={styles.profile_rightPart_mainBlock_mobilePart}>
            <ul>
                {refStore.items.map((item, index) =>
                    <RefTableItemMobile key={index} id={item.id} date={item.date} cost={item.cost} earned={item.earned} steamIcon={item.steamIcon} steamId={item.steamId} steamUserName={item.steamUserName}/>)}
            </ul>
        </div>
    )
}