import {getMeta} from "@/utilities/meta";
import {Referrals} from "@/layout/screens/referrals/referrals";
import {cookies} from "next/headers";
import {useReferralsStore} from "@/storage/client/referrals";
import {StoreInitializerReferrals} from "@/storage/server/referrals";

export const metadata = getMeta("Ваши рефералы",
    "Реферальная статистика, приглашенные пользователи, их сделки и заработок.",
    ["рефералы", "приглашенные", "реферальная система", "referrals", "invited", "referrals earn", "earn"])

async function Page() {
    const cookie = cookies().toString()
    let data = {
        status: false,
        totalEarned: 0,
        totalInvited: 0,
        totalCostSalesReferrals: 0,
        referralBalance: 0,
        referralCode: "",
        inviteLink: "",
        items: []
    }
    if (cookie.includes("access_token_cookie")){
        try{
            const response = await fetch( `${process.env.localhost_api}/referral`, { cache: 'no-store', headers: {Cookie: cookie}})
            data = await response.json()
            if (data.status){
                useReferralsStore.setState({
                    totalEarned: data.totalEarned,
                    totalInvited: data.totalInvited,
                    totalCostSalesReferrals: data.totalCostSalesReferrals,
                    referralBalance: data.referralBalance,
                    referralCode: data.referralCode,
                    inviteLink: data.inviteLink,
                    items: data.items
                })
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <StoreInitializerReferrals {...data}/>
            <Referrals/>
        </>
    )
}
export default Page