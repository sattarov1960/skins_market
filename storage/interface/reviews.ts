import {ReviewI} from "@/interface/components/review";

export interface ReviewsI{
    reviews: ReviewI[]
    setReviews: (reviews: ReviewI[]) => void
}