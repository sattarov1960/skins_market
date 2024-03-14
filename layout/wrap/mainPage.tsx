import {MainLogin} from "@/layout/screens/mainLogin/mainLogin";
import {MainLogout} from "@/layout/screens/mainLogout/mainLogout";
import {StoreInitializerInventory} from "@/storage/server/inventory.ts";
import {useInventoryStore} from "@/storage/client/inventory";
import {getAppIdByName} from "@/utilities/getAppIdByName";

export const MainPage = async ({
                                   isAuth,
                                   params,
                                   searchParams
}: {
    isAuth: boolean;
    params: { slug: string };
    searchParams? :{ [key: string]: string | string[] | undefined };
}) => {
    let appId = 730
    if (searchParams?.game){
        appId = getAppIdByName(searchParams.game as string)
        useInventoryStore.setState({activeGame: appId})
    }
    return (
        isAuth ? <>
            <StoreInitializerInventory appId={appId}/>
            <MainLogin/>
        </> : <MainLogout/>
    )
}