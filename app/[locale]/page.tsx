import {Metadata} from "next";
import {getMeta} from "@/utilities/meta";
import { MainPage } from "@/layout/wrap/mainPage";
import { cookies } from 'next/headers';


export const metadata: Metadata = getMeta("Главная",
    "",
    ['Продать', 'скины', 'CS2', 'Dota 2', 'Rust', 'TF2', 'CSGO', 'КС', 'CS', 'дорого', 'выгодно', 'деньги', 'безопасно', 'быстро', 'мгновенно', 'CS SELL', 'нейм маркет'])


async function Page({
                        params,
                        searchParams,
                    }: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const cookie = cookies().toString()
    let isAuth = false;
    if (cookie.includes("access_token_cookie")){
        try{
            const dynamicData = await fetch( `${process.env.localhost_api}/user`, { cache: 'no-store', headers: {Cookie: cookie}})
            isAuth = dynamicData.status === 200;
        }
        catch (e) {
            console.log("Ошибка загрузки авторизации")
        }
    }
    return <MainPage isAuth={isAuth} params={params} searchParams={searchParams}/>;
}

export default Page