export interface UserI extends UserStoreI{
    setEmail: (email: string) => void;
    setTelegramUserName: (name: string) => void;
    setTradeLink: (link: string) => void;
    setSteamUserName: (name: string) => void;
    setTotalSales: (total: number) => void;
    setAuth: (auth: boolean) => void;
    reset: () => void;
}

export interface UserStoreI{
    auth: boolean;
    steamIcon: string;
    steamUserName: string;
    totalSales: number;
    tradeLink: string;
    telegramUserName: string;
    email: string;
}