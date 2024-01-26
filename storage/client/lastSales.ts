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
        },
        {
            "skinName": "Bloodsport",
            "rarity": "Covert",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLbUkmJE5fp9i_vG8MKljgDjrkpuZmGiIISRIFU_aQrV81a9kObojMPt6JSYnCRl63Zx5CzZgVXp1oPn8d3r",
            "price": 2016.68,
            "time": 1706178467295,
            "title": "Прямо с завода"
        },
        {
            "skinName": "Chantico's Fire",
            "rarity": "Covert",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITCmX5d_MR6j_v--YXygECLpxIuNDztII-We1I4aAqE_Fi_lerthMXttc7OnXRmvyhw4Xndlx3kiUkfa-ZuguveFwseJK64Qw",
            "price": 3520.47,
            "time": 1706178467295,
            "title": "Прямо с завода"
        },
        {
            "skinName": "Crimson Web",
            "rarity": "Classified",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PvRTipH7s-JkIGZnPLmDLbUkmJE5fp9i_vG8ML22wbj-0tqZG_2INeTdgc-Zl_S-FbqxL-71J60up7IzSY36CkmsXnUgVXp1lzsUQgy",
            "price": 127.5,
            "time": 1706178467295,
            "title": "Прямо с завода"
        },
        {
            "skinName": "Muertos",
            "rarity": "Classified",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09G3moSKm_bLP7LWnn9u5MRjjeyPpY32igHl_0VoMD30JoCRcVU4MFmGrwfvl-bohpC-tJWcm3c3uiJ04mGdwUJxLpw2dQ",
            "price": 210.34,
            "time": 1706178467295,
            "title": "Прямо с завода"
        },
        {
            "skinName": "Classified",
            "rarity": "Classified",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhoyszBcjJR7dSzkJKEmcj4OrzZglRd6dd2j6fHoon00Fe3qkM-Z2GiJIKTcVI-aV_Xqwe3kufr0JHquZmdySRi7icr-z-DyKuim8q8",
            "price": 34.8,
            "time": 1706178467295,
            "title": "Прямо с завода"
        },
        {
            "skinName": "Tranquility",
            "rarity": "Industrial",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-IluX9J7rCqWdY781lteXA54vwxgTi-xZqYG77coPHd1dsZw6D_1Lvw7q9gZO96p6dz3oxsiAh5inenxGpwUYbnX3d0Ig",
            "price": 465,
            "time": 1706178467295,
            "title": "Прямо с завода"
        },
        {
            "skinName": "Bloodsport",
            "rarity": "Covert",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLbUkmJE5fp9i_vG8MKljgDjrkpuZmGiIISRIFU_aQrV81a9kObojMPt6JSYnCRl63Zx5CzZgVXp1oPn8d3r",
            "price": 2016.68,
            "time": 1706178467295,
            "title": "Прямо с завода"
        },
        {
            "skinName": "Chantico's Fire",
            "rarity": "Covert",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITCmX5d_MR6j_v--YXygECLpxIuNDztII-We1I4aAqE_Fi_lerthMXttc7OnXRmvyhw4Xndlx3kiUkfa-ZuguveFwseJK64Qw",
            "price": 3520.47,
            "time": 1706178467295,
            "title": "Прямо с завода"
        },
        {
            "skinName": "Bloodsport",
            "rarity": "Covert",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLbUkmJE5fp9i_vG8MKljgDjrkpuZmGiIISRIFU_aQrV81a9kObojMPt6JSYnCRl63Zx5CzZgVXp1oPn8d3r",
            "price": 2016.68,
            "time": 1706178467295,
            "title": "Прямо с завода"
        },
        {
            "skinName": "Baroque Purple",
            "rarity": "Industrial",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszedDNH-NOJhJWZh_vxDLbUkmJE5fp9i_vG8MLx2Qbl-xVpYDvzLISde1c_YQ6Dr1m-we7ohpG46MjMn3Y2vnZ04HyOgVXp1mer_etC",
            "price": 467.32,
            "time": 1706178467295,
            "title": "Прямо с завода"
        },
        {
            "skinName": "Bloodsport",
            "rarity": "Covert",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLbUkmJE5fp9i_vG8MKljgDjrkpuZmGiIISRIFU_aQrV81a9kObojMPt6JSYnCRl63Zx5CzZgVXp1oPn8d3r",
            "price": 2016.68,
            "time": 1706178467295,
            "title": "Прямо с завода"
        },
        {
            "skinName": "Chantico's Fire",
            "rarity": "Covert",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITCmX5d_MR6j_v--YXygECLpxIuNDztII-We1I4aAqE_Fi_lerthMXttc7OnXRmvyhw4Xndlx3kiUkfa-ZuguveFwseJK64Qw",
            "price": 3520.47,
            "time": 1706178467295,
            "title": "Прямо с завода"
        },
        {
            "skinName": "Crimson Web",
            "rarity": "Classified",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PvRTipH7s-JkIGZnPLmDLbUkmJE5fp9i_vG8ML22wbj-0tqZG_2INeTdgc-Zl_S-FbqxL-71J60up7IzSY36CkmsXnUgVXp1lzsUQgy",
            "price": 127.5,
            "time": 1706178467295,
            "title": "Прямо с завода"
        },
        {
            "skinName": "Muertos",
            "rarity": "Classified",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09G3moSKm_bLP7LWnn9u5MRjjeyPpY32igHl_0VoMD30JoCRcVU4MFmGrwfvl-bohpC-tJWcm3c3uiJ04mGdwUJxLpw2dQ",
            "price": 210.34,
            "time": 1706178467295,
            "title": "Прямо с завода"
        },
        {
            "skinName": "Classified",
            "rarity": "Classified",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhoyszBcjJR7dSzkJKEmcj4OrzZglRd6dd2j6fHoon00Fe3qkM-Z2GiJIKTcVI-aV_Xqwe3kufr0JHquZmdySRi7icr-z-DyKuim8q8",
            "price": 34.8,
            "time": 1706178467295,
            "title": "Прямо с завода"
        },
        {
            "skinName": "Tranquility",
            "rarity": "Industrial",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-IluX9J7rCqWdY781lteXA54vwxgTi-xZqYG77coPHd1dsZw6D_1Lvw7q9gZO96p6dz3oxsiAh5inenxGpwUYbnX3d0Ig",
            "price": 465,
            "time": 1706178467295,
            "title": "Прямо с завода"
        },
        {
            "skinName": "Bloodsport",
            "rarity": "Covert",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLbUkmJE5fp9i_vG8MKljgDjrkpuZmGiIISRIFU_aQrV81a9kObojMPt6JSYnCRl63Zx5CzZgVXp1oPn8d3r",
            "price": 2016.68,
            "time": 1706178467295,
            "title": "Прямо с завода"
        },
        {
            "skinName": "Chantico's Fire",
            "rarity": "Covert",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITCmX5d_MR6j_v--YXygECLpxIuNDztII-We1I4aAqE_Fi_lerthMXttc7OnXRmvyhw4Xndlx3kiUkfa-ZuguveFwseJK64Qw",
            "price": 3520.47,
            "time": 1706178467295,
            "title": "Прямо с завода"
        },
        {
            "skinName": "Bloodsport",
            "rarity": "Covert",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLbUkmJE5fp9i_vG8MKljgDjrkpuZmGiIISRIFU_aQrV81a9kObojMPt6JSYnCRl63Zx5CzZgVXp1oPn8d3r",
            "price": 2016.68,
            "time": 1706178467295,
            "title": "Прямо с завода"
        }
    ],
    setItems: (items) => set({ items: items }),
}));