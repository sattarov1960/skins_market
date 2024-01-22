export interface User{
    steamIcon: string;
    steamUserName: string;
    totalSales: number;
    tradeLink: string;
    telegramUserName: string;
    email: string;
    setEmail: (email: string) => void;
    setTelegramUserName: (name: string) => void;
    setTradeLink: (link: string) => void;
    setSteamUserName: (name: string) => void;
    setTotalSales: (total: number) => void;
}