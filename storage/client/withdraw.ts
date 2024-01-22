import { create } from "zustand";
import {WithdrawItemsI} from "@/storage/interface/withdraw";


export const useWithdrawItemsStore = create<WithdrawItemsI>((set) => ({
    items: [
        {"date": "13.08.2023", "payment": "bankCard", "id": "1", "status": "success", "amount": 23.241},
        {"date": "13.08.2023", "payment": "bankCard", "id": "1", "status": "success", "amount": 23.241},
        {"date": "13.08.2023", "payment": "bankCard", "id": "1", "status": "success", "amount": 23.241},
        {"date": "13.08.2023", "payment": "bankCard", "id": "1", "status": "success", "amount": 23.241},
        {"date": "13.08.2023", "payment": "bankCard", "id": "1", "status": "success", "amount": 23.241},
        {"date": "13.08.2023", "payment": "bankCard", "id": "1", "status": "success", "amount": 23.241},
        {"date": "13.08.2023", "payment": "bankCard", "id": "1", "status": "success", "amount": 23.241},
    ],
    setItems: (items) => set({ items }),
}));