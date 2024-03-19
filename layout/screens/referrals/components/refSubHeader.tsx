import styles from "@/layout/screens/referrals/styles/referrals.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {useReferralsStore} from "@/storage/client/referrals";
import {toast} from "react-toastify";
import {formatCurrency} from "@/utilities/formatCyrrency";

export const RefSubHeader = () => {
    const copyValue = (value: string) => {
        try{
            navigator.clipboard.writeText(value)
            toast.success(t("Скопировано"), {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                isLoading: false,
            })
        }
        catch (e) {
            try {
                let textarea = document.createElement("textarea");
                textarea.value = value;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                toast.success(t("Скопировано"), {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    isLoading: false,
                })
                return
            }
            catch (e){
            }
            toast.error(t("Ошибка при копировании"), {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                isLoading: false,
            })
            }
        }
    const refStore = useReferralsStore()
    const t = useTranslations()
    return (
        <div className={styles.profile_rightPart_sub_headerBlock}>
            <div className={styles.profile_rightPart_sub_headerBlock_leftInfo}>
                <div className={styles.profile_rightPart_sub_headerBlock_leftInfo_item}>
                    <div className={styles.profile_rightPart_sub_headerBlock_leftInfo_subItem}>
                        <p className={styles.profile_rightPart_sub_headerBlock_leftInfo_item_text}>
                            {t("Реф код")}
                        </p>
                        <hr className={styles.profile_rightPart_sub_headerBlock_leftInfo_subItem_line}/>
                        <p className={`${styles.profile_rightPart_sub_headerBlock_leftInfo_item_text} ${styles.profile_rightPart_sub_headerBlock_leftInfo_item_textBold}`}>
                            {refStore.referralCode}
                        </p>
                    </div>
                    <Image src="/copy_icon.svg" width={24} height={25} alt="copy"
                           className={styles.copy_icon} onClick={() => copyValue(refStore.inviteLink)}/>
                </div>
                <div
                    className={`${styles.profile_rightPart_sub_headerBlock_leftInfo_item} ${styles.profile_rightPart_sub_headerBlock_leftInfo_scndItem}`}>
                    <p className={styles.profile_rightPart_sub_headerBlock_leftInfo_item_text}>
                        {refStore.inviteLink}
                    </p>
                    <Image src="/copy_icon.svg" width={24} height={25} alt="copy"
                           className={styles.copy_icon} onClick={() => copyValue(refStore.inviteLink)}/>
                </div>
            </div>
            <div className={styles.profile_rightPart_sub_headerBlock_rightInfo}>
                <div className={`${styles.profile_rightPart_sub_headerBlock_rightInfo_item} ${styles.profile_rightPart_sub_headerBlock_rightInfo_frstItem}`}>
                    <Image src="/moneyTick_icon.svg" width={25} height={24} alt="moneyTick"
                           className={styles.profile_rightPart_sub_headerBlock_rightInfo_item_icon}/>
                    <p className={styles.profile_rightPart_sub_headerBlock_rightInfo_item_mainText}>
                        {formatCurrency(refStore.totalEarned)}
                    </p>
                    <p className={styles.profile_rightPart_sub_headerBlock_rightInfo_item_subText}>
                        {t("Заработано")}
                    </p>
                </div>
                <div className={`${styles.profile_rightPart_sub_headerBlock_rightInfo_item} ${styles.profile_rightPart_sub_headerBlock_rightInfo_scndItem}`}>
                    <Image src="/userTick_icon.svg" width={24} height={24} alt="userTick"
                           className={styles.profile_rightPart_sub_headerBlock_rightInfo_item_icon}/>
                    <p className={styles.profile_rightPart_sub_headerBlock_rightInfo_item_mainText}>
                        {refStore.totalInvited}
                    </p>
                    <p className={styles.profile_rightPart_sub_headerBlock_rightInfo_item_subText}>
                        {t("Приглашено")}
                    </p>
                </div>
                <div className={`${styles.profile_rightPart_sub_headerBlock_rightInfo_item} ${styles.profile_rightPart_sub_headerBlock_rightInfo_thrdItem}`}>
                    <Image src="/wallet_icon_red.svg" width={24} height={24} alt="wallet"
                           className={styles.profile_rightPart_sub_headerBlock_rightInfo_item_icon}/>
                    <p className={styles.profile_rightPart_sub_headerBlock_rightInfo_item_mainText}>
                        {formatCurrency(refStore.totalCostSalesReferrals)}
                    </p>
                    <p className={styles.profile_rightPart_sub_headerBlock_rightInfo_item_subText}>
                        {t("Продано рефералами")}
                    </p>
                </div>
            </div>
        </div>
    )
}