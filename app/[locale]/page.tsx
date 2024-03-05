import {Metadata} from "next";
import {getMeta} from "@/utilities/meta";
import {MainLogout} from "@/layout/screens/mainLogout/mainLogout";
import {MainLogin} from "@/layout/screens/mainLogin/mainLogin";

export const metadata: Metadata = getMeta("Главная",
    "",
    ['Продать', 'скины', 'CS2', 'Dota 2', 'Rust', 'TF2', 'CSGO', 'КС', 'CS', 'дорого', 'выгодно', 'деньги', 'безопасно', 'быстро', 'мгновенно', 'Name.Market', 'нейм маркет'])


async function Page() {
    try{
        const dynamicData = await fetch( `${process.env.localhost_api}/user`, { cache: 'no-store', credentials: "include" })
        const data = await dynamicData.json()
        console.log(data)
    }
    catch (e){
        console.log(`Ошибка запроса к серверу при получении данных пользователя: ${e}`)
    }
    const isAuth = false
    return isAuth ? <MainLogin/> : <MainLogout/>;
}

export default Page