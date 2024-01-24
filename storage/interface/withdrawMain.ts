export type StatusPaymentSystemType = {
    [key: string]: boolean;
}

export interface WithdrawMainI {
    workingPaymentSystem: StatusPaymentSystemType;
    activePaymentSystem: string;
    setActivePaymentSystem: (paymentSystem: string) => void;
}

export const StatusPaymentSystem: StatusPaymentSystemType = {
    "Cards": false,
    "Qiwi": false,
    "Bitcoin": false,
    "SBP": false,
    "USDT TRC20": false
}