import {InventoryItemI} from "@/interface/components/inventoryItem";

export interface InventoryI{
    items: InventoryItemI[]
    viewItems: InventoryItemI[]
    activeGame: number
    searchQuery: string
    searchResult: InventoryItemI[]
    filterWear: string
    filterRarity: string
    filterMarketHashName: string
    sortingPrice: string
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
    setSortingPrice: (sortingPrice: string) => void
}