import {InventoryItemI} from "@/interface/components/inventoryItem";
import {priceT} from "@/interface/types/price";

export interface InventoryI{
    items: InventoryItemI[]
    viewItems: InventoryItemI[]
    activeGame: number
    searchQuery: string
    searchResult: InventoryItemI[]
    filterWear: string
    filterRarity: string
    filterMarketHashName: string
    sortingPrice: priceT
    reloadInventory: number
    setItems: (items: InventoryItemI[]) => void,
    setActiveGame: (gameId: number) => void
    setViewItems: (items: InventoryItemI[]) => void
    selectItem: (id: string) => void
    selectAllItems: () => void
    unSelectAllItems: () => void
    setSearchQuery: (searchQuery: string) => void
    setSearchResult: (searchResult: InventoryItemI[]) => void
    setFilterMarketHashName: (filterMarketHashName: string) => void
    setFilterWear: (filterWear: string) => void
    setFilterRarity: (filterRarity: string) => void
    setSortingPrice: (sortingPrice: priceT) => void
    setReloadInventory: (reloadInventory: number) => void
    reset: () => void
}