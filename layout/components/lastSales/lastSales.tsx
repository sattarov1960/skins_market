"use client"
import styles from "@/layout/components/lastSales/lastSales.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {TimePassedToString} from "@/utilities/time";
import {LastItemProps} from "@/interface/components/lastItem";
import {useLastSalesStore} from "@/storage/client/lastSales";
import {getRarityBGColor, getRarityColor} from "@/utilities/rerityColor";
import {formatCurrency} from "@/utilities/formatCyrrency";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import {useEffect, useRef, useState} from "react";


function LastItem({ skinName, price, time, title, img, rarity }: LastItemProps){
    const [timePassedString, wordPassed] = TimePassedToString(time)
    const bgColor = getRarityBGColor(rarity)
    const blurColor = getRarityColor(rarity)
    const itemRef = useRef(null);
    const [isLastItem, setIsLastItem] = useState(false);
    return (
        <li ref={itemRef} className={`${styles.latest_deals_item} ${isLastItem && styles.latest_deals_lastDarkItem}`}
            style={{background: bgColor}}>
            <div className={styles.latest_deals_item_headerBlock}>
                <span className={styles.latest_deals_item_headerBlock_text}>{timePassedString} {wordPassed}</span>
                <span className={styles.latest_deals_item_headerBlock_text}>{formatCurrency(price)}</span>
            </div>
            <div style={{
                backgroundColor: blurColor,
                opacity: 0.2,
                filter: 'blur(12px)',
                width: '41px',
                height: '41px',
                flexShrink: 0,
                borderRadius: "9999px",
                position: "absolute",
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
            </div>
            <Image src={`https://community.akamai.steamstatic.com/economy/image/${img}/360fx360f`} width={127}
                   height={94} alt={skinName} className={styles.latest_deals_item_image}/>
            <div className={styles.latest_deals_item_footerBlock}>
                <p className={styles.latest_deals_item_footerBlock_prgrf}>{skinName}</p>
                <span className={styles.latest_deals_item_footerBlock_subText}>{title}</span>
            </div>
        </li>
    )
}


function LastItems() {
    const lastSalesStore = useLastSalesStore()
    return (
        <ul className={styles.latest_deals_items}>
            <Swiper
                modules={[Autoplay, EffectFade]}
                breakpoints={{
                    600: {
                        slidesPerView: 9,
                        spaceBetween: 16
                    }
                }}
                navigation
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}

            >
                {lastSalesStore.items.map((item, index) => (
                    <SwiperSlide key={index}><LastItem key={index} {...item}/></SwiperSlide>))}
            </Swiper>
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