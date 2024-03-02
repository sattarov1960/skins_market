"use client"
import styles from "@/layout/components/lastSales/lastSales.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {TimePassedToString} from "@/utilities/time";
import {LastItemProps} from "@/interface/components/lastItem";
import {useLastSalesStore} from "@/storage/client/lastSales";
import {getRarityBGColor, getRarityColor} from "@/utilities/rerityColor";
import {formatCurrency} from "@/utilities/formatCyrrency";
import 'swiper/css';
import React, {useEffect, useState} from "react";
import {useKeenSlider} from "keen-slider/react";
import {useUserStore} from "@/storage/client/user";


function LastItem({ skinName, price, time, title, img, rarity }: LastItemProps){
    const [timePassedString, wordPassed] = TimePassedToString(time)
    const bgColor = getRarityBGColor(rarity)
    const blurColor = getRarityColor(rarity)
    const [isLastItem, setIsLastItem] = useState(false);
    return (
        <div
            className={`${styles.latest_deals_item} ${isLastItem && styles.latest_deals_lastDarkItem} keen-slider__slide`}
            style={{background: bgColor}}
        >
            <div className={styles.latest_deals_item_wrap}>
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
                <Image src={`https://community.steamstatic.com/economy/image/${img}/360fx360f`} width={127}
                       height={94} alt={skinName} className={styles.latest_deals_item_image}/>
                <div className={styles.latest_deals_item_footerBlock}>
                    <p className={styles.latest_deals_item_footerBlock_prgrf}>{skinName}</p>
                    <span className={styles.latest_deals_item_footerBlock_subText}>{title}</span>
                </div>
            </div>
        </div>
    )
}

export function LastSales() {
    const t = useTranslations()
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)
    const lastSalesStore = useLastSalesStore()
    const userStore = useUserStore()
    const getBreakpoint = () => {
        if (userStore.auth) {
            return {
                '(min-width: 0x)': {
                    slides: {perView: 1, spacing: 16},
                },
                '(min-width: 280px)': {
                    slides: {perView: 2, spacing: 16},
                },
                '(min-width: 450px)': {
                    slides: {perView: 3, spacing: 16},
                },
                '(min-width: 620px)': {
                    slides: {perView: 4, spacing: 16},
                },
                '(min-width: 790x)': {
                    slides: {perView: 5, spacing: 16},
                },
                '(min-width: 1130px)': {
                    slides: {perView: 6, spacing: 16},
                },
                '(min-width: 1300px)': {
                    slides: {perView: 7, spacing: 16},
                },
                '(min-width: 1470px)': {
                    slides: {perView: 8, spacing: 16},
                },
                '(min-width: 1640px)': {
                    slides: {perView: 9, spacing: 16},
                },
            }
        }
        return {
            '(min-width: 0x)': {
                slides: {perView: 1, spacing: 16},
            },
            '(min-width: 280px)': {
                slides: {perView: 2, spacing: 16},
            },
            '(min-width: 450px)': {
                slides: {perView: 3, spacing: 16},
            },
            '(min-width: 620px)': {
                slides: {perView: 4, spacing: 16},
            },
            '(min-width: 790x)': {
                slides: {perView: 5, spacing: 16},
            },
            '(min-width: 1130px)': {
                slides: {perView: 6, spacing: 16},
            },
            '(min-width: 1300px)': {
                slides: {perView: 7, spacing: 16},
            },
            '(min-width: 1470px)': {
                slides: {perView: 8, spacing: 16},
            },
            '(min-width: 1640px)': {
                slides: {perView: 9, spacing: 16},
            },
        }
    }
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        slideChanged() {
            console.log('slide changed');
        },
        slides: {perView: 1, spacing: 16},
        breakpoints: getBreakpoint(),
        dragSpeed: 1,
        loop: true,
    });
    useEffect(() => {
        const interval = setInterval(() => {
            if (slider.current) {
                slider.current.next();
            }
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    });
    const moveNext = () => {
        if (slider.current) {
            slider.current.next();
        }
    };

    const movePrev = () => {
        if (slider.current) {
            slider.current.prev();
        }
    };
    return (
        <section className={styles.latest_deals_wrap}>
            <div className={styles.latest_deals}>
                <div className={styles.latest_deals_headerPart}>
                    <h2 className={styles.latest_deals_headerPart_text}>
                        {t("Последние сделки")}
                    </h2>
                    <div className={styles.latest_deals_headerPart_rightSwitches}>
                        <button
                            className={`${styles.latest_deals_headerPart_rightSwitches_switch} ${canScrollLeft && styles.latest_deals_headerPart_rightSwitches_scndSwitch_active}`}
                            onClick={movePrev}>
                            <Image src="/arrowLeft_forSwitches_icon.svg" width={15} height={14} alt="стрелочка"
                                   className={styles.arrows_forSwitches_icon}/>
                        </button>
                        <button
                            className={`${styles.latest_deals_headerPart_rightSwitches_switch} ${styles.latest_deals_headerPart_rightSwitches_scndSwitch} ${canScrollRight && styles.latest_deals_headerPart_rightSwitches_scndSwitch_active}`}
                            onClick={moveNext}>
                            <Image src="/arrowRight_forSwitches_icon.svg" width={15} height={14} alt="стрелочка"
                                   className={styles.arrows_forSwitches_icon}/>
                        </button>
                    </div>
                </div>
                <div className={styles.latest_deals_slider_wrap}>
                    <div
                        ref={sliderRef}
                        className={`${styles.latest_deals_items} keen-slider`}
                    >
                        {lastSalesStore.items.map((item, index) => (
                            <LastItem key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}