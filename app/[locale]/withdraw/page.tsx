import {getMeta} from "@/utilities/meta";
import {Withdraw} from "@/layout/screens/withdraw/withdraw";
import {cookies} from "next/headers";
import {StoreInitializerWithdrawItems} from "@/storage/server/withdraw";
import {useWithdrawItemsStore} from "@/storage/client/withdraw";

export const metadata = getMeta("Выплаты",
                           "Вывод денег на сайте: реферальные бонусы и доходы от продажи скинов Steam. Просматривайте суммы и способы выводов.",
                            ["выплаты", "история выплат", "Способы оплаты", "выводы", "Суммы выводов", "Статистика реферальных выводов"])

async function Page() {
    const cookie = cookies().toString()
    let items = []
    if (cookie.includes("access_token_cookie")){
        try{
            const response = await fetch( `${process.env.localhost_api}/withdraw`, { cache: 'no-store', headers: {Cookie: cookie}})
            const data = await response.json()
            if (data.status){
                items = data.items
                useWithdrawItemsStore.setState({items: items})
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <StoreInitializerWithdrawItems items={items}/>
            <Withdraw/>
        </>
    )
}
export default Page
