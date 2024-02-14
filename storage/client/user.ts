import { create } from "zustand";
import {User} from "@/storage/interface/user";


export const useUserStore = create<User>((set) => ({
    auth: false,
    steamIcon: "f2ae4544e940ea8943d088507c57db5868461855",
    totalSales: 1000.4,
    steamUserName: "@BuyerSkinsBot",
    tradeLink: "https://steamcommunity.com/tradeoffer/new/?partner=123456789&token=123456789",
    telegramUserName: "",
    email: "",
    setEmail: (email: string) => set({ email: email }),
    setTelegramUserName: (name: string) => set({ telegramUserName: name }),
    setTradeLink: (link: string) => set({ tradeLink: link }),
    setSteamUserName: (name: string) => set({ steamUserName: name }),
    setTotalSales: (total: number) => set({ totalSales: total }),
    setAuth: (auth) => set({ auth: auth }),
}));