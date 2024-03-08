import {getMeta} from "@/utilities/meta";
import {Payments} from "@/layout/screens/payments/payments";
import {cookies} from "next/headers";
import {usePaymentsStore} from "@/storage/client/payments";
import {StoreInitializerPayment} from "@/storage/server/payments";
export const metadata = getMeta("Платежные реквизиты",
                           "Управляйте платежные реквизиты на сайте. Установите банковскую карту, Qiwi кошелек и USDT TRC20 для удобных выводов.",
                            ["Платежные реквизиты", "Банковская карта", "Qiwi кошелек", "USDT TRC20", "Платежные системы"])

async function Page() {
    const cookie = cookies().toString()
    if (cookie.includes("access_token_cookie")) {
        try{
            const response = await fetch( `${process.env.localhost_api}/payments_data`, { cache: 'no-store', headers: {Cookie: cookie}})
            if (response.status === 200){
                const data = await response.json()
                if (data.status){
                    usePaymentsStore.setState({
                        usdtTrc20: data.usdtTrc20,
                        qiwi: data.qiwi,
                        cards: data.cards,
                        activeCard: data.activeCard,
                    })
                }
            }
        }
        catch (e){
            console.log("Ошибка загрузки payments data")
        }
    }
    return (
        <>
            <StoreInitializerPayment
                usdtTrc20={usePaymentsStore.getState().usdtTrc20}
                qiwi={usePaymentsStore.getState().qiwi}
                activeCard={usePaymentsStore.getState().activeCard}
                cards={usePaymentsStore.getState().cards}
            />
            <Payments/>
        </>
    )
}
export default Page