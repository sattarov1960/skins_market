export interface PartnerI{
    totalEarnings: number
    totalInvited: number
    averageInvited: number
    maxEarning: number
}

export interface PartnerResponseI{
    status: boolean
    partner: PartnerI
}