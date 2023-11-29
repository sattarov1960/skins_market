import {getMeta} from "@/utilities/meta";
import {Faq} from "@/layout/screens/faq/faq";

export const metadata = getMeta("Ответы на вопросы (FAQ)",
                           "Ответы на часто задаваемые вопросы (FAQ) о продаже скинов. Узнайте, как удобно и безопасно продавать скины!",
                            ["FAQ", "Ответы", "FAQ по скинам", "не работает", "ошибка", "Ответы на вопросы", "как работает"])

function Page() {
    return (
        <>
            <Faq/>
        </>
    )
}
export default Page
