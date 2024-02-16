import {getMeta} from "@/utilities/meta";
import {Trade} from "@/layout/screens/trade/trade";

export const metadata = getMeta("Активный трейд",
    "Ваш активный трейд, посмотреть ссылку на трейд и предметы участвбщие в нем",
    ["Активный трейд", "ссылка на активный трейд"])

function Page({ params }: { params: { id?: string } }) {
    return <Trade id={params.id}/>
}
export default Page
