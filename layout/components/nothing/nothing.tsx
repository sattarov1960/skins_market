import styles from "@/layout/components/nothing/nothing.module.css";
import Image from "next/image";
import nothing from "@/public/thinkingSmile_img.webp";
import Link from "next/link";
import {useTranslations} from "next-intl";

export const Nothing = () => {
    const t = useTranslations()
    return (
        <div className={styles.mainBlockNothing_img_wrap}>
            <Image
                src={nothing}
                alt="Nothing here"/>
            <div>
                <p className={styles.mainBlockNothing}>{t("Кажется тут пока ничего нет")}</p>
                <Link href={`${process.env.current}/`}>
                    <p className={styles.mainBlockNothing}>{t("Пора")} <u className={styles.mainBlockNothingUnderline}>{t("сделать первую продажу")}</u>?</p>
                </Link>
            </div>
        </div>
    )
}