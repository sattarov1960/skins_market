"use client"
import styles from "@/layout/screens/mainLogout/styles/mainLogout.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {ReviewI} from "@/interface/components/review";
import {useReviewsStore} from "@/storage/client/reviews";
import {formatTimestamp} from "@/utilities/time";
import Link from "next/link";
import 'swiper/css';
import {useKeenSlider} from "keen-slider/react";
import {useEffect} from "react";


export function Reviews() {
    const t = useTranslations()
    return (
        <section id="reviews" className={styles.reviews_wrap}>
            <div className={styles.reviews}>
                <div className={styles.reviews_links}>
                    <button className={`${styles.reviews_link} ${styles.reviews_linkRight}`}>
                        <Image src="/vk_icon.svg" width={24} height={24} alt="вк" className={styles.vk_icon}/>
                        <Link href="https://t.me/good_ak777">
                            <p className={styles.reviews_link_text}>
                                VK.COM
                            </p>
                        </Link>
                    </button>
                </div>
                <SliderReviews/>
            </div>
        </section>
    );
}


export const SliderReviews = () => {
    const t = useTranslations()
    const reviewStore = useReviewsStore()
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        slideChanged() {
            console.log('slide changed');
        },
        slides: {perView: 1.4, spacing: 16},
        breakpoints: {
            '(min-width: 800px)': {
                slides: {perView: 2, spacing: 25},
            },
            '(min-width: 1300px)': {
                slides: {perView: 3, spacing: 25},
            },
            '(min-width: 1640px)': {
                slides: {perView: 4, spacing: 25},
            }
        },
        dragSpeed: 1,
        loop: true,
    });
    useEffect(() => {
        const interval = setInterval(() => {
            if (slider.current) {
                slider.current.next();
            }
        }, 10000);

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
        <>
            <div className={styles.reviews_mainText_and_Switches}>
                <h2 className={styles.reviews_mainText}>
                    {t("Что о нас говорят клиенты?")}
                </h2>
                <div className={styles.reviews_switches}>
                    <div className={styles.reviews_switch} onClick={movePrev}>
                        <Image src="/arrowLeft_forSwitches_icon.svg" width={15} height={14} alt="стрелочка"
                               className={styles.arrows_forSwitches_icon}/>
                    </div>
                    <div className={`${styles.reviews_switch} ${styles.reviews_rightSwitch}`} onClick={moveNext}>
                        <Image src="/arrowRight_forSwitches_icon.svg" width={15} height={14} alt="стрелочка"
                               className={styles.arrows_forSwitches_icon}/>
                    </div>
                </div>
            </div>
            <div className={styles.reviews_items_wrap}>
                <div className={styles.reviews_lastItem}></div>
                <div ref={sliderRef}
                     className={`${styles.reviews_items} keen-slider`}>
                    {reviewStore.reviews.map((value, index) => <Review {...value} key={index}/>)}
                </div>
            </div>
        </>
    )
}

export const Review = ({img, link, time, username, desc}: ReviewI) => {
    const strTime = formatTimestamp(time)
    const t = useTranslations()

    function truncateMessage(message: string, maxLength: number = 100): string {
        if (message.length > maxLength) {
            return message.substring(0, maxLength - 3) + "...";
        } else {
            return message;
        }
    }
    return (
        <div className={`${styles.reviews_item} keen-slider__slide`}>
            <div className={styles.reviews_item_headerBlock}>
                <Image src={img} width={60} height={60} alt=""
                       className={styles.girl_avatar_forReviews}/>
                <div className={styles.reviews_item_sub_headerBlock}>
                    <p className={styles.reviews_item_sub_headerBlock_mainText}>
                        {username}
                    </p>
                    <span className={styles.reviews_item_sub_headerBlock_subText}>
                  {strTime}
                  </span>
                </div>
            </div>
            <div className={styles.reviews_item_mainBlock}>
               <span className={styles.reviews_item_mainBlock_text}>
               {truncateMessage(desc)}
               </span>
            </div>
            <div className={styles.reviews_item_footerBlock_wrap}>
                <Link href={link} className={styles.reviews_item_footerBlock}>
                    <p className={styles.reviews_item_footerBlock_text}>
                        {t("Читать отзыв")}
                    </p>
                    <Image src="/arrowRight_forReviews.svg" width={18} height={16} alt="стрелочка"
                           className={styles.arrowRight_forReviews}/>
                </Link>
            </div>
        </div>
    )
}