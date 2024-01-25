export type StatusPaymentSystemType = {
    [key: string]: boolean;
}

export interface WithdrawMainI {
    workingPaymentSystem: StatusPaymentSystemType;
    activePaymentSystem: string;
    wallet: string
    email: string;
    setActivePaymentSystem: (paymentSystem: string) => void;
    setWallet: (wallet: string) => void;
    setEmail: (email: string) => void;
}

export const StatusPaymentSystem: StatusPaymentSystemType = {
    "Cards": false,
    "Qiwi": false,
    "Bitcoin": false,
    "SBP": false,
    "USDT TRC20": false
}