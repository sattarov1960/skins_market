import {getMeta} from "@/utilities/meta";
import {Partner} from "@/layout/screens/partner/partner";
import {useReviewsStore} from "@/storage/client/reviews";
import {usePartnerStore} from "@/storage/client/partner";
import {PartnerI, PartnerResponseI} from "@/interface/components/partner";
import {StoreInitializerPartner} from "@/storage/server/partner";

export const metadata = getMeta("Партнерка",
                           "Получите свою уникальную реферальную ссылку и начните зарабатывать. Присоединяйтесь к нашей партнерской программе и богатейте на продаже. ",
                            ["партнерская программа", "реферальная ссылка", "выгоды партнерства", "партнерские бонусы"])
async function Page() {
    let partner: PartnerResponseI = {
        status: false,
        partner: {
            totalEarnings: 0,
            totalInvited: 0,
            maxEarning: 0,
            averageInvited: 0,
        }
    }
    try{
        let response;
        try {
            response = await fetch(`${process.env.localhost_api}/partner`, {
                next: { revalidate: 3600 }
            });
        } catch (error) {
            console.error('Error during fetch:', error);
            return;
        }
        partner = await response.json()
        if (partner.status){
            usePartnerStore.setState({
                averageInvited: partner.partner.averageInvited,
                maxEarning: partner.partner.maxEarning,
                totalInvited: partner.partner.totalInvited,
                totalEarnings: partner.partner.totalEarnings
            })
        }
        else{
            console.log("Не удалось загрузить партнерскую информацию")
        }
    }
    catch (e) {
        console.log("Ошибка загрузки партнерской информации")
        throw e
    }
    return (
        <>
            <StoreInitializerPartner {...partner.partner}/>
            <Partner/>
        </>
    )
}
export default Page