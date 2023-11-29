import {getMeta} from "@/utilities/meta";
import {Withdraw} from "@/layout/screens/withdraw/withdraw";

export const metadata = getMeta("Выплаты",
                           "Выплаты на сайте: реферальные бонусы и доходы от продажи скинов Steam. Просматривайте суммы и способы оплаты.",
                            ["выплаты", "история выплат", "Способы оплаты", "Суммы выводов", "Статистика реферальных выводов"])

function Page() {
    return (
        <>
            <Withdraw/>
        </>
    )
}
export default Page
