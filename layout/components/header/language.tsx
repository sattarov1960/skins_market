"use client"
import {useLocale} from "next-intl";
import {useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import styles from "@/layout/components/header/header.module.css";
import Image from "next/image";
import Link from "next/link";

export function Language() {
    let activePath
    let activeName
    const locale = useLocale()
    const [isChecked, setIsChecked] = useState(false);
    const searchParams = useSearchParams()

    const handleChange = () => {
        setIsChecked(!isChecked);
    };
    switch (locale){
        case "ru":
            activeName = "RU"
            activePath = "/ru_icon.svg"
            break
        case "en":
            activeName = "EN"
            activePath = "/en_icon.svg"
            break
        default:
            activeName = "RU"
            activePath = "/ru_icon.svg"
    }
    const getPath = (language: string) => {
        const addSearchParams = searchParams.toString() ? `?${searchParams.toString()}` : ""
        return `${process.env.current}/${language}/${window.location.pathname.split("/").slice(["ru", "en", "ua", "blr"].includes(window.location.pathname.split("/")[1]) ? 2 : 1).join("/")}${addSearchParams}`
    }
    return (
        <section className={styles.box}>
            <div className={styles.nav_languageBlock} onClick={handleChange}>
                <Image src={activePath} width={18} height={19} alt="флаг" className={styles.ru}/>
                <p className={styles.nav_languageBlock_text}>
                    {activeName}
                </p>
                <Image src="/arrow_bot.svg" width={11} height={12} alt="стрелочка"/>
            </div>
            {isChecked ? <div className={styles.nav_languageBlock_addElement}>
                <ul>
                    <li>
                        <Link href={getPath("ru")} className={`${styles.nav_languageBlock_addElement_item} ${activeName === "RU" ? styles.nav_languageBlock_addElement_item_active : null}`}>
                            <Image src="/ru_dark_icon.svg" width={122} height={18} alt="ru" className={styles.nav_languageBlock_addElement_item_flag}/>
                            <p className={styles.nav_languageBlock_addElement_item_subText}>
                                RU
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link href={getPath("en")} className={`${styles.nav_languageBlock_addElement_item} ${activeName === "EN" ? styles.nav_languageBlock_addElement_item_active : null}`}>
                            <Image src="/en_icon.svg" width={122} height={18} className={styles.nav_languageBlock_addElement_item_flag} alt="en" />
                            <p className={styles.nav_languageBlock_addElement_item_text}>
                                EN
                            </p>
                        </Link>
                    </li>
                </ul>
            </div> : null}
        </section>
    );
}
