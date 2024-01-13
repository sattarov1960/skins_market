import { create } from "zustand";
import {CardI, PaymentI} from "@/storage/interface/payment";


export const usePaymentsStore = create<PaymentI>((set) => ({
    qiwi: '',
    usdtTrc20: '',
    cards: [],
    activeCard: {pan: '', img: ''},
    setActiveCard: (card: CardI) => set({ activeCard: card }),
    delCard: (pan: string) => set((state) => ({ cards: state.cards.filter((card) => card.pan !== pan) })),
    setCards: (cards: CardI[]) => set((state) => ({
        cards: cards,
        activeCard: cards.length > 0 ? cards[0] : state.activeCard
    })),
    setQiwi: (qiwi: string) => set({ qiwi: qiwi }),
    setUsdtTrc20: (usdtTrc20: string) => set({ usdtTrc20: usdtTrc20 })
}))