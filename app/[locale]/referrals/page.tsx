import {getMeta} from "@/utilities/meta";
import {Referrals} from "@/layout/screens/referrals/referrals";

export const metadata = getMeta("Ваши рефералы",
    "Реферальная статистика, приглашенные пользователи, их сделки и заработок.",
    ["рефералы", "приглашенные", "referrals", "invited", "referrals earn", "earn"])

function Page() {
    return (
        <>
            <Referrals/>
        </>
    )
}
export default Page