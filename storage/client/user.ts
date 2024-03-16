import { create } from "zustand";
import {UserI} from "@/storage/interface/user";


export const useUserStore = create<UserI>((set) => ({
    auth: false,
    steamIcon: "",
    totalSales: 0,
    steamUserName: "",
    tradeLink: "",
    telegramUserName: "",
    email: "",
    setEmail: (email: string) => set({ email: email }),
    setTelegramUserName: (name: string) => set({ telegramUserName: name }),
    setTradeLink: (link: string) => set({ tradeLink: link }),
    setSteamUserName: (name: string) => set({ steamUserName: name }),
    setTotalSales: (total: number) => set({ totalSales: total }),
    setAuth: (auth) => set({ auth: auth }),
    reset: () => set({ auth: false, steamIcon: "", totalSales: 0, steamUserName: "", tradeLink: "", telegramUserName: "", email: ""})
}));