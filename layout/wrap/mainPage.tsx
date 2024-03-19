import {MainLogin} from "@/layout/screens/mainLogin/mainLogin";
import {MainLogout} from "@/layout/screens/mainLogout/mainLogout";
import {StoreInitializerInventory} from "@/storage/server/inventory.ts";
import {useInventoryStore} from "@/storage/client/inventory";
import {getAppIdByName} from "@/utilities/getAppIdByName";
import {useLastSalesStore} from "@/storage/client/lastSales";
import {StoreInitializerLastSales} from "@/storage/server/lastSales";
import {useReviewsStore} from "@/storage/client/reviews";
import {StoreInitializerReviews} from "@/storage/server/reviews";
import {useMetaStore} from "@/storage/client/meta";
import {StoreInitializerMeta} from "@/storage/server/meta";

export const MainPage = async ({
                                   isAuth,
                                   params,
                                   searchParams
}: {
    isAuth: boolean;
    params: { slug: string };
    searchParams? :{ [key: string]: string | string[] | undefined };
}) => {
    let appId = 730
    let lastItems = []
    let reviews = []
    let meta: MetaI = {
        status: false,
        countReviews: 0,
        timeWorking: 0,
        countUsers: 0,
        countSales: 0,
        totalPrice: 0,
        medianPrice: 0,
        timeTrade: 0
    }
    if (searchParams?.game){
        appId = getAppIdByName(searchParams.game as string)
        useInventoryStore.setState({activeGame: appId})
    }
    try{
        let response;
        try {
            response = await fetch(`${process.env.localhost_api}/last_sales`, {
                next: { revalidate: 60 }
            });
        } catch (error) {
            console.error('Error during fetch:', error);
            return;
        }
        const data = await response.json()
        if (data.status){
            lastItems = data.items
            useLastSalesStore.setState({items: lastItems})
        }
        else{
            console.log("Не удалось загрузить последние продажи")
        }
    }
    catch (e) {
        console.log("Ошибка загрузки последних продаж")
    }
    try{
        let response;
        try {
            response = await fetch(`${process.env.localhost_api}/reviews`, {
                next: { revalidate: 3600 }
            });
        } catch (error) {
            console.error('Error during fetch:', error);
            return;
        }
        const data = await response.json()
        if (data.status){
            reviews = data.reviews
            useReviewsStore.setState({reviews: reviews})
        }
        else{
            console.log("Не удалось загрузить отзывы")
        }
    }
    catch (e) {
        console.log("Ошибка загрузки отзывов")
        throw e
    }
    try{
        let response;
        try {
            response = await fetch(`${process.env.localhost_api}/meta`, {
                next: { revalidate: 3600 }
            });
        } catch (error) {
            console.error('Error during fetch:', error);
            return;
        }
        const data = await response.json()
        if (data.status){
            meta = data
            useMetaStore.setState({
                medianPrice: data.medianPrice,
                countReviews: data.countReviews,
                timeWorking: data.timeWorking,
                countUsers: data.countUsers,
                countSales: data.countSales,
                totalPrice: data.totalPrice,
                timeTrade: data.timeTrade,
                status: data.status
            })
        }
        else{
            console.log("Не удалось загрузить мета информацию")
        }
    }
    catch (e) {
        console.log("Ошибка загрузки мета информации")
        throw e
    }
    return (
    <>
        <StoreInitializerLastSales items={lastItems}/>
        <StoreInitializerReviews reviews={reviews}/>
        <StoreInitializerMeta medianPrice={meta.medianPrice} timeTrade={meta.timeTrade} status={meta.status} countReviews={meta.countReviews} countSales={meta.countSales} countUsers={meta.countUsers} timeWorking={meta.timeWorking} totalPrice={meta.totalPrice}/>
        {isAuth ? <>
            <StoreInitializerInventory appId={appId}/>
            <MainLogin/>
        </> : <MainLogout/>}
    </>
    )
}