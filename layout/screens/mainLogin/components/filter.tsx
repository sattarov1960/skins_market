"use client"
import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css";
import {useTranslations} from "next-intl";
import Image from "next/image";
import {useState} from "react";
import {useInventoryStore} from "@/storage/client/inventory";

export const FilterRarity = () => {
    const t = useTranslations()
    const inventoryStore = useInventoryStore()
    const [isOpen, setOpen] = useState(false)
    return (
        <li className={styles.inventoryBlock_sub_filters_leftPart_item} onClick={() => setOpen(!isOpen)}>
            <span className={styles.inventoryBlock_sub_filters_leftPart_item_text}>
                {t("Редкость")}
            </span>
            <Image src="/mini_arrow_bot.svg" width={8} height={8} alt="мини-стрелочка"
                   className={`${styles.mini_arrow_bot_filters} ${isOpen && styles.mini_arrow_bot_filters_rotate}`}/>
            {isOpen && <div className={styles.inventoryBlock_sub_filters_leftPart_rarityAddBlock}>
                <ul className={styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockItems}>
                    <li onClick={() => inventoryStore.setFilterRarity(inventoryStore.filterRarity === "Ширпотреб" ? "" : "Ширпотреб")} className={`${styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockItem} ${styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockFrstItem}`}>
                        {t("Ширпотреб")}
                    </li>
                    <li onClick={() => inventoryStore.setFilterRarity(inventoryStore.filterRarity === "Армейское" ? "" : "Армейское")} className={`${styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockItem} ${styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockItemBlue}`}>
                        {t("Армейское")}
                    </li>
                    <li onClick={() => inventoryStore.setFilterRarity(inventoryStore.filterRarity === "Запрещенное" ? "" : "Запрещенное")} className={`${styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockItem} ${styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockItemViolet}`}>
                        {t("Запрещенное")}
                    </li>
                    <li onClick={() => inventoryStore.setFilterRarity(inventoryStore.filterRarity === "Засекреченное" ? "" : "Засекреченное")} className={`${styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockItem} ${styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockItemOrange}`}>
                        {t("Засекреченное")}
                    </li>
                    <li onClick={() => inventoryStore.setFilterRarity(inventoryStore.filterRarity === "Тайное" ? "" : "Тайное")} className={`${styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockItem} ${styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockItemRed}`}>
                        {t("Тайное")}
                    </li>
                    <li onClick={() => inventoryStore.setFilterRarity(inventoryStore.filterRarity === "Редкое" ? "" : "Редкое")} className={`${styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockItem} ${styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockItemPink}`}>
                        {t("Редкое")}
                    </li>
                </ul>
            </div>}
        </li>
    )
}

export const FilterWear = () => {
    const t = useTranslations()
    const inventoryStore = useInventoryStore()
    const [isOpen, setOpen] = useState(false)
    return (
        <li className={styles.inventoryBlock_sub_filters_leftPart_item} onClick={() => setOpen(!isOpen)}>
            <span className={styles.inventoryBlock_sub_filters_leftPart_item_text}>{t("Качество")}</span>
            <Image src="/mini_arrow_bot.svg" width={8} height={8} alt="мини-стрелочка"
                   className={`${styles.mini_arrow_bot_filters} ${isOpen && styles.mini_arrow_bot_filters_rotate}`}/>
            {isOpen && <div className={styles.inventoryBlock_sub_filters_leftPart_rarityAddBlock}>
                <ul className={styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockItems}>
                    <li className={`${styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockItemWear} ${styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockFrstItem} ${inventoryStore.filterWear === "Factory New" && styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockFrstItem_active}`} onClick={() => inventoryStore.setFilterWear(inventoryStore.filterWear === "Factory New" ? "" : "Factory New")}>
                        Factory New
                    </li>
                    <li className={`${styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockItemWear} ${inventoryStore.filterWear === "Minimal Wear" && styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockFrstItem_active}`} onClick={() => inventoryStore.setFilterWear(inventoryStore.filterWear === "Minimal Wear" ? "" : "Minimal Wear")}>
                        Minimal Wear
                    </li>
                    <li className={`${styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockItemWear} ${inventoryStore.filterWear === "Field-Tested" && styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockFrstItem_active}`} onClick={() => inventoryStore.setFilterWear(inventoryStore.filterWear === "Field-Tested" ? "" : "Field-Tested")}>
                        Field-Tested
                    </li>
                    <li className={`${styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockItemWear} ${inventoryStore.filterWear === "Well-Worn" && styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockFrstItem_active}`} onClick={() => inventoryStore.setFilterWear(inventoryStore.filterWear === "Well-Worn" ? "" : "Well-Worn")}>
                        Well-Worn
                    </li>
                    <li className={`${styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockItemWear} ${inventoryStore.filterWear === "Battle-Scarred" && styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockFrstItem_active}`} onClick={() => inventoryStore.setFilterWear(inventoryStore.filterWear === "Battle-Scarred" ? "" : "Battle-Scarred")}>
                        Battle-Scarred
                    </li>
                </ul>
            </div>}
        </li>
    )
}

export const SortingPrice = () => {
    const t = useTranslations()
    const inventoryStore = useInventoryStore()
    const [isOpen, setOpen] = useState(false)
    return (
        <div className={styles.inventoryBlock_sub_filters_rightPart_item} onClick={() => setOpen(!isOpen)}>
            <span className={styles.iinventoryBlock_sub_filters_rightPart_item_text}>
                {t(inventoryStore.sortingPrice)}
            </span>
            <Image src="/mini_arrow_bot.svg" width={8} height={8} alt="мини-стрелочка"
                   className={`${styles.mini_arrow_bot_filters} ${isOpen && styles.mini_arrow_bot_filters_rotate}`}/>
            {isOpen && <div className={styles.inventoryBlock_sub_filters_rightPart_item_addBlock}>
                <ul>
                    <li className={`${styles.inventoryBlock_sub_filters_rightPart_item_addBlock_point} ${styles.inventoryBlock_sub_filters_rightPart_item_addBlock_frstPoint} ${inventoryStore.sortingPrice === "От дешевых" && styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockFrstItem_active}`} onClick={() => inventoryStore.setSortingPrice("От дешевых")}>
                        {t("От дешевых")}
                    </li>
                    <li className={`${styles.inventoryBlock_sub_filters_rightPart_item_addBlock_point} ${inventoryStore.sortingPrice === "От дорогих" && styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockFrstItem_active}`} onClick={() => inventoryStore.setSortingPrice("От дорогих")}>
                        {t("От дорогих")}
                    </li>
                    <li className={`${styles.inventoryBlock_sub_filters_rightPart_item_addBlock_point} ${inventoryStore.sortingPrice === "По новизне" && styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockFrstItem_active}`} onClick={() => inventoryStore.setSortingPrice("По новизне")}>
                        {t("По новизне")}
                    </li>
                    <li className={`${styles.inventoryBlock_sub_filters_rightPart_item_addBlock_point} ${inventoryStore.sortingPrice === "По качеству" && styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockFrstItem_active}`} onClick={() => inventoryStore.setSortingPrice("По качеству")}>
                        {t("По качеству")}
                    </li>
                    <li className={`${styles.inventoryBlock_sub_filters_rightPart_item_addBlock_point} ${inventoryStore.sortingPrice === "По количеству" && styles.inventoryBlock_sub_filters_leftPart_rarityAddBlockFrstItem_active}`} onClick={() => inventoryStore.setSortingPrice("По количеству")}>
                        {t("По количеству")}
                    </li>
                </ul>
            </div>}
        </div>
    )
}