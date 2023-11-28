import {getMeta} from "@/utilities/meta";

export const metadata = getMeta("Продажи",
                           "Смотрите историю продажи предметов. Ваши обмены скинами Steam в одном месте: узнайте, что продали, по какой цене.",
                            ["Продажи", "История", "История продаж", "Мои продажи", "Просмотр цен на проданные предметы"])


function Page() {
    return (
        <>
            <h1>Sales</h1>
        </>
    )
}
export default Page