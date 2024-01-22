export interface SalesItemI{
    marketHashName: string
    cost: number
    image: string;
    gameId: number;
    rarity: string
}

export interface SalesItemRowI{
    id: number;
    amount: number;
    payment: string;
    status: string;
    date: string;
    items: SalesItemI[]
}