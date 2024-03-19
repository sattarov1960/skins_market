import {getMeta} from "@/utilities/meta";
import {Sales} from "@/layout/screens/sales/sales";
import {cookies} from "next/headers";
import {useWithdrawItemsStore} from "@/storage/client/withdraw";
import {useSalesStore} from "@/storage/client/sales";
import {StoreInitializerSales} from "@/storage/server/sales";

export const metadata = getMeta("Продажи",
                           "Смотрите историю продажи предметов. Ваши обмены скинами Steam в одном месте: узнайте, что продали, по какой цене.",
                            ["Продажи", "История", "История продаж", "Мои продажи", "Просмотр цен на проданные предметы"])


async function Page() {
    const cookie = cookies().toString()
    let items = []
    if (cookie.includes("access_token_cookie")){
        try{
            const response = await fetch( `${process.env.localhost_api}/sales`, { cache: 'no-store', headers: {Cookie: cookie}})
            const data = await response.json()
            if (data.status){
                items = data.items
                useSalesStore.setState({items: items})
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <StoreInitializerSales items={items}/>
            <Sales/>
        </>
    )
}
export default Page