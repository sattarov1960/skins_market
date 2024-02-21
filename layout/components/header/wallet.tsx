"use client"
import {useWalletStore} from "@/storage/client/wallet";
import {useState} from "react";
import styles from "@/layout/components/header/header.module.css";
import Image from "next/image";

export function Wallet() {
    const storeWallet = useWalletStore()
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <section className={styles.box}>
            <div className={styles.nav_currencyBlock} onClick={handleChange}>
                <Image src="/wallet_icon.svg" width={18} height={18} alt="кошелек" className={styles.wallet_icon}/>
                <p className={styles.nav_currencyBlock_text}>
                    {storeWallet.activeName}
                </p>
                <Image src="/arrow_bot.svg" width={11} height={12} alt="стрелочка"/>
            </div>
            {isChecked ? <div className={styles.nav_currencyBlock_addElement}>
                <ul>
                    <li className={`${styles.nav_currencyBlock_addElement_item} ${storeWallet.activeName == "RUB" ? styles.nav_currencyBlock_addElement_item_active : null} ${styles.nav_currencyBlock_addElement_frstItem} `} onClick={() => storeWallet.setActiveName("RUB")}>
                        <p className={styles.nav_currencyBlock_addElement_item_text}>
                            ₽
                        </p>
                        <p className={styles.nav_currencyBlock_addElement_item_text}>
                            RUB
                        </p>
                    </li>
                    {/*<li className={`${styles.nav_currencyBlock_addElement_item} ${storeWallet.activeName == "UAH" ? styles.nav_currencyBlock_addElement_item_active : null}`} onClick={() => storeWallet.setActiveName("UAH")}>*/}
                    {/*    <p className={styles.nav_currencyBlock_addElement_item_text}>*/}
                    {/*        ₴*/}
                    {/*    </p>*/}
                    {/*    <p className={`${styles.nav_currencyBlock_addElement_item_text} ${styles.nav_currencyBlock_addElement_item_scndText}`}>*/}
                    {/*        UAH*/}
                    {/*    </p>*/}
                    {/*</li>*/}
                    {/*<li className={`${styles.nav_currencyBlock_addElement_item} ${storeWallet.activeName == "KZT" ? styles.nav_currencyBlock_addElement_item_active : null}`} onClick={() => storeWallet.setActiveName("KZT")}>*/}
                    {/*    <p className={styles.nav_currencyBlock_addElement_item_text}>*/}
                    {/*        ₸*/}
                    {/*    </p>*/}
                    {/*    <p className={`${styles.nav_currencyBlock_addElement_item_text} ${styles.nav_currencyBlock_addElement_item_scndText}`}>*/}
                    {/*        KZT*/}
                    {/*    </p>*/}
                    {/*</li>*/}
                </ul>
            </div> : null}
        </section>
    )
}
