import { create } from "zustand";
import {User} from "@/storage/interface/user";
import {SalesItemsI} from "@/storage/interface/salesItems";


export const useSalesStore = create<SalesItemsI>((set) => ({
    items: [
        {
            date: "13.08.2023",
            status: "success",
            amount: 100,
            items: [
                {
                    cost: 252447.63,
                    image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09u5mIS0luX1Mb7Ch35U18l4jeHVyoD0mlOx5UM4YjvzdoTHJFVvNw3YrlO_xebsgpa7u57Pzidk7nQm53zUmx21g01SLrs4iSV9vgU",
                    marketHashName: "AK-47 | Gold Arabesque (Factory New)",
                    gameId: 730,
                    rarity: "Contraband"
                },
                {
                    cost: 110.52,
                    image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0vL3dzxG6eO6nYeDg8j4MqnWkyUHucB1ieqXrIrz2gHmr0ZvZDj3cNKUdlQ-YF6DqAS2w-i8h5Dt6Zib1zI97Ycw1ud8",
                    marketHashName: "Glock-18 | Fade (Factory New)",
                    gameId: 730,
                    rarity: "Master"
                },
                {
                    cost: 875.77,
                    image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLP7LWnn9u5MRjjeyP9tqhiQ2yqEo6Mmn3doPBcwZqZQrRr1O-we_sgMO5tZ_BzCFr6ycltmGdwULa1vGJFg",
                    marketHashName: "StatTrak M4A4 Howl",
                    gameId: 730,
                    rarity: "Contraband"
                },
                {
                    cost: 252447.63,
                    image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09u5mIS0luX1Mb7Ch35U18l4jeHVyoD0mlOx5UM4YjvzdoTHJFVvNw3YrlO_xebsgpa7u57Pzidk7nQm53zUmx21g01SLrs4iSV9vgU",
                    marketHashName: "AK-47 | Gold Arabesque (Factory New)",
                    gameId: 730,
                    rarity: "Contraband"
                },
            ],
            payment: "usdtTrc20",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "pending",
            amount: 100,
            items: [],
            payment: "qiwi",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "error",
            amount: 100,
            items: [],
            payment: "usdtTrc20",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "success",
            amount: 100,
            items: [],
            payment: "usdtTrc20",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "success",
            amount: 100,
            items: [],
            payment: "bankCard",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "pending",
            amount: 100,
            items: [],
            payment: "qiwi",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "error",
            amount: 100,
            items: [],
            payment: "usdtTrc20",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "success",
            amount: 100,
            items: [],
            payment: "usdtTrc20",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "success",
            amount: 100,
            items: [],
            payment: "bankCard",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "pending",
            amount: 100,
            items: [],
            payment: "qiwi",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "error",
            amount: 100,
            items: [],
            payment: "usdtTrc20",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "success",
            amount: 100,
            items: [],
            payment: "usdtTrc20",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "success",
            amount: 100,
            items: [],
            payment: "bankCard",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "pending",
            amount: 100,
            items: [],
            payment: "qiwi",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "error",
            amount: 100,
            items: [],
            payment: "usdtTrc20",
            id: 1
        },
        {
            date: "13.08.2023",
            status: "success",
            amount: 100,
            items: [],
            payment: "usdtTrc20",
            id: 1
        },
    ],
    setItems: (items) => set({items})
}));