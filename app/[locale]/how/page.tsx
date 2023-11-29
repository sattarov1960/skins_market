import {getMeta} from "@/utilities/meta";
import {How} from "@/layout/screens/how/how";

export const metadata = getMeta("Как это работает",
                           "Узнайте, как легко продавать Cкины. Расскажем, как начать выгодные сделки и получить максимум от продажи предметов.",
                            ["Как это работает", "Как продать скины", "Руководство по продаже скинов Steam", "Шаги по продаже скинов Steam", "Максимизация выгоды от продажи скинов"])

function Page() {
    return (
        <>
            <How/>
        </>
    )
}
export default Page