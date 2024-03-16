import { create } from "zustand";
import {ReviewsI} from "@/storage/interface/reviews";


export const useReviewsStore = create<ReviewsI>((set) => ({
    reviews: [
        {
            "img": "/girl_avatar_forReviews.webp",
            "desc": "Отличный сайт! Продал АК-47 Азимов по рыночной цене, деньги пришли практически сразу. Рекомендую.",
            "link": "",
            "time": 1707547522,
            "username": "UsernameTest",
        },
    ],
    setReviews: (reviews) => set({reviews: reviews}),
}));