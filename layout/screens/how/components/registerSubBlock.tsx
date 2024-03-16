import styles from "@/layout/screens/how/styles/how.module.css"
import Image from "next/image";
import {useTranslations} from "next-intl";
import {ReactNode} from "react";

interface RegisterSubBlockProps {
    children?: ReactNode;
    numText: string;
    mainText: string;
    subTitle: string;
    subText: string;
    imgSrc: string;
    imgAlt: string;
    imgMobileSrc: string;
    imgMobileAlt: string;
}

export function RegisterSubBlock({children, numText, mainText, subTitle, subText, imgSrc, imgAlt, imgMobileSrc, imgMobileAlt}: RegisterSubBlockProps) {
    const t = useTranslations()
    return (
        <div className={styles.how_register_subBlock}>
            <div className={styles.how_register_subBlock_numBlock}>
                <span className={styles.how_register_subBlock_numBlock_text}>
                    {numText}
                </span>
            </div>
            <h2 className={styles.how_register_subBlock_mainText}>
                {mainText}
            </h2>
            <p className={styles.how_register_subBlock_subTitle}>
                {subTitle}
            </p>
            <span className={styles.how_register_subBlock_subText}>
                {subText}
            </span>
            <Image src={imgSrc} width={1233} height={637} alt={imgAlt} className={styles.howTo_image} quality={100}/>
            <Image src={imgMobileSrc} width={335} height={173} alt={imgMobileAlt} className={styles.howTo_image_mobile} quality={100}/>
            <span className={`${styles.how_register_subBlock_subText} ${styles.how_register_subBlock_scndSubText}`}>
                {children}
            </span>
        </div>
    )
}