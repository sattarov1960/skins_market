"use client"
import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css";
import Image from "next/image";
import {InventoryItemI} from "@/interface/components/inventoryItem";
import {formatCurrency} from "@/utilities/formatCyrrency";
import {useTranslations} from "next-intl";
import {getRarityBGColor, getRarityBlurImage, getRarityColor} from "@/utilities/rerityColor";
import {useInventoryStore} from "@/storage/client/inventory";
import lock from "@/public/lock.svg"

export const ItemInventory = ({
                                  price,
                                  skinName,
                                  wear,
                                  isStatTrack,
                                  isSouvenir,
                                  rarity,
                                  img,
                                  isSelected,
                                  id,
                                  msgAvailable,
                                  available,
                                  isTradable
                              }: InventoryItemI) => {
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
        } else if (isSouvenir) {
            return "SV"
        }
        return ""
    }
    let marginTop = skinName.length >= 15 ? "0px" : "10px"
    if (skinName.includes("Case")) {
        if (skinName.length >= 15) {
            marginTop = "15px"
        } else {
            marginTop = "25px"
        }
    }
    return (
        <li className={`${styles.inventoryBlock_cardsItem} ${isSelected && styles.inventoryBlock_cardsItemActive}`}
            style={{background: bgColor}} onClick={() => (available && isTradable) && inventoryStore.selectItem(id)}>
            <div className={styles.inventoryBlock_cardsItem_headerPart}>
                <p className={styles.inventoryBlock_cardsItem_headerPart_text}>{formatCurrency(price)}</p>
                <p className={styles.inventoryBlock_cardsItem_headerPart_text}>{addInfoItem()}</p>
            </div>
            <Image src={`https://community.steamstatic.com/economy/image/${img}/360fx360f`} width={360}
                   height={360} alt="gun" className={styles.inventoryBlock_cardsItem_img} quality={100}/>
            <Image src={blurImage} width={92} height={92} alt="блюр" className={styles.blur_violet}/>
            <div className={styles.inventoryBlock_cardsItem_mainPart}>
                <div style={{marginTop: marginTop}}></div>
                {/*{showGunName && <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>{gunName}</p>}*/}
                {showSkinName && <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>{skinName}</p>}
                {wear !== "Unknown" && <span className={styles.inventoryBlock_cardsItem_mainPart_subText}
                                             style={{fontSize: t(wear).length === 18 ? "10px" : "11px"}}>{t(wear)}</span>}
            </div>
            {!available && <div className={styles.inventoryBlock_card_lock_wrap}>
                <Image src={lock} alt={"lock"} height={18} width={24} className={styles.inventoryBlock_card_lock_icon}/>
                <p className={styles.inventoryBlock_card_lock_header_text}>{t("Мы не можем купить этот скин")}</p>
                {/* @ts-ignore */}
                <p className={styles.inventoryBlock_card_lock_desc_text}>{t(msgAvailable)}</p>
            </div>}
        </li>
    )
}
