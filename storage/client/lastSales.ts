import { create } from "zustand";
import {LastSalesI} from "@/storage/interface/lastSalesI";


export const useLastSalesStore = create<LastSalesI>((set) => ({
    items: [
        {
            "skinName": "Baroque Purple",
            "rarity": "Industrial",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszedDNH-NOJhJWZh_vxDLbUkmJE5fp9i_vG8MLx2Qbl-xVpYDvzLISde1c_YQ6Dr1m-we7ohpG46MjMn3Y2vnZ04HyOgVXp1mer_etC",
            "price": 467.32,
            "time": 1706178467295,
            "title": "Прямо с завода"
        }
    ],
    setItems: (items) => set({ items: items }),
}));