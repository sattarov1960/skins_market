import styles from "@/layout/screens/mainLogout/styles/mainLogout.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {TimePassedToString} from "@/utilities/time";
import {LastItemProps} from "@/interface/components/lastItem";


function LastItem({ name, price, time, title, img }: LastItemProps){
    const [timePassedString, wordPassed] = TimePassedToString(time)
    return (
        <li className={`${styles.latest_deals_item}`}>
            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            {timePassedString} {wordPassed}
            </span>
                <span className={styles.latest_deals_item_headerBlock_text}>
            {price}₽
            </span>
            </div>
            <Image src={`https://community.akamai.steamstatic.com/economy/image/${img}/360fx360f`} width={127} height={95} alt={name} className={styles.latest_deals_item_image}/>
            <div className={styles.latest_deals_item_footerBlock}>
                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                    {name}
                </p>
                <span className={styles.latest_deals_item_footerBlock_subText}>
            {title}
            </span>
            </div>
        </li>
    )
}


function LastItems(){
    const items = [
        {'name': 'Legion of Anubis', "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924gYKChMj5Nr_Yg2Zu5MRjjeyPrNjziQ3h_0RoMj_xJdSSIFdqZwvW-Fe9yenuhJDqvpTBnXZj6Cgit2GdwUIbM6Z52A", 'price': 1495.58, 'time': 1701361846.175227, 'title': 'Прямо с завода'},
    ]

    return (
        <ul className={styles.latest_deals_items}>
            {items.map((item, index) => (
                <LastItem
                    key={index}
                    name={item.name}
                    price={item.price}
                    time={item.time}
                    title={item.title}
                    img={item.img}
                />
            ))}
        </ul>
    )
}

export function LastSales() {
    const t = useTranslations()
    return (
        <section>
            <div className={styles.latest_deals}>
                <div className={styles.latest_deals_headerPart}>
                    <h2 className={styles.latest_deals_headerPart_text}>
                        {t("Последние сделки")}
                    </h2>
                    <div className={styles.latest_deals_headerPart_rightSwitches}>
                        <div className={styles.latest_deals_headerPart_rightSwitches_switch}>
                            <Image src="/arrowLeft_forSwitches_icon.svg" width={15} height={14} alt="стрелочка" className={styles.arrows_forSwitches_icon}/>
                        </div>
                        <div className={`${styles.latest_deals_headerPart_rightSwitches_switch} ${styles.latest_deals_headerPart_rightSwitches_scndSwitch}`}>
                            <Image src="/arrowRight_forSwitches_icon.svg" width={15} height={14} alt="стрелочка" className={styles.arrows_forSwitches_icon}/>
                        </div>
                    </div>
                </div>
                <LastItems/>
            </div>
        </section>
    );
}