"use client"

import styles from "@/layout/screens/payments/styles/payments.module.css"
import Image from "next/image"
import cardIcon from "@/public/card_icon.svg"
import closeCircle from "@/public/closeCircle_icon.svg"
import cardAdd from "@/public/cardAdd_icon.svg"
import {useTranslations} from "next-intl";
import Link from "next/link"
import axios from "axios";
import {toast} from "react-toastify";
import {useEffect} from "react";
import {usePaymentsStore} from "@/storage/client/payments";


interface CardProps {
    pan: string;
    img: string;
}

const Card = ({ pan, img }: CardProps) => {
    const t = useTranslations()
    const paymentStore = usePaymentsStore()

    const deleteCard = async () => {
        const toastId = toast(t("Удаляем карту"), {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            isLoading: true
        });
        try{
            const resp = await axios.post(`${process.env.api}/cards_delete`, {pan: pan}, {withCredentials: true})
            const data = resp.data
            if (data.status){
                toast.update(toastId, {
                    render: t("Карта успешно удалена"),
                    type: toast.TYPE.SUCCESS,
                    isLoading: false,
                    autoClose: 5000
                });
                paymentStore.delCard(pan)
            }
            else{
                toast.update(toastId, {
                    render: t("Ошибка при удалении карты"),
                    type: toast.TYPE.ERROR,
                    isLoading: false,
                    autoClose: 5000
                });
            }
        }
        catch (e) {
            toast.update(toastId, {
                render: t("Ошибка при удалении карты"),
                type: toast.TYPE.ERROR,
                isLoading: false,
                autoClose: 5000
            })
        }
    }
    return (
            <>
            <li className={styles.accordion_cards_item}>
                <div className={styles.accordion_cards_item_leftPart}>
                    <Image
                        src={cardIcon}
                        alt="карта"
                        width={24}
                        height={24}
                        className={styles.card_icon}
                    />
                    <p className={styles.accordion_cards_item_leftPart_text} onClick={() => paymentStore.setActiveCard({pan: pan, img: img})}>{pan}</p>
                    <Image
                        src={img}
                        alt="card provider"
                        width={24}
                        height={24}
                        className={`${styles.paymentSystem_icon} ${styles.paymentSystem_icon_visa}`}
                    />
                </div>
                <Image
                    src={closeCircle}
                    alt="delete card"
                    className={styles.closeCircle_icon}
                    width={24} 
                    height={24}
                    onClick={deleteCard}
                />
            </li>
            <hr className={styles.accordion_cards_items_line}></hr>
            </>
    )
};


export const CardsMenu = () => {
    const t = useTranslations()
    const paymentStore = usePaymentsStore()
    return (
            <div className={styles.accordion_cards_itemsBlock}>
                <ul>
                    {
                        paymentStore.cards.map((card, index) => (
                            <Card key={index} pan={card.pan} img={card.img} />
                        ))
                    }
                    <li className={styles.accordion_cards_item}>
                        <div className={styles.accordion_cards_item_leftPart}>
                            <Image
                                src={cardAdd}
                                alt="Добавить карту"
                                width={24}
                                height={24}
                            />
                            <Link href={`${process.env.api}`}>
                                <p className={styles.accordion_cards_item_leftPart_subText}>{t("Добавить новую карту")}</p>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
    )
}