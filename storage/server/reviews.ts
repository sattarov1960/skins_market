"use client";

import {FC, useRef} from "react"
import {ReviewI} from "@/interface/components/review";
import {useReviewsStore} from "@/storage/client/reviews";

interface ReviewsPropsI {
    reviews: ReviewI[]
}

export const StoreInitializerReviews: FC<ReviewsPropsI> = ({reviews}) => {
    const initialized = useRef(false)
    if (!initialized.current){
        useReviewsStore.setState({
            reviews: reviews
        })
        initialized.current = true
    }
    return null
}