import {getMeta} from "@/utilities/meta";
import {Payments} from "@/layout/screens/payments/components/payments";
export const metadata = getMeta("Платежные реквизиты",
                           "Управляйте платежные реквизиты на сайте. Установите банковскую карту, Qiwi кошелек и USDT TRC20 для удобных выводов.",
                            ["Платежные реквизиты", "Банковская карта", "Qiwi кошелек", "USDT TRC20", "Платежные системы"])

function Page() {
    return (
        <>
            <Payments/>
        </>
    )
}
export default Page