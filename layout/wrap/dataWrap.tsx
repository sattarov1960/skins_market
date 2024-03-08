import { cookies } from 'next/headers';
import {Footer} from "@/layout/components/footer/footer";
import {Header} from "@/layout/components/header/header";
import {ReactNode} from "react";
import axios from "axios";
import {useUserStore} from "@/storage/client/user";
import {StoreInitializerUser} from "@/storage/server/user";


export async function DataWrap({ children }: { children: ReactNode}) {
    const cookie = cookies().toString()
    let isAuth = false;
    if (cookie.includes("access_token_cookie")){
        try {
            const response = await axios.get(`${process.env.localhost_api}/user`, {timeout: 2 * 1000, headers: {Cookie: cookie}});
            if (response.data.status && response.data.auth){
                const data = response.data
                useUserStore.setState({
                    auth: true,
                    email: data.email,
                    steamIcon: data.steamIcon,
                    steamUserName: data.steamUserName,
                    totalSales: data.totalSales,
                    tradeLink: data.tradeLink,
                    telegramUserName: data.telegramUserName
                })
            }
        }
        catch (e) {
            console.log("Ошибка загрузки авторизации")
        }
    }
    return (
      <>
          <StoreInitializerUser
            auth={useUserStore.getState().auth}
            email={useUserStore.getState().email}
            steamIcon={useUserStore.getState().steamIcon}
            steamUserName={useUserStore.getState().steamUserName}
            totalSales={useUserStore.getState().totalSales}
            tradeLink={useUserStore.getState().tradeLink}
            telegramUserName={useUserStore.getState().telegramUserName}
          />
          <Header/>
              {children}
          <Footer/>
      </>
    );
}