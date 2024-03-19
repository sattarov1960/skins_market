import {PartnerI} from "@/interface/components/partner";

export interface PartnerStoreI extends PartnerI{
    setMaxEarning: (maxEarning: number) => void
    setAverageInvited: (averageInvited: number) => void
    setTotalEarnings: (totalEarnings: number) => void
    setTotalInvited: (totalInvited: number) => void
}