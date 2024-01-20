import {RefTableItemI} from "@/interface/components/refTableItem";

export interface ReferralsI{
    totalEarned: number
    totalInvited: number
    totalCostSalesReferrals: number
    referralBalance: number
    referralCode: string
    inviteLink: string
    items: RefTableItemI[];
    setItems: (items: RefTableItemI[]) => void
    setTotalEarned: (totalEarned: number) => void
    setTotalInvited: (totalInvited: number) => void
    setTotalCostSalesReferrals: (totalCostSalesReferrals: number) => void
    setReferralBalance: (referralBalance: number) => void
    setReferralCode: (referralCode: string) => void
    setInviteLink: (inviteLink: string) => void
}