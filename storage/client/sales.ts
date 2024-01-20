import { create } from "zustand";
import {User} from "@/storage/interface/user";
import {SalesItemsI} from "@/storage/interface/salesItems";


export const useSalesStore = create<SalesItemsI>((set) => ({
    items: [
        {
            date: "13.08.2023",
            status: "success",
            amount: 100,
            images: [],
            payment: "bankCard",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "pending",
            amount: 100,
            images: [],
            payment: "qiwi",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "error",
            amount: 100,
            images: [],
            payment: "usdtTrc20",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "success",
            amount: 100,
            images: [],
            payment: "usdtTrc20",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "success",
            amount: 100,
            images: [],
            payment: "bankCard",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "pending",
            amount: 100,
            images: [],
            payment: "qiwi",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "error",
            amount: 100,
            images: [],
            payment: "usdtTrc20",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "success",
            amount: 100,
            images: [],
            payment: "usdtTrc20",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "success",
            amount: 100,
            images: [],
            payment: "bankCard",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "pending",
            amount: 100,
            images: [],
            payment: "qiwi",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "error",
            amount: 100,
            images: [],
            payment: "usdtTrc20",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "success",
            amount: 100,
            images: [],
            payment: "usdtTrc20",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "success",
            amount: 100,
            images: [],
            payment: "bankCard",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "pending",
            amount: 100,
            images: [],
            payment: "qiwi",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "error",
            amount: 100,
            images: [],
            payment: "usdtTrc20",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "success",
            amount: 100,
            images: [],
            payment: "usdtTrc20",
            id: 1
        },
    ],
    setItems: (items) => set({items})
}));