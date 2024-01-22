import styles from "@/layout/screens/sales/styles/sales.module.css"
import Image from "next/image";
import nothing from "@/public/thinkingSmile_img.webp";
import Link from "next/link";

export const Nothing = () => {
    return (
        <div className={styles.profile_rightPart_mainBlockNothing_img_wrap}>
            <Image
                src={nothing}
                alt="Nothing here"/>
            <div>
                <p className={styles.profile_rightPart_mainBlockNothing}>Кажется, тут пока ничего
                    нет.</p>
                <p className={styles.profile_rightPart_mainBlockNothing}>Пора сделать
                    первую <u><Link href={`${process.env.current}/`} style={{color: "#EBEFFD"}}>продажу?</Link></u></p>
            </div>
        </div>
    )
}