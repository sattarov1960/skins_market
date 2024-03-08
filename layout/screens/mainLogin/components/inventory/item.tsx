"use client"
import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css";
import Image from "next/image";
import {InventoryItemI} from "@/interface/components/inventoryItem";
import {formatCurrency} from "@/utilities/formatCyrrency";
import {useTranslations} from "next-intl";
import {getRarityBGColor, getRarityBlurImage, getRarityColor} from "@/utilities/rerityColor";
import {useInventoryStore} from "@/storage/client/inventory";

export const ItemInventory = ({price, gunName, skinName, wear, marketHashName, isStatTrack, isSouvenir, rarity, img, isTradable, errorMsg, isSelected, id, appId, isNew}: InventoryItemI) => {
    const t = useTranslations()
    const inventoryStore = useInventoryStore()
    const color = getRarityColor(rarity)
    const bgColor = getRarityBGColor(rarity)
    const blurImage = getRarityBlurImage(rarity)
    const showSkinName = true
    const showGunName = !skinName.includes("Case")
    const addInfoItem = () => {
        if (isStatTrack) {
            return "ST"
        }
        else if (isSouvenir) {
            return "SV"
        }
        return ""
    }
    let marginTop = skinName.length >= 15 ? "0px" : "10px"
    if (skinName.includes("Case")){
        if (skinName.length >= 15){
            marginTop = "15px"
        }
        else{
            marginTop = "25px"
        }
    }
    return (
        <li className={`${styles.inventoryBlock_cardsItem} ${isSelected && styles.inventoryBlock_cardsItemActive}`} style={{background: bgColor}} onClick={() => inventoryStore.selectItem(id)}>
            <div className={styles.inventoryBlock_cardsItem_headerPart}>
                <p className={styles.inventoryBlock_cardsItem_headerPart_text}>{formatCurrency(price)}</p>
                <p className={styles.inventoryBlock_cardsItem_headerPart_text}>{addInfoItem()}</p>
            </div>
            <Image src={`https://community.steamstatic.com/economy/image/${img}/360fx360f`} width={90}
                   height={90} alt="gun" className={styles.inventoryBlock_cardsItem_img}/>
            <Image src={blurImage} width={92} height={92} alt="блюр" className={styles.blur_violet}/>
            <div className={styles.inventoryBlock_cardsItem_mainPart}>
                <div style={{marginTop: marginTop}}></div>
                {/*{showGunName && <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>{gunName}</p>}*/}
                {showSkinName && <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>{skinName}</p>}
                {wear !== "Unknown" && <span className={styles.inventoryBlock_cardsItem_mainPart_subText} style={{fontSize: t(wear).length === 18 ? "10px" : "11px"}}>{t(wear)}</span>}
            </div>
        </li>
    )
}