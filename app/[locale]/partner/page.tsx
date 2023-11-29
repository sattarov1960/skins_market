import {getMeta} from "@/utilities/meta";
import {Partner} from "@/layout/screens/partner/partner";

export const metadata = getMeta("Партнерка",
                           "Получите свою уникальную реферальную ссылку и начните зарабатывать. Присоединяйтесь к нашей партнерской программе и богатейте на продаже. ",
                            ["партнерская программа", "реферальная ссылка", "выгоды партнерства", "партнерские бонусы"])
function Page() {
    return (
        <>
            <Partner/>
        </>
    )
}
export default Page