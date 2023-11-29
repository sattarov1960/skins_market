import {getMeta} from "@/utilities/meta";
import {Contact} from "@/layout/screens/contact/contact";

export const metadata = getMeta("Помощь",
                           "Поддержка при покупке или продаже скинов Steam через удобную форму на странице Контактов. Связаться с нами легко! ",
                            ["Контактная информация", "поддержка пользователей", "форма обратной связи", "заявка в поддержку",  "контакты", "поддержка", "помощь"])

function Page() {
    return (
        <>
            <Contact/>
        </>
    )
}
export default Page
