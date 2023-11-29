import {getMeta} from "@/utilities/meta";
import {Profile} from "@/layout/screens/profile/profile";

export const metadata = getMeta("Профиль",
     "Управляйте своим игровым профилем легко! Установите трейд ссылку, telegram, email для удобной продажи скинов.",
    ["профиль", "трейд ссылка", "trade link", "telegram", "email", "контакты", "связь"])

function Page() {
    return (
        <>
            <Profile/>
        </>
    )
}
export default Page