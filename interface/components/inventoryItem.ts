import {wearT} from "@/interface/types/wear";
import {rarityT} from "@/interface/types/rarity";

export interface InventoryItemI{
    price: number
    img: string
    marketHashName: string
    gunName: string
    skinName: string
    wear: wearT
    rarity: rarityT
    isStatTrack: boolean
    isSouvenir: boolean
    isTradable: boolean
    appId: number
    errorMsg?: string
    id: string
    isSelected: boolean
    isNew: boolean
}