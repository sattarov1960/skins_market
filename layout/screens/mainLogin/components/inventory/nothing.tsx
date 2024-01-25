import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";

export const Nothing = () => {
    const t = useTranslations()
    return (
        <>
            <div className={styles.inventoryBlock_sub_tradeLink}>
                <Image src="/thinkingSmile_img.webp" className={styles.sadSmile_img} alt="смайлик" width={77}
                       height={77}/>

            </div>
            <p className={styles.inventoryBlock_tradeLink_text}>
                {t("Кажется тут пока ничего нет Может стоит изменить фильтры")}
            </p>
        </>
    )
}