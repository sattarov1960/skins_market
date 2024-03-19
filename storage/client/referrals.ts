import { create } from "zustand";
import {ReferralsI} from "@/storage/interface/referrals";
import {RefTableItemI} from "@/interface/components/refTableItem";


export const useReferralsStore = create<ReferralsI>((set) => ({
    items: [],
    referralBalance: 0,
    referralCode: '',
    inviteLink: '',
    totalCostSalesReferrals: 0,
    totalEarned: 0,
    totalInvited: 0,
    setReferralBalance: (referralBalance: number) => set({referralBalance: referralBalance}),
    setReferralCode: (referralCode: string) => set({referralCode: referralCode}),
    setInviteLink: (inviteLink: string) => set({inviteLink: inviteLink}),
    setTotalCostSalesReferrals: (totalCostSalesReferrals: number) => set({totalCostSalesReferrals: totalCostSalesReferrals}),
    setTotalEarned: (totalEarned: number) => set({totalEarned: totalEarned}),
    setTotalInvited: (totalInvited: number) => set({totalInvited: totalInvited}),
    setItems: (items: RefTableItemI[]) => set({items: items})
}));