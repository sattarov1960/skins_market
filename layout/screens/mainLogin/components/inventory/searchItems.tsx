"use client"
import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css";
import {useTranslations} from "next-intl";
import Image from "next/image";
import {InventoryItemI} from "@/interface/components/inventoryItem";
import {useInventoryStore} from "@/storage/client/inventory";
import {formatCurrency} from "@/utilities/formatCyrrency";
import {getRarityBlurImage} from "@/utilities/rerityColor";
import {useEffect, useRef, useState} from "react";
import {KMPSearch} from "@/utilities/kmpSearch";
import {number} from "prop-types";

export const SearchItems = () => {
    const inventoryStore = useInventoryStore()
    const [isOpen, setIsOpen] = useState(false)
    const node = useRef();
    const handleClickOutside = (e: { target: any; }) => {
        // @ts-ignore
        if (node.current.contains(e.target)) {
            // клик внутри элемента
            return;
        }
        // клик вне элемента, вызов функции
        setIsOpen(false);
    };
    useEffect(() => {
        const gameItems = inventoryStore.items.filter(item => item.appId === inventoryStore.activeGame);
        const sortedItems = gameItems.sort((a, b) => {
            const indexA = a.marketHashName.toLowerCase().indexOf(inventoryStore.searchQuery.toLowerCase());
            const indexB = b.marketHashName.toLowerCase().indexOf(inventoryStore.searchQuery.toLowerCase());

            return (indexA === -1 ? Infinity : indexA) - (indexB === -1 ? Infinity : indexB);
        });

        const uniqueItems = sortedItems.filter((item, index, self) =>
                index === self.findIndex((t) => (
                    t.marketHashName === item.marketHashName
                ))
        );

        inventoryStore.setSearchResult(uniqueItems);
    }, [inventoryStore.searchQuery]);
    useEffect(() => {
        // при монтировании компонента добавляем обработчик событий
        document.addEventListener("mousedown", handleClickOutside);
        // при размонтировании компонента удаляем обработчик событий
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const changeSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        inventoryStore.setSearchQuery(e.target.value)
        setIsOpen(true)
        if (e.target.value === ""){
            inventoryStore.setFilterMarketHashName("")
        }
    }
    return (
        // @ts-ignore
        <li ref={node} className={`${styles.inventoryBlock_sub_filters_leftPart_item} ${styles.inventoryBlock_sub_filters_leftPart_frstItem}`}>
            <Image src="/search_icon.svg" width={18} height={19} alt="лупа"
                   className={styles.search_icon}/>
            <input className={styles.inventoryBlock_sub_filters_leftPart_item_input}
                   placeholder="Название скина" type="text" value={inventoryStore.searchQuery}
                   onChange={(e) => changeSearchQuery(e)} onFocus={() => inventoryStore.searchResult.length ? setIsOpen(true) : null}/>
            {isOpen &&
            <div className={styles.inventoryBlock_sub_filters_leftPart_item_addAccordion}>
                <ul>
                    {/* @ts-ignore */}
                    {inventoryStore.searchResult.map((value, index) => <SearchItem {...value} key={index} index={index} onClick={() => setIsOpen(false)}/>)}
                </ul>
            </div>}
        </li>
    )
}

export const SearchItem = ({
                               price,
                               gunName,
                               skinName,
                               wear,
                               marketHashName,
                               isStatTrack,
                               isSouvenir,
                               rarity,
                               img,
                               isTradable,
                               errorMsg,
                               isSelected,
                               id,
                               appId,
                               index,
                               onClick
                           }: InventoryItemI & {index: number, onClick: () => void}) => {
    const t = useTranslations()
    const inventoryStore = useInventoryStore()
    const isLastItem = index === inventoryStore.searchResult.length - 1
    const blurImage = getRarityBlurImage(rarity)
    return (
        <>
            <li className={`${styles.inventoryBlock_sub_filters_leftPart_item_addAccordion_point} ${styles.inventoryBlock_sub_filters_leftPart_item_addAccordion_scndPoint}`} onClick={() => {inventoryStore.setFilterMarketHashName(marketHashName); onClick(); inventoryStore.setSearchQuery(marketHashName)}}>
                <div className={styles.inventoryBlock_sub_filters_leftPart_item_addAccordion_point_blockForImg}>
                    <Image className={styles.inventoryBlock_sub_filters_leftPart_item_addAccordion_point_mainImg}
                           src={`https://community.steamstatic.com/economy/image/${img}/360fx360f`} width={90}
                           height={67} alt="gun"/>
                    <Image
                        className={styles.inventoryBlock_sub_filters_leftPart_item_addAccordion_point_blockForImg_blur}
                        src={blurImage} alt="блюр" width={92} height={92}/>
                </div>
                <div className={styles.inventoryBlock_sub_filters_leftPart_item_addAccordion_point_subBlock}>
                    <div
                        className={styles.inventoryBlock_sub_filters_leftPart_item_addAccordion_point_subBlock_headerPart}>
                        <p className={styles.inventoryBlock_sub_filters_leftPart_item_addAccordion_point_subBlock_headerPart_modelText}>
                            {gunName.slice(0, 6)}
                        </p>
                        <p className={styles.inventoryBlock_sub_filters_leftPart_item_addAccordion_point_subBlock_headerPart_priceText}>
                            {formatCurrency(price)}
                        </p>
                    </div>
                    <div className={styles.inventoryBlock_sub_filters_leftPart_item_addAccordion_point_subBlock_mainPart}>
                        <p className={styles.inventoryBlock_sub_filters_leftPart_item_addAccordion_point_subBlock_mainPart_text}>{skinName}</p>
                        <span
                            className={styles.inventoryBlock_sub_filters_leftPart_item_addAccordion_point_subBlock_mainPart_subText}>{t(wear)}</span>
                    </div>
                </div>
            </li>
            {!isLastItem && <hr className={styles.inventoryBlock_sub_filters_leftPart_item_addAccordion_line}/>}
        </>
    )
}