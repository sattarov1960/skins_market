import { create } from "zustand";
import {InventoryI} from "@/storage/interface/inventory";


export const useInventoryStore = create<InventoryI>((set) => ({
    items: [],
    viewItems: [],
    activeGame: 730,
    searchQuery: "",
    searchResult: [],
    filterMarketHashName: "",
    filterRarity: "",
    filterWear: "",
    sortingPrice: "От дорогих",
    setActiveGame: (gameId) => set({ activeGame: gameId }),
    setItems: (items) => set({ items: items }),
    setViewItems: (items) => set({ viewItems: items }),
    selectItem: (id) => set((state) => {
        const items = state.items.map((item) => {
            if (item.id === id) {
                item.isSelected = !item.isSelected;
            }
            return item;
        });
        return { items };
    }),
    selectAllItems: () => set((state) => {
        const items = state.viewItems.map((item) => {
            if (item.isTradable && item.available){
                item.isSelected = true;
            }
            return item;
        });
        return { viewItems: items };
    }),
    unSelectAllItems: () => set((state) => {
        const items = state.viewItems.map((item) => {
            item.isSelected = false;
            return item;
        });
        return { viewItems: items };
    }),
    setSearchQuery: (searchQuery) => set({ searchQuery: searchQuery }),
    setSearchResult: (searchResult) => set({ searchResult: searchResult }),
    setFilterMarketHashName: (filterMarketHashName) => set({ filterMarketHashName: filterMarketHashName }),
    setFilterRarity: (filterRarity) => set({ filterRarity: filterRarity }),
    setFilterWear: (filterWear) => set({ filterWear: filterWear }),
    setSortingPrice: (sortingPrice) => set({ sortingPrice: sortingPrice }),
}));
