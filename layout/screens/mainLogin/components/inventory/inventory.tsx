"use client"
import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {useInventoryStore} from "@/storage/client/inventory";
import {ItemInventory} from "@/layout/screens/mainLogin/components/inventory/item";
import {useEffect, useState} from "react";
import {formatCurrency} from "@/utilities/formatCyrrency";
import {FilterRarity, FilterWear, SortingPrice} from "@/layout/screens/mainLogin/components/inventory/filter";
import {SearchItems} from "@/layout/screens/mainLogin/components/inventory/searchItems";
import {Nothing} from "@/layout/screens/mainLogin/components/inventory/nothing";
import {useUserStore} from "@/storage/client/user";
import {NotTradeLink} from "@/layout/screens/mainLogin/components/inventory/notTradeLink";
import {PopUp} from "@/layout/popUp/popUp";
import ChangeTradeUrlPopUp from "@/layout/popUp/changeTradeUrl/changeTradeUrl";
import axios from "axios";
import {toast} from "react-toastify";
import {LoadingInventory} from "@/layout/screens/mainLogin/components/inventory/loadingInventory";
import { usePathname, useRouter } from "next/navigation";
import reloadImg from "@/public/reload.svg"


export const Inventory = () => {
    const inventoryStore = useInventoryStore()
    const userStore = useUserStore();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations()
    const [isSelectedItems, setIsSelectedItems] = useState(false)
    const [isOpenChangeUrl, setOpenChangeUrl] = useState(false)
    const [isLoadingInventory, setIsLoadingInventory] = useState(true)
    const loadItems = async (cache: boolean) => {
        try{
            setIsLoadingInventory(true)
            // inventoryStore.setItems(inventoryStore.items.filter((value) => value.appId !== inventoryStore.activeGame))
            const resp = await axios.get(`${process.env.api}/get_inventory`, {withCredentials: true,
                params: {
                    app_id: inventoryStore.activeGame,
                    nocache: cache
                }})
            if (resp.data.status){
                inventoryStore.setItems(resp.data.items)
                inventoryStore.setViewItems(resp.data.items)
            }
            else {
                console.log("Ошибка загрузки инвентаря")
                toast.error(t("Ошибка загрузки инвентаря"),{
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                })
            }
        }
        catch (e) {
            console.log(`Ошибка загрузки инвентаря ${e}`)
        }
        finally {
            setIsLoadingInventory(false)
        }
    }
    useEffect(() => {loadItems(false)}, [userStore.tradeLink, inventoryStore.activeGame]);
    useEffect(() => {
        const { items, activeGame, filterMarketHashName, filterRarity, filterWear, sortingPrice } = inventoryStore;

        let viewItems;
        if (filterMarketHashName){
            viewItems = items.filter(item => item.appId === activeGame && item.marketHashName == filterMarketHashName);
            console.log("Обновляю инвентарь filterMarketHashName true")
        }
        else {
            viewItems = items.filter(item => item.appId === activeGame);
            console.log("Обновляю инвентарь filterMarketHashName false")
        }
        if (activeGame === 730){
            if (filterWear){
                viewItems = viewItems.filter(item => item.wear === filterWear);
                console.log("Обновляю инвентарь filterWear true")
            }
            if (filterRarity){
                switch (filterRarity) {
                    case "Армейское":
                        viewItems = viewItems.filter(item => item.rarity === 'Industrial' || item.rarity === 'Mil-spec' || item.rarity === 'Distinguished' || item.rarity === 'High Grade');
                        break
                    case "Запрещенное":
                        viewItems = viewItems.filter(item => item.rarity === 'Restricted' || item.rarity === 'Classified' || item.rarity === 'Superior' || item.rarity === 'Exotic');
                        break
                    case "Тайное":
                        viewItems = viewItems.filter(item => item.rarity === `Covert` || item.rarity === 'Master' || item.rarity === 'Extraordinary');
                        break
                    case "Ширпотреб":
                        viewItems = viewItems.filter(item => item.rarity === 'Consumer' || item.rarity === 'Base Grade' || item.rarity === 'Standard' || item.rarity === 'High Grade');
                        break
                    case "Засекреченное":
                        viewItems = viewItems.filter(item => item.rarity === 'Contraband');
                        break
                    case "Редкое":
                        viewItems = viewItems.filter(item => item.rarity === 'Remarkable' || item.rarity === 'Superior' || item.rarity === 'Exotic' || item.rarity === 'Extraordinary');
                        break
                }
            }
        }
        switch (sortingPrice){
            case "От дешевых":
                viewItems = viewItems.sort((a, b) => a.price - b.price);
                break
            case "От дорогих":
                viewItems = viewItems.sort((a, b) => b.price - a.price);
                break
            case "По новизне":
                viewItems = viewItems.sort((a, b) => Number(b.isNew) - Number(a.isNew));
                break
            case "По качеству":
                const valueWear: { [key: string]: number } = {"Factory New": 5,
                    "Minimal Wear": 4,
                    "Field-Tested": 3,
                    "Well-Worn": 2,
                    "Battle-Scarred": 1}
                viewItems = viewItems.sort((a, b) => valueWear[b.wear] - valueWear[a.wear]);
                break
            case "По количеству":
                const countItems: { [key: string]: number } = {}
                viewItems.forEach(item => {
                    if (countItems[item.marketHashName]) countItems[item.marketHashName]++
                    else countItems[item.marketHashName] = 1
                })
                viewItems = viewItems.sort((a, b) => countItems[b.marketHashName] - countItems[a.marketHashName]);
                break
        }

        inventoryStore.setViewItems(viewItems);
    }, [inventoryStore.items, inventoryStore.activeGame, inventoryStore.filterMarketHashName, inventoryStore.sortingPrice, inventoryStore.filterWear, inventoryStore.filterRarity]);

    const setGame = (appId: number) => {
        inventoryStore.setActiveGame(appId)
        const gameNames: { [key: number]: string } = {
            570: "dota2",
            252490: "rust",
            440: "tf2"
        };

        const gameName = gameNames[appId] || "";
        const query = gameName ? `?game=${gameName}` : "";
        router.replace(`${pathname}${query}`);
    }
    return (
        <>
            <div className={styles.inventoryBlock}>
                <div className={styles.inventoryBlock_header}>
                    <div className={styles.inventoryBlock_header_leftPart}>
                        <Image src="/steam_icon.svg" width={24} height={24} alt="иконка стима"
                               className={styles.inventoryBlock_header_steam_icon}/>
                        <h2 className={styles.inventoryBlock_header_leftPart_text}>
                            {t("ваш инвентарь")}
                        </h2>
                    </div>
                    <div className={styles.inventoryBlock_filtersInfo_rightPart_mobile}
                         onClick={() => setOpenChangeUrl(true)}>
                        <Image src="/swap_icon.svg" width={16} height={16} alt="свап" className={styles.swap_icon}/>
                        <span
                            className={styles.inventoryBlock_filtersInfo_rightPart_text}>{t("Изменить Trade-URL")}</span>
                    </div>
                    <div>
                        <div>
                            <ul className={styles.inventoryBlock_header_sub_rightPart_items}>
                                <li className={styles.inventoryBlock_header_sub_rightPart_item}
                                    onClick={() => setGame(730)}>
                                    <Image src={`/cs_icon${inventoryStore.activeGame === 730 ? "" : "_inactive"}.svg`}
                                           width={12} height={16} alt="иконка"
                                           className={styles.cs_icon}/>
                                    <p className={`${styles.inventoryBlock_header_sub_rightPart_item_text} ${inventoryStore.activeGame === 730 && styles.inventoryBlock_header_sub_rightPart_item_text_active}`}>
                                        CS:GO
                                    </p>
                                </li>
                                <hr className={styles.inventoryBlock_header_sub_rightPart_items_line}/>
                                <li className={styles.inventoryBlock_header_sub_rightPart_item}
                                    onClick={() => setGame(570)}>
                                    <Image src={`/dota_icon${inventoryStore.activeGame === 570 ? "" : "_inactive"}.svg`}
                                           width={14} height={14} alt="иконка"
                                           className={styles.dota_icon}/>
                                    <p className={`${styles.inventoryBlock_header_sub_rightPart_item_text} ${inventoryStore.activeGame === 570 && styles.inventoryBlock_header_sub_rightPart_item_text_active}`}>
                                        DOTA 2
                                    </p>
                                </li>
                                <hr className={styles.inventoryBlock_header_sub_rightPart_items_line}/>
                                <li className={styles.inventoryBlock_header_sub_rightPart_item}
                                    onClick={() => setGame(252490)}>
                                    <Image
                                        src={`/rust_icon${inventoryStore.activeGame === 252490 ? "" : "_inactive"}.svg`}
                                        width={14} height={14} alt="иконка"
                                        className={styles.dota_icon}/>
                                    <p className={`${styles.inventoryBlock_header_sub_rightPart_item_text} ${inventoryStore.activeGame === 252490 && styles.inventoryBlock_header_sub_rightPart_item_text_active}`}>
                                        RUST
                                    </p>
                                </li>
                                <hr className={styles.inventoryBlock_header_sub_rightPart_items_line}/>
                                <li className={styles.inventoryBlock_header_sub_rightPart_item}
                                    onClick={() => setGame(440)}>
                                    <Image src={`/tf_icon${inventoryStore.activeGame === 440 ? "" : "_inactive"}.svg`}
                                           width={14} height={14} alt="иконка"
                                           className={styles.dota_icon}/>
                                    <p className={`${styles.inventoryBlock_header_sub_rightPart_item_text} ${inventoryStore.activeGame === 440 && styles.inventoryBlock_header_sub_rightPart_item_text_active}`}>
                                        TF2
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.inventoryBlock_filters}>
                    <div className={styles.inventoryBlock_sub_filters}>
                        <ul className={styles.inventoryBlock_sub_filters_leftPart_items}>
                            <SearchItems/>
                            {inventoryStore.activeGame === 730 && <FilterWear/>}
                            {inventoryStore.activeGame === 730 && <FilterRarity/>}
                            <button className={styles.inventoryBlock_sub_filters_reloadInvetory} onClick={() => loadItems(true)}>
                                <Image className={styles.inventoryBlock_sub_filters_reloadInvetory_icon} src={reloadImg} alt="reload inventory" width={13} height={15}/>
                            </button>
                        </ul>
                        <SortingPrice/>
                    </div>
                </div>
                <div className={styles.inventoryBlock_cards}>
                    {userStore.tradeLink && isLoadingInventory ? <LoadingInventory/> :
                        <ul className={`${userStore.tradeLink ? (inventoryStore.viewItems.length ? styles.inventoryBlock_cardsItems : styles.inventoryBlock_cardsItemsNothing) : styles.inventoryBlock_cardsItemsNothing}`}>
                            {userStore.tradeLink ? (inventoryStore.viewItems.length ? inventoryStore.viewItems.map((item, index) =>
                                <ItemInventory {...item} key={index}/>) : <Nothing/>) : <NotTradeLink/>}
                        </ul>}

                </div>
                <div className={styles.inventoryBlock_filtersInfo}>
                    <div className={styles.inventoryBlock_filtersInfo_leftPart}>
                        <ul className={styles.inventoryBlock_filtersInfo_leftPart_items}>
                            {inventoryStore.viewItems.length ?
                                <li className={`${styles.inventoryBlock_filtersInfo_leftPart_item} ${styles.inventoryBlock_filtersInfo_leftPart_frstItem}`}
                                    onClick={() => {
                                        if (isSelectedItems) {
                                            inventoryStore.unSelectAllItems()
                                        } else {
                                            inventoryStore.selectAllItems()
                                        }
                                        setIsSelectedItems(!isSelectedItems)
                                    }}>
                                    <span className={styles.inventoryBlock_filtersInfo_leftPart_item_subTextHover}>
                                        {t("Выбрать все")}
                                    </span>
                                </li> : null}
                            <li className={`${styles.inventoryBlock_filtersInfo_leftPart_item} ${styles.inventoryBlock_filtersInfo_leftPart_scndItem}`}>
                            <span className={styles.inventoryBlock_filtersInfo_leftPart_item_subText}>
                                {t("Всего:")}
                            </span>
                                <p className={styles.inventoryBlock_filtersInfo_leftPart_item_mainText}>
                                    {formatCurrency(inventoryStore.viewItems.reduce((sum, item) => sum + item.price, 0))}
                                </p>
                            </li>
                            <li className={`${styles.inventoryBlock_filtersInfo_leftPart_item} ${styles.inventoryBlock_filtersInfo_leftPart_thrdItem}`}>
                                <span className={styles.inventoryBlock_filtersInfo_leftPart_item_subText}>
                                    {t("Выбрано:")}
                                </span>
                                <p className={styles.inventoryBlock_filtersInfo_leftPart_item_mainText}>
                                    {inventoryStore.items.filter((value, index, array) => value.isSelected).length}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.inventoryBlock_filtersInfo_rightPart} onClick={() => setOpenChangeUrl(true)}>
                        <Image src="/swap_icon.svg" width={16} height={16} alt="свап" className={styles.swap_icon}/>
                        <span className={styles.inventoryBlock_filtersInfo_rightPart_text}>{t("Изменить Trade-URL")}</span>
                    </div>
                </div>
            </div>
            <PopUp isOpen={isOpenChangeUrl} close={setOpenChangeUrl}>
                <ChangeTradeUrlPopUp close={setOpenChangeUrl} setTradeLink={userStore.setTradeLink}/>
            </PopUp>
        </>
    )
}