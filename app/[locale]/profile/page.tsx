import {getMeta} from "@/utilities/meta";

export const metadata = getMeta("Профиль",
     "Управляйте своим игровым профилем легко! Установите трейд ссылку, telegram, email для удобной продажи скинов.",
    ["профиль", "трейд ссылка", "trade link", "telegram", "email", "контакты", "связь"])

function Page() {
    return (
        <>
            <h1>Profile</h1>
        </>
    )
}
export default Page