import {getMeta} from "@/utilities/meta";
import {Sales} from "@/layout/screens/sales/sales";

export const metadata = getMeta("Продажи",
                           "Смотрите историю продажи предметов. Ваши обмены скинами Steam в одном месте: узнайте, что продали, по какой цене.",
                            ["Продажи", "История", "История продаж", "Мои продажи", "Просмотр цен на проданные предметы"])


function Page() {
    return (
        <>
            <Sales/>
        </>
    )
}
export default Page