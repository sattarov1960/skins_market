import Image from "next/image";
import styles from "@/layout/components/popUp/withdraw/withdraw.module.css";
import moneys from "@/public/moneys.svg"
import money_change from "@/public/money-change.svg"
import cards from "@/public/cards.svg"
import close_popup from "@/public/close_popup.svg";

function Withdraw(){
    return (
        <section className={styles.withdraw_section_wrap}>
            <h1 className={styles.withdraw_h1}>Вывод средств</h1>
            <Image className={styles.withdraw_close_icon} src={close_popup} alt=""/>
            <div className={styles.withdraw_payments_methods_wrap}>
                <div className={styles.withdraw_payments_method}>
                    <Image src="/sbp_paymentMethod_icon.svg" width={60} height={27} alt="sbp"/>
                </div>
                <div className={styles.withdraw_payments_method}>
                    <Image src="/qiwi_paymentMethod_icon.svg" width={71} height={20} alt="qiwi"/>
                </div>
            </div>
            <div className={styles.withdraw_payments_wallet_wrap}>
                <div className={styles.withdraw_payments_wallet_right}>
                    <Image className={styles.withdraw_payments_wallet_right_icon} height={27} width={27} alt="" src="/sbp_paymentMethod_icon.svg"/>
                    <span className={styles.withdraw_payments_wallet_right_text}>СБП</span>
                </div>
                <input placeholder={"Введите ваш кошелек"} className={styles.withdraw_payments_wallet_left_input}/>
            </div>
            <div className={styles.withdraw_payments_wallet_btm_wrap}>
                <div className={styles.withdraw_payments_wallet_btm_item}>
                    <Image width={19} height={19} src={moneys} alt=""/>
                    <span className={styles.withdraw_payments_wallet_btm_text}>Доступно: 21.375₽</span>
                </div>
                <div className={styles.withdraw_payments_wallet_btm_item}>
                    <Image width={19} height={19} src={money_change} alt=""/>
                    <span className={styles.withdraw_payments_wallet_btm_text}>Коммисия 2%</span>
                </div>
            </div>
            <hr className={styles.withdraw_payments_hr}/>
            <div className={styles.withdraw_payments_btm_wrap}>
                <div className={styles.withdraw_payments_btm_item}>
                    <input className={styles.withdraw_payments_btm_left_text} placeholder={"Введите сумму"}/>
                    <span className={styles.withdraw_payments_btm_left_right_text}>ВСЕ</span>
                </div>
                <div className={styles.withdraw_payments_btm_item} style={{cursor: "pointer", justifyContent: "center"}}>
                    <Image className={styles.withdraw_payments_btm_right_icon} src={cards} alt="" width={19} height={19}/>
                    <span className={styles.withdraw_payments_btm_right_text}>Вывести</span>
                </div>
            </div>
        </section>
    )
}

export default Withdraw