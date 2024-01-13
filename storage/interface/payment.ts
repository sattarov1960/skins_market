export interface CardI {
    pan: string;
    img: string;
}


export interface PaymentI {
    usdtTrc20: string;
    qiwi: string
    activeCard: CardI;
    cards: CardI[];
    delCard: (pan: string) => void;
    setCards: (cards: CardI[]) => void;
    setActiveCard: (card: CardI) => void;
    setQiwi: (qiwi: string) => void;
    setUsdtTrc20: (usdtTrc20: string) => void;
}