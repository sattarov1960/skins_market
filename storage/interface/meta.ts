interface MetaI {
    status: boolean;
    countReviews: number;
    timeWorking: number;
    countUsers: number;
    countSales: number;
    totalPrice: number;
    medianPrice: number;
    timeTrade: number;
}
interface MetaStoreI extends MetaI {
    setMeta: (meta: MetaI) => void;
}