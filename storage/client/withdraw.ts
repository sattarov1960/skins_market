import { create } from "zustand";
import {WithdrawItemsI} from "@/storage/interface/withdraw";


export const useWithdrawItemsStore = create<WithdrawItemsI>((set) => ({
    items: [
        {"date": "13.08.2023", "payment": "SBP", "id": "1", "status": "success", "amount": 23.241},
        {"date": "13.08.2023", "payment": "MIR", "id": "1", "status": "pending", "amount": 23.241},
        {"date": "13.08.2023", "payment": "Qiwi", "id": "1", "status": "error", "amount": 23.241},
        {"date": "13.08.2023", "payment": "BTC", "id": "1", "status": "success", "amount": 23.241},
        {"date": "13.08.2023", "payment": "USDT TRC20", "id": "1", "status": "pending", "amount": 23.241},
        {"date": "13.08.2023", "payment": "SBP", "id": "1", "status": "error", "amount": 23.241},
        {"date": "13.08.2023", "payment": "MIR", "id": "1", "status": "success", "amount": 23.241},
    ],
    setItems: (items) => set({ items }),
}));